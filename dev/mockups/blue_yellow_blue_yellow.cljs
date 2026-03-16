(ns mockups.blue-yellow-blue-yellow
  (:require
   [amp.services.firebase :refer [set-edn]]))

(comment

  ;; Original data pulled from Firebase "mockup-002"
  ;; Modify and evaluate the set-edn call below to push changes.

  (set-edn "blue-yellow-blue-yellow"
           {:name "Blue Yellow Blue Yellow"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [36 36 48]
                    :layers [[{:color "yellow"
                               :align :tl
                               :dims [4 4 6]}
                              {:color "yellow"
                               :align :tr
                               :dims [4 4 6]}
                              {:color "yellow"
                               :align :bl
                               :dims [4 4 6]}
                              {:color "yellow"
                               :align :br
                               :dims [4 4 6]}]]}
                   {:layers [[{:color "turquoise"
                               :align :tl
                               :dims [36 36 48]}]]}
                   {:layers [[{:color "yellow"
                               :align :tl
                               :dims [36 6 12]}]]}
                   {:layers [[{:color "turquoise"
                               :align :tl
                               :dims [12 6 12]}]]}
                   {:layers [[{:color "yellow"
                               :align :tl
                               :dims [4 4 4]}]]}]})

  ;; end comment
  )
