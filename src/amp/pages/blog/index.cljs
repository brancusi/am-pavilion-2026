(ns amp.pages.blog.index
  "Journal index (design canvas: Journal). Title with post count, category
   filters, a lead story and the card grid."
  (:require
   [amp.data.journal :as journal]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.post-card :refer [post-card]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private kinds
  (into ["All"] (distinct (keep :kind journal/posts))))

(defnc blog-index
  [_props]
  (let [[kind set-kind!] (hooks/use-state "All")
        shown (if (= kind "All")
                journal/posts
                (filter #(= kind (:kind %)) journal/posts))]
    (d/div {:class "ap-wrap"}
           (d/div {:class "ap-jhead"}
                  (d/div {:class "ap-jhead__title"}
                         (d/div {:class "flex flex-col gap-3"}
                                (d/p {:class "ap-label ap-muted m-0"} "Journal")
                                (d/h1 {:class "ap-display-xl"} "Notes from the studio"))
                         (d/div {:class "flex flex-col items-end gap-2" :aria-live "polite"
                                 :aria-label (str (count shown) (if (= 1 (count shown)) " post" " posts"))}
                                (d/span {:class "ap-jhead__count" :aria-hidden true}
                                        (.padStart (str (count shown)) 2 "0"))
                                (d/span {:class "ap-label ap-muted" :aria-hidden true}
                                        (if (= 1 (count shown)) "Post" "Posts"))))
                  (d/p {:class "ap-lede m-0 max-w-[44ch]"}
                       "Process, travel and the making of The Studio, from Los Angeles to Tesa 41.")
                  (when (> (count kinds) 2)
                    (d/div {:class "ap-filter" :role "group" :aria-label "Filter by category"}
                           (for [k kinds]
                             (d/button {:key k :aria-pressed (= k kind) :on-click #(set-kind! k)} k)))))
           (if (seq shown)
             (d/div {:class "ap-posts pb-16 lg:pb-24"}
                    (map-indexed
                     (fn [i p]
                       ($ post-card {:key (:slug p) :feature? (zero? i) :heading :h2 :& p}))
                     shown))
             (d/p {:class "ap-body ap-muted py-12"} "No posts in this category yet.")))))
