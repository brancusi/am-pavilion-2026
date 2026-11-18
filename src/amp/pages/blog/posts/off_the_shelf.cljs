(ns amp.pages.blog.posts.off-the-shelf
  "Blog post: Off the Shelf — the week before the closing, when the work made
   in Tesa 41 comes down from the shelves to be set out, measured and
   aligned; and the film of it (amp.data.films \"building-blocks\"). Quotes
   are from the film (its burned-in subtitles and Mux captions; speakers as
   in the film's Instagram caption); the German-speaking visitor is quoted in
   that caption's translation, unnamed. Stills are graded frames of the
   camera originals from 16 November 2026 (R2 journal/26-11-16/). Text: the
   post-off-the-shelf catalog."
  (:require
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-off-the-shelf")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "02SaO6mNpCpxkPop7I0100PnLh1R9GKCYU2pXo01xY2HEmk")

(def ^:private stills (str media-host "journal/26-11-16/"))

(defn- figure
  "One captioned still, in the post's reading measure, holding its 16:9
   space before it loads. `caption` is a catalog key."
  [{:keys [file caption]}]
  (let [caption (ts caption)]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "1.7778"}}
                     ($ picture {:src (str stills file ".jpg") :alt caption
                                 :sizes "(min-width: 720px) 680px, 100vw"}))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (ts :post-off-the-shelf/credit))))))

(defn- gallery
  "The placing, at the tables: landscape stills only."
  []
  (let [credit (ts :post-off-the-shelf/credit)]
    (mapv (fn [[file caption]]
            {:img-src (str stills file ".jpg") :aspect-ratio 1.7778
             :caption (ts caption) :credit credit})
          [["level" :post-off-the-shelf/gal.level]
           ["measuring" :post-off-the-shelf/gal.measuring]
           ["aligning" :post-off-the-shelf/gal.aligning]
           ["zadik-arranging" :post-off-the-shelf/gal.zadik]
           ["around-the-table" :post-off-the-shelf/gal.around]
           ["tape" :post-off-the-shelf/gal.tape]])))

(defnc film
  "Building Blocks: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        poster (mux-poster film-id {:w 1600 :time 50})
        still (d/img {:src poster :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "Building Blocks"
                                     :fallback still :poster poster})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label (ts :post-off-the-shelf/film.play)
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-off-the-shelf/film.caption))
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-off-the-shelf/film.credit))))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-off-the-shelf/p1))

   ($ film)

   (d/h2 (t :post-off-the-shelf/h2.presence))

   (d/p (t :post-off-the-shelf/p2))

   (figure {:file "shelf-wrapped" :caption :post-off-the-shelf/fig.wrapped})

   (d/p (t :post-off-the-shelf/p3))

   (figure {:file "off-the-shelf" :caption :post-off-the-shelf/fig.off})

   (d/h2 (t :post-off-the-shelf/h2.placed))

   (d/p (t :post-off-the-shelf/p4))

   ($ fit-gallery {:slides (gallery) :inset? true})

   (d/h2 (t :post-off-the-shelf/h2.structure))

   (d/p (t :post-off-the-shelf/p5))

   (figure {:file "formations" :caption :post-off-the-shelf/fig.formations})

   (d/p (t :post-off-the-shelf/p6))

   (figure {:file "two-at-the-table" :caption :post-off-the-shelf/fig.assembled})

   (d/p (t :post-off-the-shelf/p7))

   (d/p (t :post-off-the-shelf/p8))))
