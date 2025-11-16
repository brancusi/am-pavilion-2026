(ns amp.components.ui.main-button
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   ["@heroicons/react/24/outline" :refer [ArrowUpRightIcon ArrowRightIcon]]))

(defnc main-button
  [{:keys [title
           on-click
           additional-classes]}]
  (d/button {:class (str "bg-red-600
                          rounded-[2px]
                          text-white
                          px-6
                          py-3
                          text-xl
                          font-fira-code
                          hover:bg-red-700
                          transition-colors
                          duration-300
                          ease-in-out
                          flex
                          items-center
                          gap-2
                          group "
                         additional-classes)
             :style {:font-family "'Fira Code', monospace"}
             :on-click on-click}
            title
            ($ ArrowRightIcon {:class "w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]"})))