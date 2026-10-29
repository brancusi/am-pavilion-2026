(ns amp.pages.story.page
  "“Armenian as well”: the story of Zadik Zadikian and Tony Shafrazi,
   1973–2026, rebuilt from zz-story.pages.dev. The long-form page is
   content (resources/data/zz-story/story.html, its stylesheet scoped under
   .zz in story.css; images on R2 under zz_story/). This namespace loads it
   and ports the original page script: swipe galleries, the chapter index,
   and reading progress."
  (:require [amp.lib.defnc :refer [defnc]]
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
        queued (atom false)
        left-of (fn [el] (+ (- (.-left (.getBoundingClientRect el))
                               (.-left (.getBoundingClientRect track)))
                            (.-scrollLeft track)))
        pad (fn [] (or (js/parseFloat (.-scrollPaddingLeft (js/getComputedStyle track))) 0))
        update! (fn []
                  (reset! queued false)
                  (let [x (+ (.-scrollLeft track) (pad))
                        i (if (>= (+ (.-scrollLeft track) (.-clientWidth track)) (- (.-scrollWidth track) 2))
                            (dec n)
                            (apply min-key #(js/Math.abs (- (left-of (slides %)) x)) (range n)))]
                    (reset! at i)
                    (set! (.-textContent counter) (str (pad2 (inc i)) " / " (pad2 n)))
                    (set! (.-disabled prev) (zero? i))
                    (set! (.-disabled next) (= i (dec n)))))
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
              (listen! track "scroll"
                       #(when-not @queued (reset! queued true) (js/requestAnimationFrame update!))
                       #js {:passive true})
              (listen! js/window "resize" #(js/requestAnimationFrame update!))]]
    (set! (.-hidden ctl) false)
    (update!)
    #(doseq [off offs] (off))))

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
        queued (atom false) reticks (atom false) current (atom -1)
        header-h #(or (some-> (js/document.querySelector ".ap-header") .-offsetHeight) 0)
        span (fn [] (max 1 (- (.-offsetHeight pg) js/innerHeight)))
        pg-top #(+ (.-top (.getBoundingClientRect pg)) js/scrollY)
        ticks! (fn []
                 (doseq [k (array-seq (.querySelectorAll prog ".prog-k"))] (.remove k))
                 (doseq [{:keys [target]} (rest chapters) :when target]
                   (let [y (- (+ (.-top (.getBoundingClientRect target)) js/scrollY) (pg-top))
                         k (js/document.createElement "i")]
                     (set! (.-className k) "prog-k")
                     (set! (.. k -style -left) (str (min 100 (max 0 (* 100 (/ y (span))))) "%"))
                     (.append prog k))))
        update! (fn []
                  (reset! queued false)
                  (when @reticks (reset! reticks false) (ticks!))
                  (let [p (min 1 (max 0 (/ (- js/scrollY (pg-top)) (span))))
                        line (+ (header-h) 72)
                        i (reduce (fn [acc [i {:keys [target]}]]
                                    (if (and target (<= (.-top (.getBoundingClientRect target)) line)) i acc))
                                  0 (map-indexed vector chapters))]
                    (set! (.. fill -style -transform) (str "scaleX(" p ")"))
                    (set! (.-textContent pct) (str (js/Math.round (* p 100)) "%"))
                    (when (not= i @current)
                      (reset! current i)
                      (let [{:keys [number title] :as _c} (chapters i)]
                        (set! (.-textContent num) number)
                        (set! (.-textContent title-el) title))
                      (set! (.-textContent ahead)
                            (if (= i (dec n)) "Last chapter" (str (- n 1 i) " of " (dec n) " ahead")))
                      (doseq [[j {:keys [row]}] (map-indexed vector chapters)]
                        (.toggle (.-classList row) "is-done" (< j i))
                        (.toggle (.-classList row) "is-cur" (= j i))
                        (if (= j i)
                          (.setAttribute row "aria-current" "location")
                          (.removeAttribute row "aria-current"))))))
        schedule! (fn [& [ticks?]]
                    (when ticks? (reset! reticks true))
                    (when-not @queued (reset! queued true) (js/requestAnimationFrame update!)))
        open! (fn [open?]
                (set! (.-hidden ix) (not open?))
                (.setAttribute now "aria-expanded" (str open?)))
        ro (js/ResizeObserver. #(schedule! true))
        offs [(listen! now "click" #(open! (.-hidden ix)))
              (listen! js/document "keydown"
                       #(when (and (= "Escape" (.-key %)) (not (.-hidden ix)))
                          (open! false) (.focus now)))
              (listen! js/document "click"
                       #(when-not (.contains nav (.-target %)) (open! false)))
              (listen! js/window "scroll" #(schedule!) #js {:passive true})
              (listen! js/window "resize" #(schedule! true))]
        row-offs (mapv (fn [r] (listen! r "click" #(open! false))) rows)]
    (.observe ro pg)
    (.then (.-ready js/document.fonts) #(schedule! true))
    (schedule! true)
    (fn []
      (.disconnect ro)
      (doseq [off (concat offs row-offs)] (off)))))

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
       (let [offs (concat (map gallery! (array-seq (.querySelectorAll el ".sw[data-gallery]")))
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
