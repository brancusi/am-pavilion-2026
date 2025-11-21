(ns amp.components.fragments.about-me
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(defnc about-event
  []
  (d/div {:class "flex
                  justify-center
                  flex-col
                  "}
         (d/div {:class "text-slate-800
                         bg-white/50
                         backdrop-blur-md
                         p-8"}
                (d/div
                 {:class "flex flex-col"}
                 (d/p {:class "text-2xl 
                       lg:text-4xl 
                       mb-4"}
                      "THE STUDIO")
                 (d/p {:class "text-md lg:text-xl mb-4"}
                      "The Armenian Pavilion at the 2026 Venice Biennale becomes Zadik Zadikian’s living, breathing studio.")
                 (d/p {:class "text-md lg:text-xl mb-4"}
                      "Every day, a team fabricates simple units of plaster and pigment.")
                 (d/p {:class "text-md lg:text-xl mb-4"}
                      "Structures rise, fall, and rise again — walls, pyramids, horizons.")
                 (d/p {:class "text-md lg:text-xl"}
                      "Nothing is fixed. Nothing is final.")
                 (d/p {:class "text-md lg:text-xl"}
                      "The cycle of work is the work itself.")))
         #_(d/div {:class "flex justify-between
                         items-center
                         mt-1
                         px-8
                         py-4
                         bg-black/20
                         text-white
                         backdrop-blur-md
                         "}
                  (d/div {:class ""}
                         (d/p "THE STUDIO will open from May 10 to November 23, 2026"))
                  (d/div {:class "flex justify-end"}
                         (d/button {:class "text-2xl
                                          bg-red-600 p-4
                                          whitespace-nowrap"
                                    :style {:font-family "'Fira Code', monospace"}}
                                   "Learn More →")))))