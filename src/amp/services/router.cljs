(ns amp.services.router
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.state.provider :refer [use-main-state]]
            [helix.hooks :as hooks]
            [reitit.frontend :as rf]
            [amp.utils.lazy-loading :refer-macros [lazy-component]]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]))

(defn log-fn [& params]
  (fn [_]
    (apply js/console.log params)))

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
                :title "Blog"
                :view (lazy-component amp.pages.blog.page/blog-view)}

               {:id ::press
                :path "press"
                :title "Press"
                :view (lazy-component amp.pages.press.page/press-view)}

               {:id ::budget
                :path "budget"
                :title "Budget"
                :view (lazy-component amp.pages.budget.page/budget-view)}

               {:id ::mockups
                :path "mockups"
                :title "Mockups"
                :hide-footer? true
                :view (lazy-component amp.pages.mockup.page/mockup-view)}])

(defn routes
  []
  (into ["/"
         [""
          {:name :home
           :view (lazy-component amp.pages.landing.page/landing-view)
           :controllers [{:start (log-fn "start" "landing controller")
                          :stop (log-fn "stop" "landing controller")}]}]]
        (map (fn [{:keys [id path view hide-footer?]}]
               [path
                {:name id
                 :view view
                 :hide-footer? hide-footer?
                 :controllers [{:start (log-fn (str "start!!!" id))
                                :stop (log-fn (str "stop!!!" id))}]}])
             site-map)))

(comment

  (routes)

  ;;Keep from folding
  )

(defnc router
  [{:keys [children]}]

  (let [[state dispatch!] (use-main-state)
        [is-ready? set-is-ready!] (hooks/use-state false)

        route-change-callback (hooks/use-callback
                               [state]
                               (fn [new-route]
                                 (js/console.log new-route)
                                 (let [old-route (:current-route state)]
                                   (rfc/apply-controllers old-route new-route))
                                 (dispatch! [:enter-route! new-route])))]

    (hooks/use-effect
     :once

     (rfe/start!
      (rf/router
       (routes)
       {:data {:controllers [{:start (log-fn "start" "root-controller")
                              :stop (log-fn "stop" "root controller")}]}})
      route-change-callback
      {:use-fragment false})

     (set-is-ready! true))

    (when is-ready?
      children)))
