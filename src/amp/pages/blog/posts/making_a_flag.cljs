(ns amp.pages.blog.posts.making-a-flag
  "Blog post: Making a Flag — why an Italian flag from the Armenian Pavilion.
   Images are the press set's (public/data/press), so captions match /press;
   the film is the one in amp.data.films. Text: the post-making-a-flag
   catalog."
  (:require
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-making-a-flag")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "CR1rPwf1QHVhvNMICOawghM2g5QnylGxbMs0201QQxlLM")

(def ^:private journal (str media-host "journal/26-10-30/"))

;; Each gallery keeps to one orientation: in the reading measure, mixing
;; portrait and landscape frames leaves the landscapes short.

(defn- american-flag
  "Jasper Johns' American Flag, v4: the views through the star."
  []
  (let [credit (ts :post-making-a-flag/credit.rendering)
        slide (fn [file caption] {:img-src (str journal "american-flag-" file ".png")
                                  :aspect-ratio 1.7778 :caption (ts caption) :credit credit})]
    [(slide "through-the-stars" :post-making-a-flag/af.through-the-stars)
     (slide "front" :post-making-a-flag/af.front)
     (slide "front-right" :post-making-a-flag/af.front-right)
     (slide "high" :post-making-a-flag/af.high)
     (slide "back" :post-making-a-flag/af.back)
     (slide "side" :post-making-a-flag/af.side)]))

(defn- slides
  "[src aspect-ratio caption-key] → gallery slides credited as renderings."
  [specs]
  (let [credit (ts :post-making-a-flag/credit.rendering)]
    (mapv (fn [[src ar caption]] {:img-src src :aspect-ratio ar :caption (ts caption) :credit credit})
          specs)))

(defn- gubbio
  "Italian Flags, the proposal near Gubbio: renderings, from the Folio work."
  []
  (slides
   [[(str journal "gubbio-morning.jpg") 1.4906 :post-making-a-flag/gubbio.morning]
    [(str journal "gubbio-into-the-light.jpg") 1.7917 :post-making-a-flag/gubbio.into-the-light]
    [(str journal "gubbio-storm.jpg") 2.3571 :post-making-a-flag/gubbio.storm]
    [(str journal "gubbio-last-light.jpg") 2.3571 :post-making-a-flag/gubbio.last-light]]))

(defn- gubbio-skies
  "The same proposal under summer cumulus: the portrait renderings."
  []
  (slides
   [[(str media-host "press/b0b6fdec92") 0.7467 :post-making-a-flag/skies.afternoon]
    [(str journal "gubbio-view-from-the-work.jpg") 0.8056 :post-making-a-flag/skies.view]
    [(str journal "gubbio-raking-light.jpg") 0.8056 :post-making-a-flag/skies.raking]
    [(str media-host "press/f64bf7f0b6") 0.5581 :post-making-a-flag/skies.blades]
    [(str journal "gubbio-crest-above.jpg") 0.5581 :post-making-a-flag/skies.crest]
    [(str journal "gubbio-plaster-meets-turf.jpg") 1 :post-making-a-flag/skies.turf]]))

(defn- figure
  "One captioned image, in the post's reading measure: `key` is a press
   image's storage key, `src` any media URL. `ar` is width / height, so
   the frame holds its space before it loads. `caption` and `credit` are
   catalog keys."
  [{:keys [key src ar caption credit]}]
  (let [caption (ts caption)]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                     ($ picture {:src (or src (str media-host key)) :alt caption
                                 :sizes "(min-width: 720px) 680px, 100vw"}))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                            (when credit
                              (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}} (ts credit)))))))

(defnc film
  "The Italian Flag film: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        still (d/img {:src (mux-poster film-id {:w 1600 :time 60}) :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "The Italian Flag"
                                     :fallback still
                                     :poster (mux-poster film-id {:w 1600 :time 60})})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label (ts :post-making-a-flag/film.play)
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-making-a-flag/film.caption))
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-making-a-flag/film.credit))))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-making-a-flag/p1))

   (d/p (t :post-making-a-flag/p2))

   (figure {:key "press/0f7f296e78" :ar 1.7778
            :caption :post-making-a-flag/fig.painting-green
            :credit :post-making-a-flag/credit.photo})

   (d/h2 (t :post-making-a-flag/h2.knows))

   (d/p (t :post-making-a-flag/p3))

   (d/p (t :post-making-a-flag/p4))

   (d/p (t :post-making-a-flag/p5))

   (d/p (t :post-making-a-flag/p6))

   (figure {:src (str journal "american-flag-study.png") :ar 1.7778
            :caption :post-making-a-flag/fig.af-study
            :credit :post-making-a-flag/credit.artist})

   (d/p (t :post-making-a-flag/p7))

   ($ fit-gallery {:slides (american-flag) :inset? true})

   (figure {:key "press/8a0cadcb1a" :ar 1.7778
            :caption :post-making-a-flag/fig.painting-red
            :credit :post-making-a-flag/credit.photo})

   (d/h2 (t :post-making-a-flag/h2.colours))

   (d/p (t :post-making-a-flag/p8))

   (d/p (t :post-making-a-flag/p9))

   (figure {:key "press/4061cedbde" :ar 1.7778
            :caption :post-making-a-flag/fig.assembling
            :credit :post-making-a-flag/credit.photo})

   (d/h2 (t :post-making-a-flag/h2.song))

   (d/p (t :post-making-a-flag/p10))

   (d/p (t :post-making-a-flag/p11))

   (d/p (t :post-making-a-flag/p12))

   (figure {:key "press/06087305db" :ar 1.4906
            :caption :post-making-a-flag/fig.stack
            :credit :post-making-a-flag/credit.artist})

   (d/p (t :post-making-a-flag/p13))

   ($ film)

   (d/h2 (t :post-making-a-flag/h2.feet))

   (d/p (t :post-making-a-flag/p14))

   (d/p (t :post-making-a-flag/p15))

   (figure {:key "press/8b3ff68d3c" :ar 1.7778
            :caption :post-making-a-flag/fig.in-front
            :credit :post-making-a-flag/credit.photo})

   (d/p (t :post-making-a-flag/p16))

   ($ fit-gallery {:slides (gubbio) :inset? true})

   ($ fit-gallery {:slides (gubbio-skies) :inset? true})

   (d/h2 (t :post-making-a-flag/h2.open))

   (d/p (t :post-making-a-flag/p17))

   (d/p (t :post-making-a-flag/p18))

   (d/p (t :post-making-a-flag/p19))

   (d/p (t :post-making-a-flag/p20))))
