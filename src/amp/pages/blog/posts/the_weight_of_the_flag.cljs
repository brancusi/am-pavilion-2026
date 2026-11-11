(ns amp.pages.blog.posts.the-weight-of-the-flag
  "Blog post: The Weight of the Flag — the first walk, 5 November 2026: three
   units, green, white and red, carried from San Francesco della Vigna to
   Zanipolo; how one carried unit (amp.pages.blog.posts.carrying) became
   three; and the plan for the walks (scripts/walks/plan.json, /walks).
   Stills are frames of the graded film (amp.data.films); quotes are from its
   captions and the day's recorders. Text: the post-the-weight-of-the-flag
   catalog."
  (:require
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-the-weight-of-the-flag")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "MwHUHhUaOUvc97m01QmU6JBaf1ctSXWoz00s9dI302zEUo")

(def ^:private journal (str media-host "journal/"))

(defn- a
  "Rich-text handler for an internal link in the post's prose."
  [path]
  (i18n/tag "a" {:href (i18n/href path)}))

(defn- on-the-way
  "Between the stops: landscape frames from the camera originals
   (26-11-05-orig) and the film (26-11-05)."
  []
  (let [credit (ts :post-the-weight-of-the-flag/credit)
        slide (fn [file caption] {:img-src (str journal "26-11-05/" file ".jpg") :aspect-ratio 1.7778
                                  :caption (ts caption) :credit credit})]
    [{:img-src (str journal "26-11-05-orig/campo-crossing.jpg") :aspect-ratio 1.7778
      :caption (ts :post-the-weight-of-the-flag/way.campo-crossing)
      :credit (ts :post-the-weight-of-the-flag/day-credit)}
     (slide "garden" :post-the-weight-of-the-flag/way.garden)
     (slide "portico" :post-the-weight-of-the-flag/way.portico)
     (slide "low-red" :post-the-weight-of-the-flag/way.low-red)
     (slide "green-low" :post-the-weight-of-the-flag/way.green-low)
     (slide "bridge" :post-the-weight-of-the-flag/way.bridge)
     (slide "basilica" :post-the-weight-of-the-flag/way.basilica)]))

(def ^:private schedule
  "The walks as planned on 5 November: [date works route]."
  [["2026-11-05" "3" :post-the-weight-of-the-flag/sched.r1]
   ["2026-11-06" "6" :post-the-weight-of-the-flag/sched.r2]
   ["2026-11-16" "12" :post-the-weight-of-the-flag/sched.r3]
   ["2026-11-17" "12" :post-the-weight-of-the-flag/sched.r4]
   ["2026-11-18" "3–6" :post-the-weight-of-the-flag/sched.r5]
   ["2026-11-19" "12" :post-the-weight-of-the-flag/sched.r6]
   ["2026-11-20" "12" :post-the-weight-of-the-flag/sched.r7]
   ["2026-11-21" "12" :post-the-weight-of-the-flag/sched.r8]
   ["2026-11-22" "12" :post-the-weight-of-the-flag/sched.r9]])

(defn- figure
  "One captioned still, in the post's reading measure. `ar` is width /
   height, so the frame holds its space before it loads. `caption` is a
   catalog key; `day?` credits the camera originals instead of the film."
  [{:keys [file ar caption day?]}]
  (let [caption (ts caption)]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                     ($ picture {:src (str journal file ".jpg") :alt caption
                                 :sizes "(min-width: 720px) 680px, 100vw"}))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (ts (if day?
                                          :post-the-weight-of-the-flag/day-credit
                                          :post-the-weight-of-the-flag/credit)))))))

(defnc film
  "The Weight of the Flag: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        poster (mux-poster film-id {:w 1600 :time 32})
        still (d/img {:src poster :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "The Weight of the Flag"
                                     :fallback still :poster poster})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label (ts :post-the-weight-of-the-flag/film.play)
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-the-weight-of-the-flag/film.caption))
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    (t :post-the-weight-of-the-flag/film.credit))))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"} (t :post-the-weight-of-the-flag/p1))

   (figure {:file "26-11-05-orig/vigna-campo" :ar 1.7778 :day? true
            :caption :post-the-weight-of-the-flag/fig.vigna-campo})

   (d/h2 (t :post-the-weight-of-the-flag/h2.one-to-three))

   (d/p (t :post-the-weight-of-the-flag/p2 {:a (a "/blog/carrying")}))

   (d/p (t :post-the-weight-of-the-flag/p3 {:a (a "/blog/making-a-flag")}))

   (d/p (t :post-the-weight-of-the-flag/p4))

   (figure {:file "26-11-05-orig/church-front" :ar 1.7778 :day? true
            :caption :post-the-weight-of-the-flag/fig.church-front})

   (d/h2 (t :post-the-weight-of-the-flag/h2.first-walk))

   (d/p (t :post-the-weight-of-the-flag/p5))

   ($ film)

   (d/p (t :post-the-weight-of-the-flag/p6))

   (figure {:file "26-11-05-orig/zanipolo-colleoni" :ar 1.7778 :day? true
            :caption :post-the-weight-of-the-flag/fig.zanipolo-colleoni})

   (figure {:file "26-11-05/zanipolo-wide" :ar 1.7778
            :caption :post-the-weight-of-the-flag/fig.zanipolo-wide})

   (d/p (t :post-the-weight-of-the-flag/p7))

   ($ fit-gallery {:slides (on-the-way) :inset? true})

   (d/p (t :post-the-weight-of-the-flag/p8))

   (d/h2 (t :post-the-weight-of-the-flag/h2.plan))

   (d/p (t :post-the-weight-of-the-flag/p9))

   (d/ul
    (for [[date works route] schedule]
      (d/li {:key date}
            (d/strong (i18n/date date {:weekday "short" :day "numeric" :month "short"}))
            (ts :post-the-weight-of-the-flag/sched.line {:works works :route (ts route)}))))

   (d/p (t :post-the-weight-of-the-flag/p10 {:a (a "/walks")}))

   (figure {:file "26-11-05/backlit-campo" :ar 1.7778
            :caption :post-the-weight-of-the-flag/fig.backlit-campo})

   (d/h2 (t :post-the-weight-of-the-flag/h2.weight))

   (d/p (t :post-the-weight-of-the-flag/p11))

   (figure {:file "26-11-05-orig/three-in-a-row" :ar 1.7778 :day? true
            :caption :post-the-weight-of-the-flag/fig.three-in-a-row})

   (d/p (t :post-the-weight-of-the-flag/p12))))
