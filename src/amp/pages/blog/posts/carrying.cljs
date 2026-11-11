(ns amp.pages.blog.posts.carrying
  "Blog post: Carrying — one red unit on a back frame, 22 October 2026: the
   first time a work left Tesa 41 on someone's back. Stills are frames of the
   graded Carrying film (amp.data.films); quotes are from its captions and the
   day's recorders. Followed by the-weight-of-the-flag. Text in
   resources/i18n/<locale>/post-carrying.json."
  (:require
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-carrying")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "El6mWAaeWtIxqHERgu7fYE00pcLH7szuH8EG16lbn7CE")

(def ^:private journal (str media-host "journal/"))

(defn- out-and-about
  "Through the Arsenale and Castello: the landscape frames, from the camera
   originals (26-10-22-orig, credited to the day) and the film (26-10-22,
   credited as stills)."
  []
  (let [day (ts :post-carrying/credit-day)
        still (ts :post-carrying/credit-still)
        slide (fn [file k cr] {:img-src (str journal file ".jpg") :aspect-ratio 1.7778
                               :caption (ts k) :credit cr})]
    [(slide "26-10-22-orig/along-the-wall" :post-carrying/slide.along-the-wall day)
     (slide "26-10-22-orig/campo-facing" :post-carrying/slide.campo-facing day)
     (slide "26-10-22-orig/calle-with-zadik" :post-carrying/slide.calle-with-zadik day)
     (slide "26-10-22/bridge" :post-carrying/slide.bridge still)
     (slide "26-10-22/calle" :post-carrying/slide.calle still)
     (slide "26-10-22/fondamenta" :post-carrying/slide.fondamenta still)
     (slide "26-10-22/bridge-low" :post-carrying/slide.bridge-low still)]))

(defn- figure
  "One captioned still, in the post's reading measure. `ar` is width /
   height, so the frame holds its space before it loads. `caption` and `by`
   are catalog keys; without `by` the credit is the film still's."
  [{:keys [file ar caption by]}]
  (let [caption (ts caption)]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                     ($ picture {:src (str journal file ".jpg") :alt caption
                                 :sizes "(min-width: 720px) 680px, 100vw"}))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (ts (or by :post-carrying/credit-still)))))))

(defnc film
  "The Carrying film: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        poster (mux-poster film-id {:w 1600 :time 47})
        still (d/img {:src poster :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "Carrying"
                                     :fallback still :poster poster})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label (ts :post-carrying/film.play)
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-carrying/film.caption))
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-carrying/film.note))))))

(defn- a
  "A plain link (no class, as the post's prose links were) to a site path,
   in the current locale."
  [path]
  (i18n/tag "a" {:href (i18n/href path)}))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-carrying/p1))

   (d/p (t :post-carrying/p2))

   (figure {:file "26-10-22-orig/tesa-41-fitted" :ar 1.7778 :by :post-carrying/credit-day
            :caption :post-carrying/fig.tesa-41-fitted})

   (d/h2 (t :post-carrying/h2-fitting))

   (d/p (t :post-carrying/p3))

   (figure {:file "26-10-22-orig/first-fitting" :ar 1.7778 :by :post-carrying/credit-first-try
            :caption :post-carrying/fig.first-fitting})

   (figure {:file "26-10-22-orig/strapping" :ar 1.7778 :by :post-carrying/credit-day
            :caption :post-carrying/fig.strapping})

   (d/p (t :post-carrying/p4))

   (figure {:file "26-10-22-orig/arsenale-quay" :ar 1.7778 :by :post-carrying/credit-day
            :caption :post-carrying/fig.arsenale-quay})

   (d/h2 (t :post-carrying/h2-by-hand))

   (d/p (t :post-carrying/p5 {:a (a "/blog/carried-by-hand")}))

   (d/blockquote
    (d/p (t :post-carrying/quote-car)))

   (d/p (t :post-carrying/p6))

   ($ fit-gallery {:slides (out-and-about) :inset? true})

   (d/h2 (t :post-carrying/h2-form-colour))

   (d/p (t :post-carrying/p7))

   (d/p (t :post-carrying/p8))

   (d/blockquote
    (d/p (t :post-carrying/quote-tradition)))

   (figure {:file "26-10-22/portrait" :ar 1.7778
            :caption :post-carrying/fig.portrait})

   (d/p (t :post-carrying/p9))

   ($ film)

   (figure {:file "26-10-22/setting-down" :ar 1.7778
            :caption :post-carrying/fig.setting-down})

   (d/h2 (t :post-carrying/h2-one-for-now))

   (d/p (t :post-carrying/p10))

   (d/p (t :post-carrying/p11 {:a (a "/blog/making-a-flag")}))

   (figure {:file "26-10-22/back-in-tesa-41" :ar 1.7778
            :caption :post-carrying/fig.back-in-tesa-41})

   (d/p (t :post-carrying/p12))

   (d/p (t :post-carrying/p13 {:a (a "/blog/the-weight-of-the-flag")}))))
