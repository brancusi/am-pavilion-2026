(ns amp.components.ui.main-button
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(defnc main-button
  [{:keys [title
           on-click
           additional-classes]}]
  (d/button {:class (str "group flex items-center gap-3
                          font-mono text-[11px] font-bold uppercase tracking-[0.25em]
                          text-pink-300/70 hover:text-pink-300
                          border border-pink-500/20 hover:border-pink-500/40
                          bg-pink-500/5 hover:bg-pink-500/10
                          px-6 py-3
                          transition-colors duration-300 ease-in-out
                          "
                         additional-classes)
             :on-click on-click}
            title
            (d/span {:class "text-pink-300/40 group-hover:text-pink-300 transition-colors"} "↓")))
