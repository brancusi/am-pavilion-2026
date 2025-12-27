(ns amp.services.router
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.providers.main-provider :refer [use-main-state]]
            [helix.hooks :as hooks]
            [reitit.frontend :as rf]
            [amp.utils.lazy-loading :refer-macros [lazy-component]]
            [reitit.frontend.controllers :as rfc]
            [reitit.frontend.easy :as rfe]))

(defn log-fn [& params]
  (fn [_]
    (apply js/console.log params)))

(def site-map [{:id ::budget
                :path "budget"
                :title "Budget"
                :view (lazy-component amp.views.budget-view/budget-view)}

               {:id ::form-labs
                :path "form-labs"
                :title "form-labs"
                :view (lazy-component amp.views.form-labs-view/form-labs-view)}])

(defn routes
  []
  (into ["/"
         [""
          {:name :home
           :view (lazy-component amp.views.landing-view/landing-view)
           :controllers [{:start (log-fn "start" "landing controller")
                          :stop (log-fn "stop" "landing controller")}]}]]
        (map (fn [{:keys [id path view]}]
               [path
                {:name id
                 :view view
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
