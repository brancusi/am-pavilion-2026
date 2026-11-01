(ns amp.pages.landing.works
  "The home page's works gallery (\"The units, assembled\"). The slides kept
   here (the first maquettes, renders and the 3D model) sit among the press
   set's images, which come from Caption Genius (amp.hooks.use-press-home):
   an image added there and synced shows here with no new build.
   :aspect-ratio is each image's own (width / height), so nothing is
   cropped; :img-src is a path on the media host.")

(def ^:private big-red-model
  "Interactive Big Red: the stack-formation data for amp.ui.threejs-slide."
  {:camera     {:position [250 250 250] :target [10 60 0]}
   :scene-data {:lighting [[:ambient-light {:intensity 0.7}]
                           [:directional-light {:cast-shadow true :position [-100 120 60] :intensity 1.5}]]
                :data [{:bounds [144 36 72]
                        :layers [[{:align :tr :color "#1ebe3a" :dims [9 6 9]}
                                  {:align :tl :color "#0b080c" :dims [24 6 12]}
                                  {:align :br :color "#0b080c" :dims [36 6 12]}
                                  {:align :bl :color "#ec9c3b" :dims [6 6 12]}]
                                 [{:dims [144 36 72] :color "#ef3548"}]
                                 [{:dims [36 9 36] :align :tr :color "#0070df"}]
                                 [{:dims [18 9 18] :align :tr :color "#f1afed"}]
                                 [{:dims [9 4.5 9] :align :tr :color "#0b080c"}]
                                 [{:dims [4.5 9 4.5] :align :tr :color "#ec9c3b"}]]}]}})

(def ^:private curated
  "The first works shown: maquettes, renders and the 3D model."
  [{:img-src "blue_yellow/top_view.jpg" :aspect-ratio 0.75
    :caption "Blue Yellow Blue Yellow" :credit "Maquette · 2026"
    :alt "A turquoise and yellow plaster unit seen from above, casting a long blue shadow"}
   {:img-src "big_red/master.jpg" :aspect-ratio 1.778
    :caption "The Big Red" :credit "Render · 2026"
    :alt "A long red plaster block on black feet, with smaller blue and pink units on top"}
   {:img-src "artwork/1.jpeg" :aspect-ratio 0.75
    :caption "Leaning Red" :credit "Pigmented plaster · 2026"
    :alt "A tall red slab leaning against a wall beside a narrow green unit"}
   (merge {:type :threejs :aspect-ratio 0.75
           :caption "The Big Red" :credit "Interactive 3D"}
          big-red-model)
   {:img-src "big_red_walkway/5.jpg" :aspect-ratio 1.791
    :caption "The Big Red at the Arsenale" :credit "Render · 2026"
    :alt "The Big Red on the quay beside the canal at the Arsenale gate, with a wooden footbridge"}
   {:img-src "blue_yellow/side-2.jpg" :aspect-ratio 0.75
    :caption "Blue Yellow Blue Yellow" :credit "Render · 2026"
    :alt "A turquoise unit topped with yellow, its shadow falling across a pale floor"}
   {:img-src "blue_yellow/cu-2.jpg" :aspect-ratio 0.75
    :caption "Blue Yellow Blue Yellow" :credit "Detail · 2026"
    :alt "Close view of turquoise and yellow plaster faces meeting at a corner"}
   {:img-src "big_red/low_side.jpg" :aspect-ratio 1.778
    :caption "The Big Red" :credit "Render · 2026"
    :alt "The Big Red from a low angle, with blue, pink and black units stepped on its top"}
   {:img-src "photos/blue_unit_with_hand.jpg" :aspect-ratio 1.5
    :caption "Blue Block" :credit "Los Angeles · 2026"
    :alt "A hand resting on a single blue plaster unit"}
   {:img-src "big_red/corner_low.jpg" :aspect-ratio 0.75
    :caption "The Big Red" :credit "Render · 2026"
    :alt "The Big Red seen corner-on, its stepped units rising to a small yellow block"}
   {:img-src "big_red/black_leg.jpg" :aspect-ratio 0.75
    :caption "The Big Red" :credit "Detail · 2026"
    :alt "Close view of a black foot and a green foot under the red block"}
   {:img-src "big_red/flag.jpg" :aspect-ratio 1.383
    :caption "The Big Red" :credit "Render · 2026"
    :alt "The Big Red from above, its shadow stretched across a pale floor"}])

(defn- slide
  "A press image (amp.hooks.use-press-home) as a gallery slide."
  [{:keys [uid w h title line alt]}]
  {:img-src (str "press/" uid) :aspect-ratio (/ w h)
   :caption title :credit line :alt alt})

(defn slides
  "Every slide, in order: the works installed, the slides above, then the
   drawings and renderings, then the studio at work. `press` is the press
   set's gallery images (:home \"works\"), in the project's order."
  [press]
  (let [in (fn [section] (into [] (comp (filter #(= (:section %) section)) (map slide)) press))]
    (into [] cat [(in "pavilion") curated (in "renderings") (in "process")])))
