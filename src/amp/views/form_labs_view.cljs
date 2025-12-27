(ns amp.views.form-labs-view
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.reducers.requires]
            [amp.components.sections.form-labs-section :refer [form-labs-section]]
            [helix.core :refer [$]]
            ["gsap" :refer [gsap]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc form-labs-view
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
           ($ form-labs-section))))