(ns amp.pages.blog.post
  "Journal post page (design canvas: Post). Reading-progress bar, article
   head with byline, full-bleed cover, the post body in a reading measure,
   share links and the next post."
  (:require
   [amp.data.journal :as journal]
   [amp.pages.blog.registry :refer [posts posts-by-slug]]
   [amp.ui.picture :refer [picture]]
   [amp.ui.share-bar :refer [share-bar]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private scrub?
  (and (exists? js/CSS) (.supports js/CSS "animation-timeline: view()")))

(defnc progress-bar
  "Red bar under the header that fills as the article is read. Driven by
   the scroll itself (a CSS scroll-driven animation on the article's view
   timeline, see .ap-post in tailwind.css); browsers without that get a
   throttled scroll listener."
  [{:keys [target]}]
  (let [bar (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (when-not scrub?
       (let [queued (atom false)
             update! (fn []
                       (reset! queued false)
                       (when-let [el @target]
                         (let [r (.getBoundingClientRect el)
                               total (- (.-height r) (.-innerHeight js/window))
                               p (if (pos? total) (/ (- (.-top r)) total) 1)]
                           (set! (.. @bar -style -transform)
                                 (str "scaleX(" (max 0 (min 1 p)) ")")))))
             schedule! #(when-not @queued (reset! queued true) (js/requestAnimationFrame update!))]
         (update!)
         (.addEventListener js/window "scroll" schedule! #js {:passive true})
         #(.removeEventListener js/window "scroll" schedule!))))
    (d/div {:ref bar :class "ap-progressbar" :aria-hidden true})))

(defn- next-post
  "The post after `slug` in the listing, wrapping to the first."
  [slug]
  (let [i (first (keep-indexed #(when (= slug (:slug %2)) %1) posts))]
    (when (> (count posts) 1)
      (nth posts (mod (inc i) (count posts))))))

(defnc blog-post
  "Renders a single post by slug, or a not-found message."
  [{:keys [slug]}]
  (let [article (hooks/use-ref nil)
        post (get posts-by-slug slug)]
    (hooks/use-effect
     [post]
     (set! (.-title js/document)
           (str (if post (:title post) "Post not found") " · Armenian Pavilion")))
    (if post
      (let [{:keys [title date author kind tone cover-image cover-ar component]} post
            nxt (next-post slug)]
        (d/div {:class "ap-post"}
         ($ progress-bar {:target article})
         (d/article {:ref article :class "ap-article pb-16 lg:pb-24"}
                    (d/header {:class "ap-article__head"}
                              (d/a {:class "ap-label ap-muted justify-self-start no-underline hover:text-red-text py-3 -my-3"
                                    :href "/blog"}
                                   "← Journal")
                              (when kind
                                (d/span {:class (str "ap-tag justify-self-start ap-tag--" (name (or tone :red)))} kind))
                              (d/h1 {:class "ap-display-l"} title)
                              (d/div {:class "ap-article__byline"}
                                     (d/span (journal/display-date date))
                                     (when author (d/span (str "By " author)))))
                    (when cover-image
                      ;; Whole image, never cropped: portrait covers are capped in height.
                      (d/figure {:class "ap-figure ap-full ap-wide"}
                                (d/div {:class "ap-cover" :style (when cover-ar #js {"--ar" (str cover-ar)})}
                                       ($ picture {:src cover-image :eager? true :alt ""
                                                   :sizes "(min-width: 960px) 1000px, 100vw"}))))
                    (d/div {:class "ap-article__body"}
                           ($ component))
                    (d/div {:class "pt-6 border-t border-rule"}
                           ($ share-bar {:title title
                                        :url   (str "https://armenianpavilion.org/blog/" slug)}))
                    (when nxt
                      (d/a {:class "ap-article__next" :href (str "/blog/" (:slug nxt))}
                           (d/span {:class "ap-label text-yellow"} "Next in the journal")
                           (d/span {:class "ap-h2"} (:title nxt))
                           (d/span {:class "ap-caption !text-on-night opacity-70"}
                                   (journal/display-date (:date nxt))))))))

      (d/div {:class "ap-wrap py-24 flex flex-col gap-6 items-start"}
             (d/p {:class "ap-label ap-muted m-0"} "404")
             (d/h1 {:class "ap-display-l"} "Post not found")
             (d/p {:class "ap-body ap-muted m-0"} "The post you’re looking for doesn’t exist.")
             (d/a {:class "ap-btn ap-btn--ghost" :href "/blog"} "Back to the journal")))))
