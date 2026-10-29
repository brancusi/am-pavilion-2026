(ns amp.pages.portage.page
  "Portage: the history of the porter in Venice and the studio's walk over
   the bridges to Tesa 41, rebuilt from the studio's research site
   (portage.atd-ai.workers.dev). Each sheet is content
   (resources/data/portage/<sheet>.html, its stylesheet scoped under .pt in
   portage.css; images on R2 under portage/). This namespace draws the
   Portage sub-nav, loads a sheet and ports the original page scripts:
   strip galleries, credit popovers, the lightbox and the Walk's route."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.services.router :refer [flush-scroll!]]
            [amp.state.provider :refer [use-main-state]]
            ["gsap" :refer [gsap]]
            [clojure.string :as str]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def ^:private css-url "/data/portage/portage.css")
(defn- html-url [slug] (str "/data/portage/" slug ".html"))

;; slug → sheet HTML once fetched, so a sheet renders at once on its swap.
(defonce ^:private loaded (atom {}))

(defn- fetch-sheet
  "A promise of the sheet's HTML (\"\" if it can't be had)."
  [slug]
  (if-let [html (get @loaded slug)]
    (js/Promise.resolve html)
    (-> (js/fetch (html-url slug))
        (.then #(if (.-ok %) (.text %) ""))
        (.then (fn [html] (when (seq html) (swap! loaded assoc slug html)) html))
        (.catch (fn [_] "")))))

(def sheets
  "Every sheet in reading order. :n is the number shown in red; the five
   movements and the Studio are the stations on the sub-nav's route."
  [{:slug "home"     :n "0"   :short "Portage"  :long "Portage"}
   {:slug "shoulder" :n "I"   :short "Shoulder" :long "The Shoulder" :station? true}
   {:slug "guild"    :n "II"  :short "Guild"    :long "The Guild"    :station? true}
   {:slug "world"    :n "III" :short "World"    :long "The World"    :station? true}
   {:slug "machine"  :n "IV"  :short "Machine"  :long "The Machine"  :station? true}
   {:slug "walk"     :n "V"   :short "Walk"     :long "The Walk"     :station? true}
   {:slug "studio"   :n "VI"  :short "Studio"   :long "The Studio"   :station? true}
   {:slug "map"      :n "·"   :short "Map"      :long "The Map"}
   {:slug "weight"   :n "·"   :short "Weight"   :long "The Weight"}
   {:slug "burden"   :n "·"   :short "Burden"   :long "The Burden"}
   {:slug "arsenale" :n "·"   :short "Arsenale" :long "The Arsenale"}
   {:slug "sources"  :n "·"   :short "Sources"  :long "Sources and credits"}])

(def ^:private by-slug (into {} (map (juxt :slug identity)) sheets))
(def ^:private stations (filterv :station? sheets))

(defn- href [slug] (if (= slug "home") "/portage" (str "/portage/" slug)))

(defn- reduced-motion? []
  (.-matches (js/matchMedia "(prefers-reduced-motion: reduce)")))

(defn- listen!
  "addEventListener that returns its own remover."
  ([el ev f] (listen! el ev f nil))
  ([el ev f opts]
   (.addEventListener el ev f opts)
   #(.removeEventListener el ev f opts)))

(defn- esc [s]
  (-> (str s) (str/replace "&" "&amp;") (str/replace "<" "&lt;") (str/replace "\"" "&quot;")))

;; ── Strip galleries ────────────────────────────────────────────────────────

(defn- gallery!
  "Arrow buttons (shown only when the row overflows) and arrow keys on the
   focused row. Returns a cleanup fn."
  [^js g]
  (let [track (.querySelector g ".gal-track")
        ctl (.querySelector g ".gal-ctl")
        prev (.querySelector g ".gal-prev")
        next (.querySelector g ".gal-next")
        step #(max 260 (* 0.8 (.-clientWidth track)))
        update! (fn []
                  (let [over? (> (.-scrollWidth track) (+ 4 (.-clientWidth track)))]
                    (when ctl (set! (.-hidden ctl) (not over?)))
                    (when prev (set! (.-disabled prev) (< (.-scrollLeft track) 4)))
                    (when next (set! (.-disabled next) (> (+ (.-scrollLeft track) (.-clientWidth track))
                                                          (- (.-scrollWidth track) 4))))))
        ro (js/ResizeObserver. update!)
        offs [(when prev (listen! prev "click" #(.scrollBy track #js {:left (- (step))})))
              (when next (listen! next "click" #(.scrollBy track #js {:left (step)})))
              (listen! track "scroll" update! #js {:passive true})
              (listen! track "keydown"
                       (fn [^js e]
                         (when (= (.-target e) track)
                           (case (.-key e)
                             "ArrowRight" (do (.scrollBy track #js {:left (step)}) (.preventDefault e))
                             "ArrowLeft" (do (.scrollBy track #js {:left (- (step))}) (.preventDefault e))
                             nil))))]]
    (set! (.-tabIndex track) 0)
    (.setAttribute track "aria-label"
                   (str (or (some-> (.querySelector g ".h3") .-textContent) "Gallery")
                        ": scroll with the arrow keys"))
    (.observe ro track)
    (update!)
    #(do (.disconnect ro) (doseq [off offs :when off] (off)))))

;; ── Credit popovers ────────────────────────────────────────────────────────

(defn- place! [^js pop ^js by]
  (let [r (.getBoundingClientRect by)
        w (min 320 (- js/innerWidth 24))
        _ (set! (.. pop -style -width) (str w "px"))
        _ (set! (.. pop -style -left)
                (str (max 12 (min (- js/innerWidth w 12) (- (+ (.-left r) (/ (.-width r) 2)) (/ w 2)))) "px"))
        h (.-offsetHeight pop)
        below (+ (.-bottom r) 8)]
    (set! (.. pop -style -top)
          (str (if (and (> (+ below h) (- js/innerHeight 12)) (> (- (.-top r) h 8) 12))
                 (- (.-top r) h 8)
                 below) "px"))))

(defn- notes!
  "An image's credit sits behind its \"i\" (native popover); this places
   it by its button and closes it on scroll."
  [^js root]
  (if-not (js-in "popover" (.-prototype js/HTMLElement))
    (fn [])
    (let [by (atom nil)
          offs (into [(listen! root "pointerdown" #(reset! by (.closest (.-target %) ".note-btn")) true)
                      (listen! js/window "scroll"
                               #(doseq [p (array-seq (.querySelectorAll root ".note:popover-open"))] (.hidePopover p))
                               #js {:passive true})]
                     (map (fn [^js pop]
                            (listen! pop "toggle"
                                     (fn [^js e]
                                       (when (= "open" (.-newState e))
                                         (when-let [src (or @by (.querySelector root (str "[popovertarget=\"" (.-id pop) "\"]")))]
                                           (place! pop src)))))))
                     (array-seq (.querySelectorAll root ".note[popover]")))]
      #(doseq [off offs] (off)))))

;; ── Lightbox ───────────────────────────────────────────────────────────────

(def ^:private lightbox-html
  "<dialog class=\"lb\" aria-label=\"Image viewer\" aria-describedby=\"lb-cap\">
    <div class=\"lb-stage\">
      <img class=\"lb-img\" alt=\"\" decoding=\"async\"><img class=\"lb-img\" alt=\"\" decoding=\"async\">
      <button type=\"button\" class=\"lb-btn lb-prev\" aria-label=\"Previous image\">←</button>
      <button type=\"button\" class=\"lb-btn lb-next\" aria-label=\"Next image\">→</button>
    </div>
    <div class=\"lb-bar\">
      <div class=\"lb-cap\" id=\"lb-cap\"></div>
      <p class=\"lb-count\" aria-live=\"polite\"></p>
      <button type=\"button\" class=\"lb-btn lb-close\" aria-label=\"Close the viewer\">Close ✕</button>
    </div>
  </dialog>")

(defn- caption-for [^js el]
  (if-let [cap (some-> (.closest el "figure, .gal-item, .stop, .media, .key > div")
                       (.querySelector "figcaption, .cap"))]
    (let [c (.cloneNode cap true)]
      (doseq [x (array-seq (.querySelectorAll c ".gal-n, .note-btn, .note, [popover]"))] (.remove x))
      (str/trim (.-innerHTML c)))
    ""))

(defn- visible? [^js el]
  (boolean (or (pos? (.-offsetWidth el)) (pos? (.-offsetHeight el)) (pos? (.-length (.getClientRects el))))))

(defn- lightbox!
  "Tap an image to see it whole; close, previous, next (buttons, arrow keys,
   swipe). Two <img> layers: the next image is decoded off screen, then
   faded in over the one showing, so the screen never goes blank."
  [^js root data]
  (let [dlg (.querySelector root "dialog.lb")
        $ #(.querySelector dlg %)
        [a b] (array-seq (.querySelectorAll dlg ".lb-img"))
        st (atom {:items [] :idx 0 :front 0 :ticket 0 :opener nil})
        collect! (fn [^js from]
                   (let [set-id (.. from -dataset -set)
                         all (filter visible? (array-seq (.querySelectorAll root "[data-img]")))
                         pick (filter #(= set-id (.. ^js % -dataset -set)) all)
                         items (->> pick
                                    (reduce (fn [[seen acc] ^js e]
                                              (let [id (.. e -dataset -img)]
                                                (if (or (not (aget data id)) (and (seen id) (not= e from)))
                                                  [seen acc]
                                                  [(conj seen id) (conj acc {:id id :caption (caption-for e) :el e})])))
                                            [#{} []])
                                    second)]
                     (swap! st assoc :items items
                            :idx (max 0 (.indexOf (to-array (map :el items)) from)))))
        show! (fn [& [^js from]]
                (let [{:keys [items idx front]} @st
                      {:keys [id caption el]} (items idx)
                      ^js r (aget data id)
                      my (:ticket (swap! st update :ticket inc))
                      cur (if (zero? front) a b)
                      nxt (if (zero? front) b a)
                      many? (> (count items) 1)]
                  (set! (.-textContent ($ ".lb-count")) (if many? (str (inc idx) " / " (count items)) ""))
                  (set! (.-innerHTML ($ ".lb-cap"))
                        (str "<span class=\"t\">" (esc (.-title r)) "</span>"
                             "<span class=\"c\">" (if (seq caption) caption (str "<span>" (.-credit r) "</span>")) "</span>"
                             "<span class=\"cr\">" (.-credit r)
                             (when (seq (.-url r))
                               (str " <a href=\"" (esc (.-url r)) "\" target=\"_blank\" rel=\"noopener\">Source ↗</a>"))
                             "</span>"))
                  (set! (.-hidden ($ ".lb-prev")) (not many?))
                  (set! (.-hidden ($ ".lb-next")) (not many?))
                  (when-not (.contains dlg js/document.activeElement) (.focus ($ ".lb-close")))
                  ;; First open: the page's own (already loaded) image at once.
                  (when (and from (not (.contains (.-classList cur) "on")))
                    (when-let [shown (not-empty (.-currentSrc from))]
                      (set! (.-src cur) shown) (set! (.-alt cur) "")
                      (.add (.-classList cur) "on" "now")))
                  (.remove (.-classList nxt) "on" "now")
                  (set! (.-sizes nxt) "100vw")
                  (set! (.-srcset nxt) (.-ss r))
                  (set! (.-src nxt) (.-src r))
                  (set! (.-alt nxt) (or (.getAttribute el "alt") (.-alt r) (.-title r)))
                  (-> (.decode nxt)
                      (.catch (fn [_]))
                      (.then (fn []
                               (when (= my (:ticket @st))
                                 (.add (.-classList nxt) "on")
                                 (when (reduced-motion?) (.add (.-classList nxt) "now"))
                                 (set! (.-alt cur) "")
                                 (swap! st update :front #(- 1 %))
                                 (js/setTimeout #(when (= my (:ticket @st)) (.remove (.-classList cur) "on" "now"))
                                                (if (reduced-motion?) 0 220))
                                 ;; Warm the neighbours.
                                 (doseq [n [1 -1]
                                         :let [nb (items (mod (+ idx n) (count items)))]
                                         :when (not= (:id nb) id)]
                                   (let [im (js/Image.) ^js nr (aget data (:id nb))]
                                     (set! (.-sizes im) "100vw") (set! (.-srcset im) (.-ss nr)) (set! (.-src im) (.-src nr))))))))))
        go! (fn [n]
              (let [c (count (:items @st))]
                (when (> c 1)
                  (swap! st update :idx #(mod (+ % n) c))
                  (show!))))
        open! (fn [^js from]
                (swap! st assoc :opener from)
                (collect! from)
                (when (seq (:items @st))
                  (when-not (.-open dlg)
                    (doseq [l [a b]] (.remove (.-classList l) "on") (.removeAttribute l "src") (.removeAttribute l "srcset"))
                    (.showModal dlg)
                    (set! (.. js/document -documentElement -style -overflow) "hidden"))
                  (show! from)))
        swipe (atom nil)
        offs [(listen! root "click"
                       (fn [^js e]
                         (when-let [t (.closest (.-target e) "[data-img]")]
                           (when (and (aget data (.. t -dataset -img)) (not (.contains dlg t))
                                      (not (or (.-metaKey e) (.-ctrlKey e) (.-shiftKey e))) (zero? (.-button e)))
                             (.preventDefault e)
                             (open! t)))))
              (listen! js/document "keydown"
                       (fn [^js e]
                         (let [t (.-target e)]
                           (when (and (#{"Enter" " "} (.-key e)) (.-matches t) (.matches t "img[data-img]") (.contains root t))
                             (.preventDefault e) (open! t))
                           (when (.-open dlg)
                             (case (.-key e)
                               "ArrowRight" (do (go! 1) (.preventDefault e))
                               "ArrowLeft" (do (go! -1) (.preventDefault e))
                               nil)))))
              (listen! ($ ".lb-close") "click" #(.close dlg))
              (listen! ($ ".lb-prev") "click" #(go! -1))
              (listen! ($ ".lb-next") "click" #(go! 1))
              (listen! dlg "close"
                       (fn []
                         (set! (.. js/document -documentElement -style -overflow) "")
                         (swap! st update :ticket inc)
                         (some-> ^js (:opener @st) (.focus #js {:preventScroll true}))))
              (listen! ($ ".lb-stage") "pointerdown"
                       (fn [^js e]
                         (when-not (.closest (.-target e) "button")
                           (reset! swipe [(.-clientX e) (.-clientY e) (js/Date.now)]))))
              (listen! ($ ".lb-stage") "pointerup"
                       (fn [^js e]
                         (when-let [[x0 y0 t0] @swipe]
                           (reset! swipe nil)
                           (let [dx (- (.-clientX e) x0) dy (- (.-clientY e) y0)]
                             (when (and (> (js/Math.abs dx) 50) (> (js/Math.abs dx) (* 1.5 (js/Math.abs dy)))
                                        (< (- (js/Date.now) t0) 900))
                               (go! (if (neg? dx) 1 -1)))))))
              (listen! ($ ".lb-stage") "pointercancel" #(reset! swipe nil))]]
    (doseq [^js im (array-seq (.querySelectorAll root "img[data-img]"))
            :let [^js r (aget data (.. im -dataset -img))]
            :when r]
      (set! (.-tabIndex im) 0)
      (.setAttribute im "role" "button")
      (.setAttribute im "aria-label" (str "Enlarge: " (or (not-empty (.getAttribute im "alt")) (.-alt r) (.-title r)))))
    (fn []
      (when (.-open dlg) (.close dlg))
      (doseq [off offs] (off)))))

;; ── The Walk ───────────────────────────────────────────────────────────────

(def ^:private route-m 3044)
(def ^:private red "#a8231a")

(defn- walk!
  "V The Walk: the scroll is the route. The red line draws itself down the
   page as you read; an odometer counts km and the climb from the bridges
   passed, and the bridge reached lights in the rail."
  [^js root]
  (let [desk (.querySelector root ".v-desk")
        bridges (vec (for [^js el (some-> desk (.querySelectorAll ".rail .b") array-seq)
                           :let [name (or (some-> (.querySelector el "b") .-textContent) "")
                                 t (.-textContent el)
                                 [_ n nm] (re-find #"^(\d+)\s*·\s*(.+)$" name)
                                 [_ km] (re-find #"km\s*([\d.]+)" t)
                                 [_ c] (re-find #"↑\s*(\d+)\s*of" t)]]
                       {:n (or n "") :name (str/trim (or nm name)) :km (js/parseFloat (or km "0"))
                        :climb (or c "0") :el el}))
        odo (doto (js/document.createElement "div")
              (-> .-className (set! "odo"))
              (.setAttribute "aria-hidden" "true")
              (-> .-innerHTML (set! "<span class=\"odo-km\">KM 0.00</span><span class=\"odo-b\">Piazzale Roma</span><span class=\"odo-c\">↑ 0 of 182 steps</span>")))
        _ (.append (.querySelector root ".pg") odo)
        okm (.querySelector odo ".odo-km") ob (.querySelector odo ".odo-b") oc (.querySelector odo ".odo-c")
        lines (vec (for [^js r (array-seq (.querySelectorAll root (str "main svg rect[fill=\"" red "\"]")))
                         :let [w (js/parseFloat (or (.getAttribute r "width") 0))
                               h (js/parseFloat (or (.getAttribute r "height") 0))]
                         :when (and (> h 40) (> h (* 10 w)))]
                     (let [svg (.-ownerSVGElement r)
                           ticks (keep (fn [^js t]
                                         (when-let [[_ m] (re-find #"^([\d,]+) m$" (.-textContent t))]
                                           {:y (- (js/parseFloat (.getAttribute t "y")) 4)
                                            :m (js/parseFloat (str/replace m "," ""))}))
                                       (array-seq (.querySelectorAll svg "text")))
                           [t0 t1] [(first ticks) (last ticks)]
                           dy (when t0 (- (:y t1) (:y t0)))
                           b (if (and t0 (not= t0 t1)) (/ (- (:m t1) (:m t0)) (if (zero? dy) 1 dy)) 0.4)
                           a (if (and t0 (not= t0 t1)) (- (:m t0) (* b (:y t0))) 0)
                           ghost (.cloneNode r)]
                       (.setAttribute ghost "fill" "#cfc9bb")
                       (.insertBefore (.-parentNode r) ghost r)
                       {:r r :svg svg :y (js/parseFloat (or (.getAttribute r "y") 0)) :h h :a a :b b})))
        last-on (atom nil)
        queued (atom false)
        frame! (fn []
                 (reset! queued false)
                 (let [eye (* 0.5 js/innerHeight)
                       [metres first-top last-bottom]
                       (reduce (fn [[metres lo hi] {:keys [^js r ^js svg y h a b]}]
                                 (let [box (.getBoundingClientRect svg)]
                                   (if (zero? (.-height box))
                                     [metres lo hi]
                                     (let [vb (.. svg -viewBox -baseVal)
                                           k (/ (.-height box) (if (and vb (pos? (.-height vb))) (.-height vb) (.-height box)))
                                           top (+ (.-top box) (* k (- y (if vb (.-y vb) 0))))
                                           drawn (max 0 (min h (/ (- eye top) k)))]
                                       (when-not (reduced-motion?) (.setAttribute r "height" drawn))
                                       [(if (<= top eye) (max metres (+ a (* b (+ y drawn)))) metres)
                                        (min lo top) (max hi (+ top (* h k)))]))))
                               [-1 js/Infinity (- js/Infinity)] lines)
                       m (max 0 (min route-m metres))
                       cur (last (filter #(<= (* 1000 (:km %)) (inc m)) bridges))]
                   (set! (.-textContent okm) (str "KM " (.toFixed (/ m 1000) 2)))
                   (set! (.-textContent ob) (if cur (str "Bridge " (:n cur) " · " (:name cur)) "Piazzale Roma"))
                   (set! (.-textContent oc) (str "↑ " (if cur (:climb cur) 0) " of 182 steps"))
                   (.toggle (.-classList odo) "on" (and (seq lines) (> eye first-top) (< eye (+ last-bottom 240))))
                   (when (not= (:el cur) @last-on)
                     (some-> ^js @last-on .-classList (.remove "on"))
                     (some-> ^js (:el cur) .-classList (.add "on"))
                     (reset! last-on (:el cur)))))
        schedule! #(when-not @queued (reset! queued true) (js/requestAnimationFrame frame!))
        offs [(listen! js/window "scroll" schedule! #js {:passive true})
              (listen! js/window "resize" schedule! #js {:passive true})]]
    (doseq [{:keys [^js el]} bridges] (.remove (.-classList el) "on"))
    (frame!)
    #(do (.remove odo) (doseq [off offs] (off)))))

;; ── Small things ───────────────────────────────────────────────────────────

(defn- lazy-svg-images!
  "Images inside the SVG drawings load when their drawing comes within a
   screen of the viewport."
  [^js root]
  (let [load! (fn [^js im] (.setAttribute im "href" (.. im -dataset -href)) (.removeAttribute im "data-href"))
        io (js/IntersectionObserver.
            (fn [es _]
              (doseq [^js e es :when (.-isIntersecting e)]
                (doseq [im (array-seq (.querySelectorAll (.-target e) "image[data-href]"))] (load! im))))
            #js {:rootMargin "100% 0px"})]
    (doseq [svg (distinct (map #(.-ownerSVGElement ^js %) (array-seq (.querySelectorAll root "image[data-href]"))))]
      (.observe io svg))
    #(.disconnect io)))

(defn- reveal!
  "Sections marked data-reveal fade up once, the first time they are seen."
  [^js root]
  (if (reduced-motion?)
    (fn [])
    (let [io (js/IntersectionObserver.
              (fn [es ^js io]
                (doseq [^js e es :when (.-isIntersecting e)]
                  (.add (.. e -target -classList) "shown")
                  (.unobserve io (.-target e))))
              #js {:rootMargin "0px 0px -10% 0px"})]
      (doseq [^js el (array-seq (.querySelectorAll root "[data-reveal]"))]
        (.add (.-classList el) "reveal")
        (.observe io el))
      #(.disconnect io))))

(defn- anchor-links!
  "In-sheet links (#…) scroll here, so the site router never sees them."
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
                   (.replaceState js/history nil "" (str "#" id))))))))

;; ── Sub-nav ────────────────────────────────────────────────────────────────

(defn- use-route-fill!
  "The red route under the stations: drawn to the current station, then on
   toward the next as the sheet is read. Off the route, it draws nothing."
  [stations-ref slug]
  (let [[fill set-fill!] (hooks/use-state 0)]
    (hooks/use-effect
     [slug]
     (let [i (first (keep-indexed #(when (= slug (:slug %2)) %1) stations))
           queued (atom false)
           measure! (fn []
                      (reset! queued false)
                      (when-let [^js el @stations-ref]
                        (let [links (vec (array-seq (.querySelectorAll el "a")))
                              x0 (.-left (.getBoundingClientRect el))
                              mid #(let [r (.getBoundingClientRect ^js %)] (- (+ (.-left r) (/ (.-width r) 2)) x0))
                              doc (.-documentElement js/document)
                              p (min 1 (max 0 (/ js/scrollY (max 1 (- (.-scrollHeight doc) js/innerHeight)))))]
                          (set-fill! (cond
                                       (nil? i) 0
                                       (= i (dec (count links))) (mid (links i))
                                       :else (+ (mid (links i)) (* p (- (mid (links (inc i))) (mid (links i))))))))))
           schedule! #(when-not @queued (reset! queued true) (js/requestAnimationFrame measure!))
           offs [(listen! js/window "scroll" schedule! #js {:passive true})
                 (listen! js/window "resize" schedule!)]]
       (schedule!)
       (.then (.-ready js/document.fonts) schedule!)
       #(doseq [off offs] (off))))
    fill))

(defnc sheet-menu
  [{:keys [slug]}]
  (let [[open? set-open!] (hooks/use-state false)
        root (hooks/use-ref nil)]
    (hooks/use-effect
     [open?]
     (when open?
       (let [offs [(listen! js/document "click" #(when-not (.contains @root (.-target %)) (set-open! false)))
                   (listen! js/document "keydown" #(when (= "Escape" (.-key %)) (set-open! false)))]]
         #(doseq [off offs] (off)))))
    (hooks/use-effect [slug] (set-open! false))
    (d/div {:class "pt-menu" :ref root}
           (d/button {:type "button" :class "pt-menu__btn" :aria-expanded open?
                      :on-click #(set-open! not)}
                     "Sheets" (d/span {:aria-hidden true} (if open? " −" " +")))
           (when open?
             (d/div {:class "pt-menu__panel"}
                    (for [[label group] [["The walk" (filter :station? sheets)]
                                         ["Also" (remove #(or (:station? %) (#{"home" "sources"} (:slug %))) sheets)]
                                         ["" (filter #(#{"home" "sources"} (:slug %)) sheets)]]]
                      (d/div {:key (str label (count group)) :class "pt-menu__group"}
                             (when (seq label) (d/p {:class "pt-menu__label"} label))
                             (for [{s :slug :keys [n long]} group]
                               (d/a {:key s :href (href s) :aria-current (when (= s slug) "page")}
                                    (when (and (seq n) (not= n "·") (not= n "0")) (d/i n))
                                    long)))))))))

(defnc sub-nav
  [{:keys [slug]}]
  (let [stations-ref (hooks/use-ref nil)
        fill (use-route-fill! stations-ref slug)
        {:keys [n long]} (by-slug slug)
        cur-i (first (keep-indexed #(when (= slug (:slug %2)) %1) stations))]
    (d/nav {:class "pt-nav" :aria-label "Portage"}
           (d/div {:class "pt-nav__bar"}
                  (d/a {:class "pt-nav__brand" :href "/portage"} "Portage")
                  (d/span {:class "pt-nav__here"}
                          (when (and (seq n) (not= n "·") (not= n "0")) (d/i n))
                          (when (not= slug "home") long))
                  (d/div {:class "pt-nav__stations" :ref stations-ref}
                         (for [[i {s :slug :keys [n short]}] (map-indexed vector stations)]
                           (d/a {:key s :href (href s)
                                 :class (cond (= i cur-i) "is-here" (and cur-i (< i cur-i)) "is-past")
                                 :aria-current (when (= s slug) "page")}
                                (d/i n) short))
                         (d/span {:class "pt-nav__route" :aria-hidden true}
                                 (d/span {:class "pt-nav__fill" :style {:width (str fill "px")}})))
                  ($ sheet-menu {:slug slug})))))

(defnc next-sheet
  [{:keys [slug]}]
  (let [i (first (keep-indexed #(when (= slug (:slug %2)) %1) sheets))
        prev (when (pos? i) (sheets (dec i)))
        nxt (get sheets (inc i))]
    (d/nav {:class "pt-next" :aria-label "Next sheet"}
           (when prev
             (d/a {:class "pt-next__prev" :href (href (:slug prev))}
                  (d/span {:class "ap-label"} "← Back")
                  (d/span {:class "pt-next__t"} (:long prev))))
           (when nxt
             (d/a {:class "pt-next__next" :href (href (:slug nxt))}
                  (d/span {:class "ap-label"} "Next →")
                  (d/span {:class "pt-next__t"} (:long nxt)))))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defn- use-css!
  "The Portage stylesheet, while a sheet is open."
  [on-css]
  (hooks/use-effect
   :once
   (let [link (js/document.createElement "link")]
     (set! (.-rel link) "stylesheet")
     (set! (.-href link) css-url)
     (set! (.-onload link) on-css)
     (.append js/document.head link)
     #(.remove link))))

(defnc sheet-body
  [{:keys [slug css?]}]
  (let [root (hooks/use-ref nil)
        born (hooks/use-ref (js/performance.now))
        [html set-html!] (hooks/use-state #(get @loaded slug))]
    (hooks/use-effect
     :once
     (when-not html (.then (fetch-sheet slug) set-html!)))
    ;; A layout effect: the sheet is in place before the frame is painted
    ;; (and before portage-view scrolls), so nothing shifts.
    (hooks/use-layout-effect
     [html css?]
     (when-let [el (and html css? @root)]
       (set! (.-innerHTML el) (str html lightbox-html))
       ;; Arrived after the page was already showing (first visit, while
       ;; the stylesheet or sheet loaded): fade in rather than pop.
       (when (and (> (- (js/performance.now) @born) 50) (not (reduced-motion?)))
         (.fromTo gsap el #js {:opacity 0} #js {:opacity 1 :duration 0.24 :ease "power2.out" :clearProps "opacity"}))
       (let [data (try (js/JSON.parse (or (some-> (.querySelector el "script.lb-data") .-textContent) "{}"))
                       (catch :default _ #js {}))
             offs (concat (map gallery! (array-seq (.querySelectorAll el ".gal-strip")))
                          [(notes! el) (lightbox! el data) (lazy-svg-images! el) (reveal! el) (anchor-links! el)]
                          (when (= slug "walk") [(walk! el)]))]
         (when-let [id (not-empty (subs (.. js/location -hash) 1))]
           (some-> (js/document.getElementById id) (.scrollIntoView)))
         #(doseq [off offs :when off] (off)))))
    (d/div {:aria-busy (not (and html css?))}
           (when-not (and html css?)
             (d/p {:class "pt-loading ap-label ap-muted px-4 py-24 text-center m-0"} "Loading…"))
           (when (= html "")
             (d/p {:class "ap-body px-4 py-24 text-center m-0"} "This sheet could not be loaded."))
           ;; Filled with innerHTML above; React renders no children here.
           (d/div {:ref root})
           ;; Only under a filled sheet, so it never sits up top and jumps.
           (when (and (seq html) css?)
             ($ next-sheet {:slug slug})))))

(defn- use-sheet-swap!
  "The sheet on screen trails the route: on a new sheet the current one
   fades out while the next is fetched, then it swaps, scrolls and fades in.
   The sub-nav follows the route at once. Returns the slug to show."
  [slug body-ref]
  (let [[shown set-shown!] (hooks/use-state slug)
        token (hooks/use-ref 0)
        swapped (hooks/use-ref false)]
    (hooks/use-effect
     [slug]
     (let [t (set! (.-current token) (inc @token))
           el @body-ref]
       (if (= slug shown)
         (do (when el (.to gsap el #js {:opacity 1 :duration 0.2 :overwrite true}))
             (flush-scroll!))
         (-> (js/Promise.all
              #js [(js/Promise. (fn [resolve]
                                  (if (or (nil? el) (reduced-motion?))
                                    (resolve nil)
                                    (.to gsap el #js {:opacity 0 :duration 0.12 :ease "power1.in"
                                                      :overwrite true :onComplete resolve}))))
                   (fetch-sheet slug)])
             (.then #(when (= t @token)
                       (set! (.-current swapped) true)
                       (set-shown! slug)))))
       js/undefined))
    (hooks/use-layout-effect
     [shown]
     (when @swapped
       (set! (.-current swapped) false)
       (flush-scroll!)
       (when-let [el @body-ref]
         (if (reduced-motion?)
           (.set gsap el #js {:clearProps "opacity"})
           (.fromTo gsap el #js {:opacity 0}
                    #js {:opacity 1 :duration 0.22 :ease "power2.out" :overwrite true
                         :clearProps "opacity"}))))
     js/undefined)
    shown))

(defnc portage-view
  [_props]
  (let [[state _] (use-main-state)
        route-slug (or (-> state :current-route :path-params :sheet) "home")
        body-ref (hooks/use-ref nil)
        slug (use-sheet-swap! route-slug body-ref)
        sheet (by-slug slug)
        [css? set-css!] (hooks/use-state false)]
    (use-css! #(set-css! true))
    (hooks/use-effect
     [slug]
     (set! (.-title js/document)
           (if (and sheet (not= slug "home"))
             (str (:long sheet) " · Portage · Armenia Pavilion")
             "Portage · Armenia Pavilion")))
    (d/div {:class "pt"}
           ($ sub-nav {:slug (if (by-slug route-slug) route-slug "home")})
           (if sheet
             (d/div {:ref body-ref}
              ($ sheet-body {:key slug :slug slug :css? css?}))
             (d/p {:class "ap-body px-4 py-24 text-center m-0"} "There is no such sheet.")))))
