(ns amp.pages.blog.posts.an-alive-gesture
  "Blog post: An Alive Gesture — the last flag walks (18 November by boat to
   the Accademia and Piazza San Marco, 21 November the finale) and the film
   of them (amp.data.films \"the-last-walk\"); on the flag as a shared image
   and the hesitation to be seen with it. Built on the film's Instagram
   caption (Notion, Media Posting \"Last Walk\"). Quotes are from the film,
   checked against the camera and recorder transcripts: Leonardo Costerman
   and Argento Celant are named as in that caption; Zadik Zadikian (14
   November) and Tony Shafrazi (18 November) by their recorded voices; the
   young man at the film's end is quoted unnamed. Photographs: Mina
   Biasutti, 18 November (press/<uid>). Stills: neutral frames of the camera
   originals of 21 November (R2 journal/26-11-21/). Text: the
   post-an-alive-gesture catalog."
  (:require
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-an-alive-gesture")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "3c01Wf00iM02lCNyblC001ehBYv3Vjq9Eln9XtpbMPWelYI")

(def ^:private stills (str media-host "journal/26-11-21/"))

(defn- figure
  "One captioned photograph of 18 November (press/<uid>), in the post's
   reading measure, holding its space before it loads. `caption` is a
   catalog key."
  [{:keys [uid ar caption]}]
  (let [caption (ts caption)]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                     ($ picture {:src (str media-host "press/" uid) :alt caption
                                 :sizes "(min-width: 720px) 680px, 100vw"}))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (ts :post-an-alive-gesture/photo-credit))))))

(defn- carried
  "18 November, by boat and into the cloister: landscape photographs."
  []
  (let [credit (ts :post-an-alive-gesture/photo-credit)]
    (mapv (fn [[uid ar caption]]
            {:img-src (str media-host "press/" uid) :aspect-ratio ar
             :caption (ts caption) :credit credit})
          [["9d54246880" 1.5 :post-an-alive-gesture/gal.boat]
           ["2177d90373" 1.5 :post-an-alive-gesture/gal.water]
           ["2d42391bf6" 2.4907 :post-an-alive-gesture/gal.cloister]
           ["3c0b8a03ed" 1.5 :post-an-alive-gesture/gal.crossing]
           ["12b722d0f8" 2.1131 :post-an-alive-gesture/gal.embrace]])))

(defn- finale
  "21 November, the last walk: stills from the camera originals."
  []
  (let [credit (ts :post-an-alive-gesture/still-credit)]
    (mapv (fn [[file caption]]
            {:img-src (str stills file ".jpg") :aspect-ratio 1.7778
             :caption (ts caption) :credit credit})
          [["piazza-line" :post-an-alive-gesture/fin.piazza]
           ["before-the-basilica" :post-an-alive-gesture/fin.basilica]
           ["doges-palace" :post-an-alive-gesture/fin.palace]
           ["home-by-the-arsenale" :post-an-alive-gesture/fin.home]])))

(defnc film
  "The Last Walk: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        poster (mux-poster film-id {:w 1600 :time 112})
        still (d/img {:src poster :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "The Last Walk"
                                     :fallback still :poster poster})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label (ts :post-an-alive-gesture/film.play)
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-an-alive-gesture/film.caption))
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-an-alive-gesture/film.credit))))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-an-alive-gesture/p1))

   ($ film)

   (d/h2 (t :post-an-alive-gesture/h2.image))

   (d/p (t :post-an-alive-gesture/p2))

   (figure {:uid "66737a8274" :ar 2.6797 :caption :post-an-alive-gesture/fig.piazza})

   (d/p (t :post-an-alive-gesture/p3))

   (d/h2 (t :post-an-alive-gesture/h2.hesitation))

   (d/blockquote (d/p (t :post-an-alive-gesture/q.costerman)))

   (d/p (t :post-an-alive-gesture/p4))

   (d/p (t :post-an-alive-gesture/p5))

   (figure {:uid "a0a7632eaf" :ar 1.5 :caption :post-an-alive-gesture/fig.selfie})

   (d/p (t :post-an-alive-gesture/p6))

   (d/h2 (t :post-an-alive-gesture/h2.together))

   (d/p (t :post-an-alive-gesture/p7))

   ($ fit-gallery {:slides (carried) :inset? true})

   (d/p (t :post-an-alive-gesture/p8))

   (d/h2 (t :post-an-alive-gesture/h2.last))

   (d/p (t :post-an-alive-gesture/p9))

   ($ fit-gallery {:slides (finale) :inset? true})

   (d/h2 (t :post-an-alive-gesture/h2.alive))

   (d/blockquote (d/p (t :post-an-alive-gesture/q.celant)))

   (d/p (t :post-an-alive-gesture/p10))

   (d/p (d/em (t :post-an-alive-gesture/close)))))
