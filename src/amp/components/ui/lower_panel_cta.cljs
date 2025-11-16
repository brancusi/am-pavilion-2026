(ns amp.components.ui.lower-panel-cta
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.components.ui.main-button :refer [main-button]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc lower-panel-cta
  [{:keys [children
           on-click
           cta-title
           is-visible?]}]
  (d/div {:class (str "flex 
                       w-full
                       justify-between
                       items-center
                       mt-1
                       px-8
                       py-4
                       bg-black/20
                       text-white
                       backdrop-blur-md
                       transition-all
                       duration-500
                       ease-out
                       "
                      (if is-visible?
                        "translate-y-0 opacity-100"
                        "-translate-y-full opacity-0"))}
         (d/div
          (d/p
           {:class "text-md md:text-md font-fira-code"}
           "THE STUDIO will open from May 10 to November 23, 2026"))
         (d/div {:class "flex justify-end"}
                ($ main-button {:title cta-title
                                :additional-classes "text-2xl"
                                :on-click on-click})
                #_(d/button {:class "text-2xl
                                   bg-red-600
                                   p-4
                                   whitespace-nowrap"
                             :style {:font-family "'Fira Code', monospace"}}
                            cta-title))))