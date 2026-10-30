(ns amp.pages.story.page
  "“Armenian as well”: the story of Zadik Zadikian and Tony Shafrazi,
   1973–2026, rebuilt from zz-story.pages.dev. The long-form page is
   content (resources/data/zz-story/story.html, its stylesheet scoped under
   .zz in story.css; images on R2 under zz_story/). This namespace loads it
   and ports the original page script: swipe galleries, the chapter index,
   and reading progress."
  (:require [amp.hooks.use-in-view :refer [observe!]]
            [amp.lib.defnc :refer [defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def ^:private html-url "/data/zz-story/story.html")
(def ^:private css-url "/data/zz-story/story.css")

(defn- pad2 [n] (.padStart (str n) 2 "0"))

(defn- reduced-motion? []
  (.-matches (js/matchMedia "(prefers-reduced-motion: reduce)")))

(defn- listen!
  "addEventListener that returns its own remover."
  ([el ev f] (listen! el ev f nil))
  ([el ev f opts]
   (.addEventListener el ev f opts)
   #(.removeEventListener el ev f opts)))

;; ── Galleries ──────────────────────────────────────────────────────────────

(defn- gallery!
  "One swipe gallery (.sw[data-gallery]): ←/→ buttons, 01 / 06 counter,
   arrow/Home/End keys. Returns a cleanup fn."
  [^js g]
  (let [track (.querySelector g ".sw-t")
        ctl (.querySelector g ".sw-ctl")
        [prev next] (array-seq (.querySelectorAll ctl ".sw-b"))
        counter (.querySelector ctl ".sw-p")
        slides (vec (array-seq (.-children track)))
        n (count slides)
        at (atom 0)
        left-of (fn [el] (+ (- (.-left (.getBoundingClientRect el))
                               (.-left (.getBoundingClientRect track)))
                            (.-scrollLeft track)))
        pad (fn [] (or (js/parseFloat (.-scrollPaddingLeft (js/getComputedStyle track))) 0))
        ;; How much of each slide is in view, from IntersectionObserver. The
        ;; current slide is the first one (nearly) whole in view, the last at
        ;; the end of the row, or else the one most in view.
        ratios (atom (vec (repeat n 0)))
        show! (fn []
                (let [r @ratios
                      whole (filter #(>= (r %) 0.9) (range n))
                      i (cond
                          (and (>= (r (dec n)) 0.9) (< (r 0) 0.9)) (dec n)
                          (seq whole) (first whole)
                          :else (apply max-key r (range n)))]
                  (reset! at i)
                  (set! (.-textContent counter) (str (pad2 (inc i)) " / " (pad2 n)))
                  (set! (.-disabled prev) (zero? i))
                  (set! (.-disabled next) (= i (dec n)))))
        index-of (into {} (map-indexed (fn [i el] [el i]) slides))
        stop-watch (observe! slides
                             (fn [^js e]
                               (swap! ratios assoc (index-of (.-target e)) (.-intersectionRatio e))
                               (show!))
                             :root track :threshold #js [0 0.25 0.5 0.75 0.9 1])
        go! (fn [i]
              (let [el (slides (max 0 (min (dec n) i)))]
                (.scrollTo track #js {:left (- (left-of el) (pad))
                                      :behavior (if (reduced-motion?) "auto" "smooth")})))
        offs [(listen! prev "click" #(go! (dec @at)))
              (listen! next "click" #(go! (inc @at)))
              (listen! track "keydown"
                       (fn [^js e]
                         (when-let [i (get {"ArrowLeft" (dec @at) "ArrowRight" (inc @at)
                                            "Home" 0 "End" (dec n)} (.-key e))]
                           (when-not (or (.-altKey e) (.-ctrlKey e) (.-metaKey e))
                             (.preventDefault e)
                             (go! i)))))
              ]]
    (set! (.-hidden ctl) false)
    (show!)
    #(do (stop-watch) (doseq [off offs] (off)))))

;; ── Chapter bar ────────────────────────────────────────────────────────────

(defn- chapter-bar!
  "Sticky chapter bar: current chapter, % read, progress ticks at chapter
   starts and the chapter index panel. Progress
   is measured over the story itself, not the site header and footer."
  [^js root]
  (let [q #(.querySelector root %)
        pg (q "#pg") nav (q "#nav") now (q "#nav-now") ix (q "#ix")
        fill (q "#prog-f") prog (q "#prog") pct (q "#nav-pct")
        num (q "#nav-num") title-el (q "#nav-title") ahead (q "#ix-ahead")
        rows (vec (array-seq (.querySelectorAll ix ".ix-r")))
        chapters (mapv (fn [^js r]
                         {:row r
                          :target (.querySelector root (.-hash r))
                          :number (.-textContent (.querySelector r ".ix-n"))
                          :title (.-textContent (.querySelector r ".ix-t"))})
                       rows)
        n (count chapters)
        current (atom -1)
        header-h #(or (some-> (js/document.querySelector ".ap-header") .-offsetHeight) 0)
        span (fn [] (max 1 (- (.-offsetHeight pg) js/innerHeight)))
        pg-top #(+ (.-top (.getBoundingClientRect pg)) js/scrollY)
        ;; Chapter ticks on the bar, moved in place when sizes change (never
        ;; removed and re-added, which would register as movement).
        tick-els (atom [])
        ticks! (fn []
                 (let [targets (keep :target (rest chapters))]
                   (when (not= (count @tick-els) (count targets))
                     (doseq [k @tick-els] (.remove k))
                     (reset! tick-els (mapv (fn [_] (doto (js/document.createElement "i")
                                                      (-> .-className (set! "prog-k"))
                                                      (->> (.append prog))))
                                            targets)))
                   (doseq [[^js k target] (map vector @tick-els targets)]
                     (let [y (- (+ (.-top (.getBoundingClientRect target)) js/scrollY) (pg-top))
                           left (str (.toFixed (min 100 (max 0 (* 100 (/ y (span))))) 2) "%")]
                       (when (not= left (.. k -style -left))
                         (set! (.. k -style -left) left))))))
        set-chapter! (fn [i]
                       (when (not= i @current)
                         (reset! current i)
                         (let [{:keys [number title]} (chapters i)]
                           (set! (.-textContent num) number)
                           (set! (.-textContent title-el) title))
                         (set! (.-textContent ahead)
                               (if (= i (dec n)) "Last chapter" (str (- n 1 i) " of " (dec n) " ahead")))
                         (doseq [[j {:keys [row]}] (map-indexed vector chapters)]
                           (.toggle (.-classList row) "is-done" (< j i))
                           (.toggle (.-classList row) "is-cur" (= j i))
                           (if (= j i)
                             (.setAttribute row "aria-current" "location")
                             (.removeAttribute row "aria-current")))))
        ;; The current chapter is the section crossing a thin band just under
        ;; the bars, from IntersectionObserver (the band is redrawn on resize).
        index-of (into {} (keep-indexed (fn [i {:keys [target]}] (when target [target i])) chapters))
        stop-band (atom nil)
        band! (fn []
                (some-> @stop-band (apply []))
                (let [line (+ (header-h) 72)]
                  (reset! stop-band
                          (observe! (keys index-of)
                                    (fn [^js e] (when (.-isIntersecting e) (set-chapter! (index-of (.-target e)))))
                                    :root-margin (str (- line) "px 0px " (- (- js/innerHeight line 1)) "px 0px")))))
        ;; Progress: a CSS scroll-driven animation over #pg where supported
        ;; (.is-scrub, see tailwind.css); elsewhere a throttled scroll listener.
        scrub? (and (exists? js/CSS) (.supports js/CSS "animation-timeline: view()"))
        queued (atom false)
        progress! (fn []
                    (reset! queued false)
                    (let [p (min 1 (max 0 (/ (- js/scrollY (pg-top)) (span))))]
                      (set! (.. fill -style -transform) (str "scaleX(" p ")"))
                      (set! (.-textContent pct) (str (js/Math.round (* p 100)) "%"))))
        schedule! #(when-not @queued (reset! queued true) (js/requestAnimationFrame progress!))
        open! (fn [open?]
                (set! (.-hidden ix) (not open?))
                (.setAttribute now "aria-expanded" (str open?)))
        ro (js/ResizeObserver. ticks!)
        offs [(listen! now "click" #(open! (.-hidden ix)))
              (listen! js/document "keydown"
                       #(when (and (= "Escape" (.-key %)) (not (.-hidden ix)))
                          (open! false) (.focus now)))
              (listen! js/document "click"
                       #(when-not (.contains nav (.-target %)) (open! false)))
              (listen! js/window "resize" band!)
              (when-not scrub? (listen! js/window "scroll" schedule! #js {:passive true}))]
        row-offs (mapv (fn [r] (listen! r "click" #(open! false))) rows)]
    (if scrub?
      (do (.add (.-classList pg) "is-scrub") (set! (.-textContent pct) ""))
      (progress!))
    (set-chapter! 0)
    (band!)
    (.observe ro pg)
    (.then (.-ready js/document.fonts) ticks!)
    (fn []
      (.disconnect ro)
      (some-> @stop-band (apply []))
      (doseq [off (concat offs row-offs) :when off] (off)))))

;; ── In-page links ──────────────────────────────────────────────────────────

(defn- anchor-links!
  "The story links within itself (#chapters, #credit-…). Handle those here
   so the site router never treats them as navigation."
  [^js root]
  (listen! root "click"
           (fn [^js e]
             (when-let [a (.closest (.-target e) "a[href^='#']")]
               (let [id (subs (.getAttribute a "href") 1)
                     target (when (seq id) (js/document.getElementById id))]
                 (.preventDefault e)
                 (.stopPropagation e)
                 (when target
                   (.scrollIntoView target #js {:behavior (if (reduced-motion?) "auto" "smooth")})
                   (when-not (.hasAttribute target "tabindex") (set! (.-tabIndex target) -1))
                   (.focus target #js {:preventScroll true})
                   (.replaceState js/history nil "" (str "#" id))))))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defn- use-head!
  "The story's stylesheet, while the page is open."
  [on-css]
  (hooks/use-effect
   :once
   (let [link (js/document.createElement "link")]
     (set! (.-rel link) "stylesheet")
     (set! (.-href link) css-url)
     (set! (.-onload link) on-css)
     (.append js/document.head link)
     #(.remove link))))

(defnc story-view
  [_props]
  (let [root (hooks/use-ref nil)
        [html set-html!] (hooks/use-state nil)
        [css? set-css!] (hooks/use-state false)]
    (use-head! #(set-css! true))
    (hooks/use-effect
     :once
     (-> (js/fetch html-url)
         (.then #(.text %))
         (.then set-html!)
         (.catch (fn [_] (set-html! "")))))
    (hooks/use-effect
     [html css?]
     (when-let [el (and html css? @root)]
       (set! (.-innerHTML el) html)
       (let [offs (concat (mapv gallery! (array-seq (.querySelectorAll el ".sw[data-gallery]")))
                          [(chapter-bar! el) (anchor-links! el)])]
         ;; Arriving with a #chapter in the URL: jump there now it exists.
         (when-let [id (not-empty (subs (.. js/location -hash) 1))]
           (some-> (js/document.getElementById id) (.scrollIntoView)))
         #(doseq [off offs] (off)))))
    (d/div {:class "zz" :aria-busy (not (and html css?))}
           (when-not (and html css?)
             (d/p {:class "ap-label ap-muted px-4 py-24 text-center m-0"} "Loading the story…"))
           ;; Filled with innerHTML above; React renders no children here.
           (d/div {:ref root}))))
