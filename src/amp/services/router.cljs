(ns amp.services.router
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.state.provider :refer [use-main-state]]
            [helix.hooks :as hooks]
            [reitit.frontend :as rf]
            [amp.pages.not-found :refer [not-found-view]]
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

(def site-map [{:id ::venue
                :path "visit"
                :title "Visit"
                :view (lazy-component amp.pages.venue.page/venue-view)}

               {:id ::artist
                :path "artist"
                :title "Artist"
                :view (lazy-component amp.pages.artist.page/artist-view)}

               {:id ::blog
                :path "blog"
                :title "Journal"
                :view (lazy-component amp.pages.blog.page/blog-view)}

               {:id ::press
                :path "press"
                :title "Press"
                :view (lazy-component amp.pages.press.page/press-view)}

               {:id ::delivery
                :path "delivery"
                :title "Consegne"
                :view (lazy-component amp.pages.delivery.page/delivery-view)}

               {:id ::story
                :path "armenian-as-well"
                :title "Armenian as well: Zadikian and Shafrazi"
                :view (lazy-component amp.pages.story.page/story-view)}

               {:id ::portage
                :path "portage"
                :title "Portage"
                :view (lazy-component amp.pages.portage.page/portage-view)}

               {:id ::water-taxi
                :path "route-from-hotel-gabrielli"
                :title "Water Taxi"
                :view (lazy-component amp.pages.water-taxi.page/water-taxi-view)}])

(defn routes
  []
  (into ["/"
         [""
          {:name :home
           :view (lazy-component amp.pages.landing.page/landing-view)}]]
        (mapcat (fn [{:keys [id path view title]}]
                  (let [route-data {:name id
                                    :view view
                                    :title title}]
                    (case id
                      ;; Blog gets two routes: index + slug-parameterized post
                      ::blog [[path route-data]
                              [(str path "/:slug")
                               (assoc route-data :name ::blog-post)]]
                      ;; Portage: the home sheet + one route per sheet
                      ::portage [[path route-data]
                                 [(str path "/:sheet")
                                  (assoc route-data :name ::portage-sheet)]]
                      [[path route-data]])))
                site-map)))

(comment

  (routes)

  ;;Keep from folding
  )

(def ^:private site-title "Armenia Pavilion — Zadik Zadikian: The Studio · Biennale Arte 2026")

(defn- not-found-route
  "A match-shaped value for paths with no route."
  []
  {:path (.. js/location -pathname)
   :data {:name ::not-found :view not-found-view :title "Page not found"}})

(defn- set-title!
  "Page title: \"<Page> · Armenia Pavilion\", the full site title at home.
   Blog posts set their own once their content has loaded."
  [route]
  (set! (.-title js/document)
        (if-let [t (-> route :data :title)]
          (str t " · Armenia Pavilion")
          site-title)))

(defn- scroll-to-anchor!
  "Scroll to element `id`, retrying for a moment while a lazy page loads."
  [id]
  (let [tries (atom 0)]
    ((fn attempt []
       (if-let [el (.getElementById js/document id)]
         (do (.scrollIntoView el #js {:block "start"})
             ;; The outgoing page fades out over 0.4s and images above the
             ;; anchor may still change the layout: settle once more.
             (js/setTimeout #(.scrollIntoView el #js {:block "start"}) 500))
         (when (< (swap! tries inc) 40)
           (js/setTimeout attempt 50)))))))

(defnc router
  [{:keys [children]}]

  (let [[state dispatch!] (use-main-state)
        [is-ready? set-is-ready!] (hooks/use-state false)

        route-change-callback (hooks/use-callback
                               [state]
                               (fn [match]
                                 (let [new-route (or match (not-found-route))
                                       old-route (:current-route state)
                                       old-path  (:path old-route)]

                                   ;; Save scroll position for the page we're leaving
                                   (when old-path
                                     (swap! scroll-positions assoc old-path (.-scrollY js/window)))

                                   (rfc/apply-controllers old-route new-route)
                                   (dispatch! [:enter-route! new-route])
                                   (set-title! new-route)

                                   ;; Scroll behaviour depends on navigation type
                                   (let [type @nav-type]
                                     (reset! nav-type :push) ;; reset for next navigation
                                     (if (= type :pop)
                                       ;; Back/forward → restore saved position (after view renders)
                                       (let [saved (get @scroll-positions (:path new-route) 0)]
                                         (js/requestAnimationFrame
                                          #(.scrollTo js/window 0 saved)))
                                       ;; Push (link click) → top, or to the #anchor
                                       ;; once the page has rendered it.
                                       (if-let [id (not-empty (subs (.. js/location -hash) 1))]
                                         (scroll-to-anchor! id)
                                         (.scrollTo js/window 0 0)))))))]

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
