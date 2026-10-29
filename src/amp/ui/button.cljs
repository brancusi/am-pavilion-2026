(ns amp.ui.button
  "Legacy button API on the design-system Button (`ap-btn`). `color` :slate
   gives the quiet ghost button; anything else the ink one."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(defnc main-button
  [{:keys [title
           on-click
           size
           color
           additional-classes
           children]}]
  (d/button {:class (str "ap-btn ap-btn--ghost "
                         (case size
                           (:xs :sm) "!min-h-0 !py-2 !px-3 !text-[11px] "
                           "")
                         (when (= color :slate) "!border-rule-strong ")
                         additional-classes)
             :on-click on-click}
            (or children title)
            (when title
              (d/span {:aria-hidden true} "↓"))))
