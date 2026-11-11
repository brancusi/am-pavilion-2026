(ns amp.pages.blog.posts.carried-by-hand
  "Blog post: Carried by Hand — logistics in Venice, a summer away, and the
   return to production. Text in resources/i18n/<locale>/post-carried-by-hand.json."
  (:require
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :refer [picture]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]))

(defcatalog "post-carried-by-hand")

(def ^:private media "https://media.armenianpavilion.org/journal/26-09-03-filmic/")

(defn- figure
  "One captioned still, in the post's reading measure. `caption` and
   `credit` are catalog keys."
  [{:keys [src ar caption credit]}]
  (let [caption (ts caption)]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                     ($ picture {:src (str media src) :alt caption
                                 :sizes "(min-width: 720px) 680px, 100vw"}))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}} (ts credit))))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-carried-by-hand/p1))

   (d/p (t :post-carried-by-hand/p2))

   (d/h2 (t :post-carried-by-hand/h2-back-seat))

   (d/p (t :post-carried-by-hand/p3))

   (figure {:src "crane-boat.jpg" :ar 1.7778
            :caption :post-carried-by-hand/fig-crane.caption
            :credit :post-carried-by-hand/credit-2026})

   (d/p (t :post-carried-by-hand/p4))

   (figure {:src "campo.jpg" :ar 1.7778
            :caption :post-carried-by-hand/fig-campo.caption
            :credit :post-carried-by-hand/credit-september})

   (d/h2 (t :post-carried-by-hand/h2-gravity))

   (d/p (t :post-carried-by-hand/p5))

   (d/p (t :post-carried-by-hand/p6))

   (figure {:src "calle-stairs.jpg" :ar 1.7778
            :caption :post-carried-by-hand/fig-calle.caption
            :credit :post-carried-by-hand/credit-september})

   (d/h2 (t :post-carried-by-hand/h2-summer))

   (d/p (t :post-carried-by-hand/p7))

   (d/h2 (t :post-carried-by-hand/h2-back))

   (d/p (t :post-carried-by-hand/p8))

   (figure {:src "unloading.jpg" :ar 1.7778
            :caption :post-carried-by-hand/fig-unloading.caption
            :credit :post-carried-by-hand/credit-2026})

   (d/p (t :post-carried-by-hand/p9))

   (d/p (t :post-carried-by-hand/closing))))
