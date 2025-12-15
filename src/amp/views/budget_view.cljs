(ns amp.views.budget-view
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.reducers.requires]
            [amp.components.sections.budget-section :refer [budget-section]]
            [helix.core :refer [$]]
            ["gsap" :refer [gsap]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc budget-view
  [{:keys [active
           intro-complete-callback
           outro-complete-callback]}]

  (let [comp-ref (hooks/use-ref "comp-ref")]
    (hooks/use-effect
     [active]
     (if active
       (intro-complete-callback)
       (.to gsap
            @comp-ref
            #js{:opacity 0
                :onComplete outro-complete-callback
                :duration 1})))

    (d/div {:ref comp-ref}
           ($ budget-section))))