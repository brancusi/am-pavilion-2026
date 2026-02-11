(ns mockups.water-heater
  (:require
   [amp.views.mockup-view :refer [create-stack create-stack-v2 render-elements calculate-total-dimensions]]
   [amp.services.firebase :refer [listen-to-path listen-to-edn set-edn]]))

(comment

  (render-elements
   (create-stack [{:bounds [100 10 100]
                   :layers [[{:color "red"
                              :align :tl
                              :dims [49 10 50]
                              :layers [[{:color "red"
                                         :align :tl
                                         :dims [10 20 10]}]]}
                             {:color "red"
                              :align :tr
                              :dims [49 10 50]}]]}]))

  (set-edn "mockup-004" {:name "Water Heater"
                         :camera {:position [250 250 250]
                                  :target [10 60 0]}
                         :data [{:bounds [150 10 50]
                                 :layers [[{:bounds [50 0 50]
                                            :align :tr
                                            :layers [[{:align :tr
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :tl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :br
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :bl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}]]}
                                           {:bounds [50 0 50]
                                            :align :center
                                            :layers [[{:align :tr
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :tl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :br
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :bl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}]]}
                                           {:bounds [50 0 50]
                                            :align :tl
                                            :layers [[{:align :tr
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :tl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :br
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :bl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}]]}]
                                          [{:color "#3b1a19"
                                            :align :tl
                                            :dims [50 50 50]}
                                           {:align :center
                                            :bounds [50 0 50]
                                            :layers (reduce (fn [acc cur]
                                                              (into acc [[{:color "#4e0c0a"
                                                                           :align :tr
                                                                           :dims [50 10 50]}]
                                                                         [{:color "#280609"
                                                                           :align :tr
                                                                           :dims [50 10 50]}]]))
                                                            []
                                                            (range 0 5))}
                                           {:color "#3b1a19"
                                            :align :tr
                                            :dims [50 50 50]}]]}]})

  (set-edn "mockup-005" {:name "Water Heater - 2"
                         :camera {:position [250 250 250]
                                  :target [10 60 0]}
                         :data [{:bounds [34.5 10 11.5]
                                 :layers [[{:bounds [11.5 0 11.5]
                                            :align :tr
                                            :layers [[{:align :tr
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :tl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :br
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :bl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}]]}
                                           {:bounds [11.5 0 11.5]
                                            :align :center
                                            :layers [[{:align :tr
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :tl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :br
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :bl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}]]}
                                           {:bounds [11.5 0 11.5]
                                            :align :tl
                                            :layers [[{:align :tr
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :tl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :br
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}
                                                      {:align :bl
                                                       :color "#5a130e"
                                                       :dims [5 5 5]}]]}]
                                          [{:color "#3b1a19"
                                            :align :tl
                                            :dims [11.5 27 11.5]}
                                           {:align :center
                                            :bounds [11.5 0 11.5]
                                            :layers (reduce (fn [acc cur]
                                                              (into acc [[{:color "#4e0c0a"
                                                                           :align :tr
                                                                           :dims [11.5 4.2 11.5]}]
                                                                         [{:color "#280609"
                                                                           :align :tr
                                                                           :dims [11.5 4.2 11.5]}]]))
                                                            []
                                                            (range 0 7))}
                                           {:color "#3b1a19"
                                            :align :tr
                                            :dims [11.5 27 11.5]}]]}]})

  (comment

    (into [] [[1] [2]])

    (reduce (fn [acc cur]
              (into acc [[{:color "green"
                           :align :tr
                           :dims [50 10 50]}]
                         [{:color "blue"
                           :align :tr
                           :dims [50 10 50]}]]))
            []
            (range 0 10))

    ;;Keep from folding
    )


  (let [feet-dims [2 2 4]]
    (set-edn "mockup-005"
             {:name "Water Heater - 2"
              :camera {:position [100 100 100]
                       :target [0 40 0]}
              :data [{:bounds [34.5 10 11.5]
                      :layers [[{:bounds [11.5 0 11.5]
                                 :align :tr
                                 :layers [[{:align :tr
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :tl
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :br
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :bl
                                            :color "#5a130e"
                                            :dims feet-dims}]]}
                                {:bounds [11.5 0 11.5]
                                 :align :center
                                 :layers [[{:align :tr
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :tl
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :br
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :bl
                                            :color "#5a130e"
                                            :dims feet-dims}]]}
                                {:bounds [11.5 0 11.5]
                                 :align :tl
                                 :layers [[{:align :tr
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :tl
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :br
                                            :color "#5a130e"
                                            :dims feet-dims}
                                           {:align :bl
                                            :color "#5a130e"
                                            :dims feet-dims}]]}]
                               [{:color "#3b1a19"
                                 :align :tl
                                 :dims [11.5 27 11.5]}
                                {:align :center
                                 :bounds [11.5 0 11.5]
                                 :layers (reduce (fn [acc cur]
                                                   (into acc [[{:color "#4e0c0a"
                                                                :align :tr
                                                                :dims [11.5 3 11.5]}]
                                                              [{:color "#280609"
                                                                :align :tr
                                                                :dims [11.5 3 11.5]}]]))
                                                 [[{:color "#4e0c0a"
                                                    :align :tr
                                                    :dims [11.5 3 11.5]}]]
                                                 (range 0 9))}
                                {:color "#3b1a19"
                                 :align :tr
                                 :dims [11.5 27 11.5]}]]}]}))

  (create-stack [{:bounds [100 10 100]
                  :layers [[{:color "white"
                             :align :tl
                             :dims [49 10 50]}]]}])

  (render-elements
   [:object
    {:position [0 0 -4]}
    [:ambient-light {:intensity 0.7}]
    [:directional-light {:cast-shadow true, :position [80 120 60], :intensity 1.5}]
    [:box {:position [0 -0.05 0], :receive-shadow true, :width 500, :height 0.1, :depth 500, :material {:color 15789286}}]
    [:box {:position [-25.5 5 -25], :cast-shadow true, :width 49, :height 10, :depth 50, :material {:color "red"}}]
    [:box {:position [-25.5 5 35], :cast-shadow true, :width 49, :height 10, :depth 50, :material {:color "red"}}]
    [:object {:position [0 0 0]}
     [:box {:width 10 :height 10 :depth 10}]]])



  ;;=> [:object
  ;;    {:position [0 0 -4]}
  ;;    [:ambient-light {:intensity 0.7}]
  ;;    [:directional-light {:cast-shadow true, :position [80 120 60], :intensity 1.5}]
  ;;    [:box {:position [0 -0.05 0], :receive-shadow true, :width 500, :height 0.1, :depth 500, :material {:color 15789286}}]
  ;;    [:box {:position [-25.5 5 -25], :cast-shadow true, :width 49, :height 10, :depth 50, :material {:color "white"}}]]
  ;;=> [:object
  ;;    {:position [0 0 -4]}
  ;;    [:ambient-light {:intensity 0.7}]
  ;;    [:directional-light {:cast-shadow true, :position [80 120 60], :intensity 1.5}]
  ;;    [:box {:position [0 -0.05 0], :receive-shadow true, :width 500, :height 0.1, :depth 500, :material {:color 15789286}}]]

  ;;Keep from folding
  )