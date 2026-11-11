(ns amp.pages.blog.posts.seven-steps-to-heaven
  "Blog post: The Making of Seven Steps to Heaven — from a pen sketch to a
   stair in Tesa 41. Drawings and renderings are from the Folio work
   (seven_steps_to_heaven: sources/, v9/presentation, v9/tesa); stills and
   quotes are from the film in amp.data.films (its burned-in subtitles).
   Text: the post-seven-steps-to-heaven catalog."
  (:require
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-seven-steps-to-heaven")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "uyEyjNf6mZ0200wJrP00QxFkarX00VubNrfhXaY00QnYqemM")

(def ^:private journal (str media-host "journal/26-10-30/"))

;; Each gallery keeps to one orientation: in the reading measure, mixing
;; portrait and landscape frames leaves the landscapes short.

(defn- views
  "Version 9, the presentation views: eight cameras around one model."
  []
  (let [credit (ts :post-seven-steps-to-heaven/credit.rendering)
        slide (fn [file caption] {:img-src (str journal "seven-steps-" file ".png")
                                  :aspect-ratio 1.7778 :caption (ts caption) :credit credit})]
    [(slide "front" :post-seven-steps-to-heaven/view.front)
     (slide "front-left" :post-seven-steps-to-heaven/view.front-left)
     (slide "right-side" :post-seven-steps-to-heaven/view.right-side)
     (slide "high" :post-seven-steps-to-heaven/view.high)
     (slide "plan" :post-seven-steps-to-heaven/view.plan)
     (slide "side" :post-seven-steps-to-heaven/view.side)
     (slide "back" :post-seven-steps-to-heaven/view.back)]))

(defn- in-the-room
  "Version 9 rendered into photographs of Tesa 41."
  []
  (let [credit (ts :post-seven-steps-to-heaven/credit.rendering)]
    [{:img-src (str journal "seven-steps-tesa-41-three-quarter.jpg") :aspect-ratio 1.4906
      :caption (ts :post-seven-steps-to-heaven/room.three-quarter) :credit credit}
     {:img-src (str journal "seven-steps-tesa-41-straight-on.jpg") :aspect-ratio 1.4906
      :caption (ts :post-seven-steps-to-heaven/room.straight-on) :credit credit}]))

(defn- figure
  "One captioned image, in the post's reading measure: `key` is a press
   image's storage key, `src` any media URL. `ar` is width / height, so
   the frame holds its space before it loads. `caption` is a catalog key;
   `credit` a catalog key or a name."
  [{:keys [key src ar caption credit]}]
  (let [caption (ts caption)
        credit (if (keyword? credit) (ts credit) credit)]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                     ($ picture {:src (or src (str media-host key)) :alt caption
                                 :sizes "(min-width: 720px) 680px, 100vw"}))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                            (when credit
                              (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}} credit))))))

(defnc film
  "The Seven Steps to Heaven film: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        still (d/img {:src (mux-poster film-id {:w 1600 :time 63}) :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "Seven Steps to Heaven"
                                     :fallback still
                                     :poster (mux-poster film-id {:w 1600 :time 63})})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label (ts :post-seven-steps-to-heaven/film.play)
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-seven-steps-to-heaven/film.caption))
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-seven-steps-to-heaven/film.credit))))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-seven-steps-to-heaven/p1))

   (d/p (t :post-seven-steps-to-heaven/p2))

   (d/h2 (t :post-seven-steps-to-heaven/h2.drawing))

   (d/p (t :post-seven-steps-to-heaven/p3))

   (figure {:src (str journal "seven-steps-sketch.jpg") :ar 0.75
            :caption :post-seven-steps-to-heaven/fig.sketch
            :credit :post-seven-steps-to-heaven/credit.artist})

   (d/p (t :post-seven-steps-to-heaven/p4))

   (figure {:src (str journal "seven-steps-notebook.jpg") :ar 0.75
            :caption :post-seven-steps-to-heaven/fig.notebook
            :credit :post-seven-steps-to-heaven/credit.artist})

   (d/h2 (t :post-seven-steps-to-heaven/h2.rise))

   (d/p (t :post-seven-steps-to-heaven/p5))

   (d/p (t :post-seven-steps-to-heaven/p6))

   (figure {:src (str journal "seven-steps-front-right.png") :ar 1.7778
            :caption :post-seven-steps-to-heaven/fig.front-right
            :credit :post-seven-steps-to-heaven/credit.artist})

   ($ fit-gallery {:slides (views) :inset? true})

   (d/p (t :post-seven-steps-to-heaven/p7))

   (d/h2 (t :post-seven-steps-to-heaven/h2.room))

   (d/p (t :post-seven-steps-to-heaven/p8))

   ($ fit-gallery {:slides (in-the-room) :inset? true})

   (d/h2 (t :post-seven-steps-to-heaven/h2.carried))

   (d/p (t :post-seven-steps-to-heaven/p9))

   (figure {:src (str journal "seven-steps-on-the-quay.jpg") :ar 1.7778
            :caption :post-seven-steps-to-heaven/fig.quay
            :credit :post-seven-steps-to-heaven/credit.film-arsenale})

   (figure {:src (str journal "seven-steps-through-the-door.jpg") :ar 1.7778
            :caption :post-seven-steps-to-heaven/fig.door
            :credit :post-seven-steps-to-heaven/credit.film-arsenale})

   (d/p (t :post-seven-steps-to-heaven/p10))

   (d/p (t :post-seven-steps-to-heaven/p11))

   (figure {:src (str journal "seven-steps-at-the-table.jpg") :ar 1.7778
            :caption :post-seven-steps-to-heaven/fig.table
            :credit :post-seven-steps-to-heaven/credit.film-tesa})

   ($ film)

   (d/h2 (t :post-seven-steps-to-heaven/h2.nowhere))

   (d/p (t :post-seven-steps-to-heaven/p12))

   (d/p (t :post-seven-steps-to-heaven/p13))

   (d/p (t :post-seven-steps-to-heaven/p14))

   (d/p (t :post-seven-steps-to-heaven/p15))))
