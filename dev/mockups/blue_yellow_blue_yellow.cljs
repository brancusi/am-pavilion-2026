(ns mockups.blue-yellow-blue-yellow
  (:require
   [amp.services.firebase :refer [set-edn]]))

(comment

  ;; Original data pulled from Firebase "mockup-002"
  ;; Modify and evaluate the set-edn call below to push changes.

  (set-edn "blue-yellow-blue-yellow-002"
           {:name "Blue Yellow Blue Yellow"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [36 36 48]
                    :layers [[{:color "#FFE15D"
                               :align :tl
                               :dims [4 4 6]}
                              {:color "#faafe9"
                               :align :tr
                               :dims [4 4 6]}
                              {:color "#F16095"
                               :align :bl
                               :dims [4 4 6]}
                              {:color "white"
                               :align :br
                               :dims [4 4 6]}]]}
                   {:layers [[{:color "#00F6DE"
                               :align :tl
                               :dims [36 36 48]}]]}
                   {:layers [[{:color "#faafe9"
                               :align :tl
                               :dims [36 6 12]}]]}
                   {:layers [[{:color "#F16095"
                               :align :tr
                               :dims [12 6 12]}]]}
                   {:layers [[{:color "#FFE15D"
                               :align :tr
                               :dims [4 4 4]}]]}]})

  (set-edn "blue-yellow-blue-yellow-003"
           {:name "Blue Pink Red Yellow - Confirmed«"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [36 36 48]
                    :layers [[{:color "#FFE15D"
                               :align :tl
                               :dims [4 4 6]}
                              {:color "#faafe9"
                               :align :tr
                               :dims [4 4 6]}
                              {:color "#F16095"
                               :align :bl
                               :dims [4 4 6]}
                              {:color "white"
                               :align :br
                               :dims [4 4 6]}]]}
                   {:layers [[{:color "#00F6DE"
                               :align :tl
                               :dims [36 36 48]}]]}
                   {:layers [[{:color "#faafe9"
                               :align :tl
                               :dims [36 6 12]}]]}
                   {:layers [[{:color "#F16095"
                               :align :tr
                               :dims [12 6 12]}]]}
                   {:layers [[{:color "#FFE15D"
                               :align :tr
                               :dims [4 4 4]}]]}]})

  ;; end comment
  )
