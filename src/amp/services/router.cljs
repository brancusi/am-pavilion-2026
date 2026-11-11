(ns amp.services.router
  (:require [amp.i18n :as i18n :refer [t] :refer-macros [defcatalog]]
            [amp.lib.defnc :refer [defnc]]
            [amp.state.provider :refer [use-main-state]]
            [helix.hooks :as hooks]
            [reitit.frontend :as rf]
            [amp.pages.not-found :refer [not-found-view]]
            [amp.pages.subscribed :refer [subscribed-view]]
            [amp.utils.lazy-loading :refer-macros [lazy-component]]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]))

;; ---------------------------------------------------------------------------
;; Scroll restoration — push navigations scroll to top, pop (back/forward)
;; restores the saved scroll position so the user lands where they left off.
;; ---------------------------------------------------------------------------

;; :push = user clicked a link  |  :pop = browser back/forward
(defonce ^:private nav-type (atom :push))

;; path → scroll-y, preserved across hot-reloads
(defonce ^:private scroll-positions (atom {}))

;; The path on screen. Kept here, not read from state: the route callback is
;; handed to reitit once, so the state it closes over never updates.
(defonce ^:private current-path (atom nil))

;; The scroll for the latest navigation, held until the new content is in
;; place: the section transitioner (or a page that swaps its own content)
;; runs it, so the old page never jumps while it fades out.
(defonce ^:private pending-scroll (atom nil))

(defn flush-scroll!
  "Run the scroll held for the latest navigation, once."
  []
  (when-let [f @pending-scroll]
    (reset! pending-scroll nil)
    (f)))

;; Route titles, the site title and other strings every page shares.
(defcatalog "site")

(def site-map [{:id ::venue
                :path "visit"
                :title :site/title-visit
                :view (lazy-component amp.pages.venue.page/venue-view)}

               {:id ::artist
                :path "artist"
                :title :site/title-artist
                :view (lazy-component amp.pages.artist.page/artist-view)}

               {:id ::blog
                :path "blog"
                :title :site/title-journal
                :view (lazy-component amp.pages.blog.page/blog-view)}

               {:id ::press
                :path "press"
                :title :site/title-press
                :view (lazy-component amp.pages.press.page/press-view)}

               {:id ::delivery
                :path "delivery"
                :title :site/title-delivery
                :view (lazy-component amp.pages.delivery.page/delivery-view)}

               {:id ::story
                :path "armenian-as-well"
                :title :site/title-story
                :view (lazy-component amp.pages.story.page/story-view)}

               {:id ::portage
                :path "portage"
                :title :site/title-portage
                :view (lazy-component amp.pages.portage.page/portage-view)}

               {:id ::walks
                :path "walks"
                :title :site/title-walks
                :view (lazy-component amp.pages.walks.page/walks-view)}

               ;; Where Buttondown lands a new subscriber after they confirm.
               ;; In the main bundle (small), so no lazy module.
               {:id ::subscribed
                :path "subscribed"
                :title :site/title-subscribed
                :view subscribed-view}

               {:id ::water-taxi
                :path "route-from-hotel-gabrielli"
                :title :site/title-water-taxi
                :view (lazy-component amp.pages.water-taxi.page/water-taxi-view)}])

(def ^:private landing (lazy-component amp.pages.landing.page/landing-view))

(defn- localize
  "Route name or group for a locale: English keeps the plain name (:home,
   ::blog); the others get a suffix (::blog.it), so switching language is a
   page change for the transitioner."
  [k l]
  (if (or (nil? k) (= l i18n/default-locale))
    k
    (keyword (namespace k) (str (name k) "." l))))

(defn- locale-routes
  "The site's routes for one locale, without its prefix."
  []
  (into [[""
          {:name :home
           :view landing}]
         ;; One film on the home page, picked and scrolled to: a link of its own,
         ;; with its own preview (cloudflare/site/worker.js).
         ["films/:slug"
          {:name :home-film
           :view landing}]]
        (mapcat (fn [{:keys [id path view title]}]
                  (let [route-data {:name id
                                    :view view
                                    :title title}]
                    (case id
                      ;; Blog gets two routes: index + slug-parameterized post
                      ::blog [[path route-data]
                              [(str path "/:slug")
                               (assoc route-data :name ::blog-post)]]
;; Portage: the home sheet + one route per sheet. One page for the
                      ;; transitioner (:group); it swaps sheets itself (:inner-swap).
                      ::portage (let [route-data (assoc route-data :group ::portage :inner-swap true)]
                                  [[path route-data]
                                   [(str path "/:sheet")
                                    (assoc route-data :name ::portage-sheet)]])
                      ;; Press: the overview + one route per section, one page
                      ;; (:group) that swaps its sections itself (:inner-swap).
                      ::press
                      (let [route-data (assoc route-data :group id :inner-swap true)]
                        [[path route-data]
                         [(str path "/:section")
                          (assoc route-data :name (keyword "amp.services.router" (str (name id) "-section")))]
                         ;; A film or image: /press/films/carrying, /press/images/<uid>.
                         [(str path "/:section/:item")
                          (assoc route-data :name (keyword "amp.services.router" (str (name id) "-item")))]])
                      [[path route-data]])))
                site-map)))

(defn routes
  "Every route in every locale: English at /, the others under /<locale>/.
   Route data carries :locale; names and groups are suffixed per locale."
  []
  (into ["/"]
        (mapcat (fn [l]
                  (let [prefix (if (= l i18n/default-locale) "" (str l "/"))]
                    (for [[path data] (locale-routes)
                          :let [data (cond-> (assoc data :locale l :base-name (:name data)
                                                    :name (localize (:name data) l))
                                       (:group data) (update :group localize l))
                                path (if (and (= path "") (not= prefix "")) l (str prefix path))]]
                      [path data]))))
        i18n/locales))

(comment

  (routes)

  ;;Keep from folding
  )

(defn- not-found-route
  "A match-shaped value for paths with no route."
  []
  (let [path (.. js/location -pathname)
        l (first (i18n/split-path path))]
    {:path path
     :data {:name (localize ::not-found l) :view not-found-view :title :site/title-not-found
            :locale l}}))

(defn- set-title!
  "Page title: \"<Page> · Armenian Pavilion\", the full site title at home.
   Blog posts set their own once their content has loaded."
  [route]
  (set! (.-title js/document)
        (if-let [k (-> route :data :title)]
          (t :site/page-title {:page (t k)})
          (t :site/site-title))))

(defn- scroll-to-anchor!
  "Scroll to element `id`, retrying for a moment while a lazy page loads."
  [id]
  (let [tries (atom 0)]
    ((fn attempt []
       (if-let [el (.getElementById js/document id)]
         (do (.scrollIntoView el #js {:block "start"})
             ;; Images above the anchor may still change the layout:
             ;; settle once more.
             (js/setTimeout #(.scrollIntoView el #js {:block "start"}) 500))
         (when (< (swap! tries inc) 40)
           (js/setTimeout attempt 50)))))))

(defn- restore-scroll!
  "Scroll back to `y`, retrying for a moment while the page is still too
   short to reach it (content that loads after the page mounts)."
  [y]
  (let [frames (atom 0)]
    ((fn attempt []
       (.scrollTo js/window 0 y)
       (when (and (> (- y (.-scrollY js/window)) 2) (< (swap! frames inc) 90))
         (js/requestAnimationFrame attempt))))))

(defnc router
  [{:keys [children]}]

  (let [[state dispatch!] (use-main-state)
        [is-ready? set-is-ready!] (hooks/use-state false)

        route-change-callback (hooks/use-callback
                               [state]
                               (fn [match]
                                 (let [new-route (or match (not-found-route))
                                       old-route (:current-route state)
                                       old-path  @current-path]

                                   ;; Save scroll position for the page we're leaving
                                   (when old-path
                                     (swap! scroll-positions assoc old-path (.-scrollY js/window)))
                                   (reset! current-path (:path new-route))

                                   ;; The locale first: everything that renders reads it.
                                   (i18n/set-locale! (-> new-route :data :locale))
                                   (rfc/apply-controllers old-route new-route)
                                   (dispatch! [:enter-route! new-route])
                                   (set-title! new-route)

                                   ;; Scroll behaviour depends on navigation type. Held in
                                   ;; pending-scroll until the new content has rendered
                                   ;; (see flush-scroll!).
                                   (let [type @nav-type
                                         hash (not-empty (subs (.. js/location -hash) 1))
                                         saved (get @scroll-positions (:path new-route) 0)]
                                     (reset! nav-type :push) ;; reset for next navigation
                                     (reset! pending-scroll
                                             (cond
                                               ;; Back/forward → restore saved position
                                               (= type :pop) #(restore-scroll! saved)
                                               ;; Push (link click) → the #anchor, or top
                                               hash #(scroll-to-anchor! hash)
                                               :else #(.scrollTo js/window 0 0)))))))]

    (hooks/use-effect
     :once

     ;; Disable browser's automatic scroll restoration — we handle it
     (set! (.. js/history -scrollRestoration) "manual")

     ;; Detect browser back/forward *before* reitit's handler fires
     (let [on-pop (fn [_] (reset! nav-type :pop))]
       (.addEventListener js/window "popstate" on-pop)

       (rfe/start!
        (rf/router
         (routes)
         {})
        route-change-callback
        {:use-fragment false})

       (set-is-ready! true)

       ;; Cleanup
       (fn []
         (.removeEventListener js/window "popstate" on-pop))))

    (when is-ready?
      children)))
