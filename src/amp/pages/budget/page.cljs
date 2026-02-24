(ns amp.pages.budget.page
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.pages.budget.section :refer [budget-section]]
            [helix.core :refer [$]]
            ["gsap" :refer [gsap]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc budget-view
  [{:keys [active
           intro-complete-callback
           outro-complete-callback]
    :as params}]

  (let [comp-ref (hooks/use-ref "comp-ref")]
    (hooks/use-layout-effect
     [active]
     (if active
       (intro-complete-callback)
       (.to gsap
            @comp-ref
            #js{:opacity 0
                :onComplete outro-complete-callback
                :duration 1})))

    (d/div {:ref comp-ref}
           #_(d/p {:class "text-5xl  "} (str "active " active))
           ($ budget-section))))