(ns amp.components.ui.main-button
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(defnc main-button
  [{:keys [title
           on-click
           size
           bg-opacity
           additional-classes]}]
  (let [size-classes (case size
                       :xs "text-[8px] tracking-[0.15em] px-2 py-1 gap-1.5"
                       :sm "text-[9px] tracking-[0.2em] px-3 py-1.5 gap-2"
                       "text-[11px] tracking-[0.25em] px-6 py-3 gap-3")
        opacity-style (when bg-opacity {:backgroundColor (str "rgb(236 72 153 / " bg-opacity ")")})]
    (d/button {:class (str "group flex items-center
                            font-display font-semibold uppercase
                            text-pink-700 hover:text-pink-800 dark:text-pink-300/70 dark:hover:text-pink-300
                            border border-pink-600/30 hover:border-pink-600/50 dark:border-pink-500/20 dark:hover:border-pink-500/40
                            bg-pink-500/10 hover:bg-pink-500/15 dark:bg-pink-500/5 dark:hover:bg-pink-500/10
                            transition-colors duration-300 ease-in-out "
                           size-classes " "
                           additional-classes)
               :style opacity-style
               :on-click on-click}
              title
              (d/span {:class "text-pink-600/50 group-hover:text-pink-700 dark:text-pink-300/40 dark:group-hover:text-pink-300 transition-colors"} "↓"))))
