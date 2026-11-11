(ns amp.pages.blog.index
  "Journal index (design canvas: Journal). Title with post count, category
   filters, a lead story and the card grid."
  (:require
   [amp.data.journal :as journal]
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.post-card :refer [post-card]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "blog")

(defnc blog-index
  [_props]
  (let [[kind set-kind!] (hooks/use-state "all")
        posts (journal/posts)
        ;; Filter ids: "all", then each post kind (its label is journal/kind-label).
        kinds (into ["all"] (distinct (keep :kind posts)))
        shown (if (= kind "all")
                posts
                (filter #(= kind (:kind %)) posts))
        n (count shown)]
    (d/div {:class "ap-wrap"}
           (d/div {:class "ap-jhead"}
                  (d/div {:class "ap-jhead__title"}
                         (d/div {:class "flex flex-col gap-3"}
                                (d/p {:class "ap-label ap-muted m-0"} (t :blog/index.label))
                                (d/h1 {:class "ap-display-xl"} (t :blog/index.title)))
                         (d/div {:class "flex flex-col items-end gap-2" :aria-live "polite"
                                 :aria-label (ts :blog/index.count-aria {:n n})}
                                (d/span {:class "ap-jhead__count" :aria-hidden true}
                                        (.padStart (str n) 2 "0"))
                                (d/span {:class "ap-label ap-muted" :aria-hidden true}
                                        (t :blog/index.count-label {:n n}))))
                  (d/p {:class "ap-lede m-0 max-w-[44ch]"} (t :blog/index.lede))
                  (when (> (count kinds) 2)
                    (d/div {:class "ap-filter" :role "group" :aria-label (ts :blog/index.filter-aria)}
                           (for [k kinds]
                             (d/button {:key k :aria-pressed (= k kind) :on-click #(set-kind! k)}
                                       (journal/kind-label k))))))
           (if (seq shown)
             (d/div {:class "ap-posts pb-16 lg:pb-24"}
                    (map-indexed
                     (fn [i p]
                       ($ post-card {:key (:slug p) :feature? (zero? i) :heading :h2 :& p}))
                     shown))
             (d/p {:class "ap-body ap-muted py-12"} (t :blog/index.empty))))))
