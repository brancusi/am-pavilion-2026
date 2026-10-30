(ns amp.ui.fit-gallery
  "Horizontal gallery (design system: Gallery) that never crops: each frame
   takes its image's own aspect ratio, images load lazily at the width the
   browser needs and fade in once they arrive.

   Slides are maps:
     {:img-src url :aspect-ratio 0.75 :caption \"…\" :credit \"…\" :alt \"…\"}
     {:type :threejs :aspect-ratio 0.75 :caption … :credit … :scene-data … :camera …}
   A :threejs slide shows a cover until someone chooses to explore it; only
   then is Three.js (its own lazy module) fetched."
  (:require ["react" :as react]
            [amp.hooks.use-in-view :refer [watch-edges!]]
            [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.icons :refer [CubeIcon]]
            [amp.ui.picture :refer [picture]]
            [amp.utils.lazy-loading :refer-macros [lazy-component]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defn- title-case
  "Older slide data has ALL-CAPS captions; show them in title case to match
   the rest of the site. Mixed-case captions are left alone."
  [s]
  (if (= s (.toUpperCase s))
    (-> (.toLowerCase s)
        (.replace (js/RegExp. "(^|[\\s—–(-])(\\S)" "g")
                  (fn [_ pre c] (str pre (.toUpperCase c))))
        ;; Acronyms stay upper case.
        (.replace (js/RegExp. "\\b(Cnc|3d|2d|Led|Pvc|Mdf)\\b" "g") #(.toUpperCase %)))
    s))

(def ^:private threejs-slide (lazy-component amp.ui.threejs-slide/threejs-slide))

(defnc model-frame
  [{:keys [scene-data camera caption]}]
  (let [ref (hooks/use-ref nil)
        [_ visible?] (use-intersection-observer ref {:threshold 0.2})
        [open? set-open!] (hooks/use-state false)]
    ;; Stop rendering once the slide leaves the screen.
    (hooks/use-effect
     [visible?]
     (when-not visible? (set-open! false)))
    (d/div {:ref ref :class "absolute inset-0"}
           (if open?
             (<>
              ($ react/Suspense {:fallback (d/p {:class "ap-label ap-muted absolute inset-0 grid place-content-center m-0"}
                                                "Loading model…")}
                 ($ threejs-slide {:scene-data scene-data :camera camera}))
              (d/button {:class "ap-btn ap-btn--ghost ap-3d__close !bg-paper"
                         :on-click #(set-open! false)}
                        "Close 3D")
              (d/p {:class "ap-label ap-muted ap-3d__hint m-0"} "Drag to turn · pinch to zoom"))
             (d/button {:class "ap-3d__cover" :on-click #(set-open! true)
                        :aria-label (str "Explore " (or caption "the model") " in 3D")}
                       ($ CubeIcon {})
                       (d/span {:class "ap-label"} "Interactive 3D")
                       (d/span {:class "ap-btn"} "Explore the model"))))))

(defnc fit-gallery
  "`label`/`title` add a heading row; `action` is an optional element shown
   beside the arrows."
  [{:keys [slides label title action inset?]}]
  (let [track (hooks/use-ref nil)
        [at-start? set-at-start!] (hooks/use-state true)
        [at-end? set-at-end!] (hooks/use-state false)
        scroll! (fn [dir]
                  (when-let [el @track]
                    (.scrollBy el #js {:left (* dir 0.8 (.-clientWidth el)) :behavior "smooth"})))
        nav (when (and (> (count slides) 1) (not (and at-start? at-end?)))
              (d/div {:class "ap-gallery__nav max-md:!hidden"}
                     (d/button {:aria-label "Previous" :disabled at-start? :on-click #(scroll! -1)} "←")
                     (d/button {:aria-label "Next" :disabled at-end? :on-click #(scroll! 1)} "→")))
        ;; Frames start from the slide's :aspect-ratio and correct to the
        ;; image's real shape once it has loaded.
        fit-frame! (fn [e]
                     (let [img (.-currentTarget e)
                           w (.-naturalWidth img) h (.-naturalHeight img)]
                       (when (and (pos? w) (pos? h))
                         (some-> (.closest img ".ap-figure")
                                 (.. -style (setProperty "--ar" (str (/ w h))))))))]
    ;; The arrows' ends, from IntersectionObserver on markers at the first
    ;; and last slide.
    (hooks/use-effect
     :once
     (when-let [^js el @track]
       (watch-edges! el (.querySelector el ".ap-edge--start") (.querySelector el ".ap-edge--end")
                     (fn [{:keys [start? end?]}]
                       (set-at-start! start?)
                       (set-at-end! end?)))))
    (d/div {:class (str "ap-gallery" (when inset? " ap-gallery--inset"))}
           (if title
             (d/div {:class "ap-gallery__head"}
                    (d/div
                     (when label (d/p {:class "ap-label ap-muted m-0 mb-1"} label))
                     (d/h2 {:class "ap-h1"} title))
                    (d/div {:class "flex items-center gap-4"} nav action))
             (when nav (d/div {:class "flex justify-end px-4"} nav)))
           (d/div {:ref track :class "ap-gallery__track ap-gallery__track--fit" :tab-index 0
                   :aria-label (str (or title "Gallery") ", swipe for more")}
                  (map-indexed
                   (fn [i {:keys [type img-src aspect-ratio caption credit alt] :as slide}]
                     (d/figure {:key (or img-src (str "slide-" i))
                                :class (str "ap-figure" (when (= type :threejs) " ap-figure--3d"))
                                :style #js {"--ar" (str (or aspect-ratio 1.5))}}
                               (when (zero? i) (d/span {:class "ap-edge ap-edge--start" :aria-hidden true}))
                               (when (= i (dec (count slides))) (d/span {:class "ap-edge ap-edge--end" :aria-hidden true}))
                               (d/div {:class "ap-figure__frame"}
                                      (if (= type :threejs)
                                        ($ model-frame {:& slide})
                                        ($ picture {:src img-src :alt (or alt caption "") :on-load fit-frame!
                                                    :sizes (str "(min-width: 720px) calc(58vh * " (or aspect-ratio 1.5) "), 86vw")})))
                               (when (or caption credit)
                                 (d/figcaption {:class "ap-tomb"}
                                               (d/span {:class "ap-tomb__no"}
                                                       (str (when (< i 9) "0") (inc i)))
                                               (when caption (d/span {:class "ap-tomb__title"} (title-case caption)))
                                               (when credit (d/span {:class "ap-tomb__credit"} credit))))))
                   slides)))))
