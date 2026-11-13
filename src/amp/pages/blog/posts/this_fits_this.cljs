(ns amp.pages.blog.posts.this-fits-this
  "Blog post: This Fits This — the work engraved Jasper Johns (a long plaster
   base with a slot, twelve coloured plaster slabs that slot in and lift out)
   and the film of it (amp.data.films \"jasper-johns\"). Filmed in Tesa 41 on
   25 October 2026; quotes are from that afternoon's recorder
   (DJI_09_20261025_170622, speakers confirmed in the footage archive),
   lightly cleaned. Stills are graded frames of the camera originals
   (R2 journal/26-10-25/). Text: the post-this-fits-this catalog."
  (:require
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-this-fits-this")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "C5R8t1rSof29dpHeXQ00TvXhkm5FMSvpKE1EEsnpqmw4")

(def ^:private stills (str media-host "journal/26-10-25/"))

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
                                    (ts :post-this-fits-this/credit))))))

(defn- gallery
  "The work close to and in the room: landscape stills only."
  []
  (let [credit (ts :post-this-fits-this/credit)]
    (mapv (fn [[file caption]]
            {:img-src (str stills file ".jpg") :aspect-ratio 1.7778
             :caption (ts caption) :credit credit})
          [["colours" :post-this-fits-this/gal.colours]
           ["rows" :post-this-fits-this/gal.rows]
           ["row" :post-this-fits-this/gal.row]
           ["zadik" :post-this-fits-this/gal.zadik]])))

(defnc film
  "Jasper Johns: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        poster (mux-poster film-id {:w 1600 :time 23})
        still (d/img {:src poster :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "Jasper Johns"
                                     :fallback still :poster poster})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label (ts :post-this-fits-this/film.play)
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-this-fits-this/film.caption))
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-this-fits-this/film.credit))))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-this-fits-this/p1))

   ($ film)

   (d/h2 (t :post-this-fits-this/h2.sheath))

   (d/p (t :post-this-fits-this/p2))

   (figure {:file "name" :caption :post-this-fits-this/fig.name})

   (figure {:file "placing" :caption :post-this-fits-this/fig.placing})

   (d/h2 (t :post-this-fits-this/h2.handshake))

   (d/p (t :post-this-fits-this/p3))

   (d/p (t :post-this-fits-this/p4))

   ($ fit-gallery {:slides (gallery) :inset? true})

   (d/h2 (t :post-this-fits-this/h2.fixed))

   (d/p (t :post-this-fits-this/p5))

   (d/p (t :post-this-fits-this/p6))

   (figure {:file "talk" :caption :post-this-fits-this/fig.talk})

   (d/p (t :post-this-fits-this/p7))))
