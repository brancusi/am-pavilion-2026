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

(defnc progress-bar
  "Red bar under the header that fills as the article is read."
  [{:keys [target]}]
  (let [bar (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (let [update! (fn []
                     (when-let [el @target]
                       (let [r (.getBoundingClientRect el)
                             total (- (.-height r) (.-innerHeight js/window))
                             p (if (pos? total) (/ (- (.-top r)) total) 1)]
                         (set! (.. @bar -style -transform)
                               (str "scaleX(" (max 0 (min 1 p)) ")")))))]
       (update!)
       (.addEventListener js/window "scroll" update! #js {:passive true})
       (.addEventListener js/window "resize" update!)
       (fn []
         (.removeEventListener js/window "scroll" update!)
         (.removeEventListener js/window "resize" update!))))
    (d/div {:ref bar :class "ap-progressbar" :style {:transform "scaleX(0)"}
            :aria-hidden true})))

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
    (if post
      (let [{:keys [title date author kind tone summary cover-image component]} post
            nxt (next-post slug)]
        (d/div
         ($ progress-bar {:target article})
         (d/article {:ref article :class "ap-article pb-16 lg:pb-24"}
                    (d/header {:class "ap-article__head"}
                              (d/a {:class "ap-label ap-muted justify-self-start no-underline hover:text-red-text"
                                    :href "/blog"}
                                   "← Journal")
                              (when kind
                                (d/span {:class (str "ap-tag justify-self-start ap-tag--" (name (or tone :red)))} kind))
                              (d/h1 {:class "ap-display-l"} title)
                              (when summary (d/p {:class "ap-lede m-0"} summary))
                              (d/div {:class "ap-article__byline"}
                                     (d/span (journal/display-date date))
                                     (when author (d/span (str "By " author)))))
                    (when cover-image
                      (d/figure {:class "ap-figure ap-full ap-wide"}
                                (d/div {:class "ap-figure__frame" :style #js {"--ar" "3/2"}}
                                       ($ picture {:src cover-image :ar 1.5 :eager? true :alt ""
                                                   :sizes "(min-width: 960px) 1000px, 100vw"}))))
                    (d/div {:class "ap-article__body"}
                           ($ component))
                    (d/div {:class "pt-6 border-t border-rule"}
                           ($ share-bar {:title title}))
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
