(ns amp.pages.landing.works
  "The home page's works gallery (\"The units, assembled\"): the works as
   installed, the first maquettes and renders, the drawings and renderings,
   then the studio at work. :aspect-ratio is each image's own (width /
   height), so nothing is cropped; :img-src is a path on the media host.

   The press entries are images from the press set (resources/data/press,
   sections pavilion, renderings and process) under press/<uid>; titles and
   credits follow the press captions. Process shots already in On the bench
   are left out.")

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

(def ^:private installed
  "Installation views in Tesa 41, and one work in the Los Angeles studio."
  [{:img-src "press/488ef42b59" :aspect-ratio 1.5
    :caption "Who’s Afraid of Red, Yellow, and Blue? Remembering Barnett Newman!" :credit "Installation view · 2026"
    :alt "Red, yellow and blue panels on a white wall in the brick hall, each crossed by a leaning pole of another colour."}
   {:img-src "press/e3f1da5d21" :aspect-ratio 2.172
    :caption "The Studio" :credit "Installation view · 2026"
    :alt "The hall of Tesa 41: a long red block on the floor and the red, yellow and blue panels on a white wall beyond."}
   {:img-src "press/05bb6e78bc" :aspect-ratio 0.75
    :caption "Who’s Afraid of Red, Yellow, and Blue? Remembering Barnett Newman!" :credit "Installation view · 2026"
    :alt "The red, yellow and blue panels from the side, their leaning poles casting shadows on the white wall."}
   {:img-src "press/c29e5dffe9" :aspect-ratio 1.5
    :caption "Big Red Bed Where Dreams Come True" :credit "Installation view · 2026"
    :alt "A long red block on dark feet, small blue and yellow units stepped on its top, before a white wall in the brick hall."}
   {:img-src "press/a4f1411376" :aspect-ratio 1.627
    :caption "Big Red Bed Where Dreams Come True" :credit "Installation view · 2026"
    :alt "The long red block seen corner-on, its pigmented top stepped with blue and yellow units."}
   {:img-src "press/e1b45df3f9" :aspect-ratio 0.831
    :caption "Untitled (large pink block with green, yellow and red units)" :credit "Los Angeles · 2026"
    :alt "Zadik Zadikian sets small yellow and green units on top of a large pink cube."}
   {:img-src "press/2dca28bc4a" :aspect-ratio 1.512
    :caption "Untitled (pink block with green, yellow and pink units)" :credit "Installation view · 2026"
    :alt "A large pink block with small green, yellow and pink units on top, against a white wall in the brick hall."}])

(def ^:private drawn
  "Drawings, studies and renderings, work by work."
  [{:img-src "press/f169adfcb7" :aspect-ratio 0.558
    :caption "Big Red Bed" :credit "Rendering · 2026"
    :alt "Rendering: the red block with its stepped units on a stone quay over a canal, Venetian buildings behind."}
   {:img-src "press/3af3c2fa5f" :aspect-ratio 0.747
    :caption "The Studio" :credit "Rendering · 2026"
    :alt "Rendering from above of the hall, coloured blocks and stacks spread across the floor among visitors."}
   {:img-src "press/b0b6fdec92" :aspect-ratio 0.747
    :caption "Italian Flags" :credit "Rendering · 2026"
    :alt "Rendering: three tall blades, green, white and red, standing in a grass field under a blue sky."}
   {:img-src "press/f64bf7f0b6" :aspect-ratio 0.558
    :caption "Italian Flags" :credit "Rendering · 2026"
    :alt "Rendering: the green, white and red blades on the crest of a hill, seen edge-on."}
   {:img-src "press/d55d66ba78" :aspect-ratio 0.806
    :caption "Armenian Flag Stack" :credit "Drawing · 2026"
    :alt "Marker drawing of an interlocking stack of red, blue and orange units, with notes on the dimensions."}
   {:img-src "press/f35e171351" :aspect-ratio 1.778
    :caption "Armenian Flag Stack" :credit "Rendering · 2026"
    :alt "Rendering: a tall interlocking stack of red, blue and orange units on a plain ground."}
   {:img-src "press/06087305db" :aspect-ratio 1.491
    :caption "Armenian Flag Stack" :credit "Rendering, Yerevan · 2026"
    :alt "Rendering: the interlocking stack standing on the lawn of Republic Square, Yerevan."}
   {:img-src "press/9a6527c5e6" :aspect-ratio 0.671
    :caption "Armenian Flag Stack" :credit "Rendering, Yerevan · 2026"
    :alt "Rendering: the interlocking stack in Republic Square, Yerevan, seen upright against the sky."}
   {:img-src "press/88efa5c0f4" :aspect-ratio 1.491
    :caption "Armenian Flag Stack" :credit "Rendering, Yerevan · 2026"
    :alt "Rendering: the interlocking stack among the buildings of Republic Square, Yerevan, traffic passing."}
   {:img-src "press/f272623d8e" :aspect-ratio 0.747
    :caption "7 Steps to Heaven" :credit "Drawing · 2026"
    :alt "Pen and pencil drawing of a seven-step stair set into a corner, with dimensions and a small figure for scale."}
   {:img-src "press/7aa979a667" :aspect-ratio 1.491
    :caption "7 Steps to Heaven" :credit "Rendering, Tesa 41 · 2026"
    :alt "Rendering: a white seven-step stair against white walls in the brick hall, three-quarter view."}
   {:img-src "press/6720f32e7a" :aspect-ratio 1.491
    :caption "7 Steps to Heaven" :credit "Rendering, Tesa 41 · 2026"
    :alt "Rendering: the white stair from the front, rising against a white wall to nowhere."}
   {:img-src "press/827f88dbc0" :aspect-ratio 0.747
    :caption "Leaning Slab Between Blocks" :credit "Study · 2026"
    :alt "Line sketch of a slab leaning between two blocks on a base, with dimensions."}
   {:img-src "press/bf3353f55a" :aspect-ratio 1.491
    :caption "Leaning Slab Between Blocks" :credit "Rendering, Tesa 41 · 2026"
    :alt "Rendering: a yellow slab leaning between a low red block and a blue block on a white plinth."}
   {:img-src "press/6d50531860" :aspect-ratio 1.491
    :caption "Leaning Slab Between Blocks" :credit "Rendering, Tesa 41 · 2026"
    :alt "Rendering: the yellow slab between red and blue blocks, seen side-on along the wall of the hall."}
   {:img-src "press/13725fa570" :aspect-ratio 1.491
    :caption "Leaning Slab Between Blocks" :credit "Rendering, Tesa 41 · 2026"
    :alt "Rendering from above: the red block, leaning yellow slab and blue block on their white plinth."}
   {:img-src "press/f29f48089f" :aspect-ratio 1.778
    :caption "Study Reconfigurable Modular Configuration" :credit "Rendering · 2026"
    :alt "Rendering: a tall red slab rising from white blocks on a green base."}
   {:img-src "press/05d81f0f74" :aspect-ratio 1.778
    :caption "Study Reconfigurable Modular Configuration" :credit "Rendering · 2026"
    :alt "Rendering: the red slab, white blocks and green base in front elevation."}
   {:img-src "press/6c0a6a5afc" :aspect-ratio 1.778
    :caption "Sketch Leaning Plane Modular Blocks" :credit "Rendering · 2026"
    :alt "Rendering: two red planes leaning across white blocks on a red base."}
   {:img-src "press/44ad05c943" :aspect-ratio 1.491
    :caption "Green Slab and Leaning Beam" :credit "Rendering · 2026"
    :alt "Rendering: a green slab with a wooden beam leaning against it, before a white wall in the brick hall, a figure for scale."}
   {:img-src "press/e584a0d978" :aspect-ratio 1.778
    :caption "Structural Study Stacked Rectilinear Modules" :credit "Rendering · 2026"
    :alt "Rendering: black and white modules stacked into an upright figure, front view."}
   {:img-src "press/1b232048c8" :aspect-ratio 1.778
    :caption "Structural Study Stacked Rectilinear Modules" :credit "Rendering · 2026"
    :alt "Rendering: the black and white stacked modules, three-quarter view."}])

(def ^:private making
  "The studio at work."
  [{:img-src "press/a4383d9f8e" :aspect-ratio 1.5
    :caption "Pigmented plaster unit" :credit "In the studio · 2025"
    :alt "A pigmented plaster unit."}
   {:img-src "press/c51b00e769" :aspect-ratio 1.5
    :caption "Plaster unit in its mold" :credit "In the studio · 2025"
    :alt "A plaster unit in its mold."}
   {:img-src "press/eff02ea41a" :aspect-ratio 1.5
    :caption "White units on the workbench" :credit "In the studio · 2026"
    :alt "White units on the workbench."}
   {:img-src "press/8a84f0295c" :aspect-ratio 1.778
    :caption "Colour palettes on the workbench" :credit "In the studio · 2026"
    :alt "Colour palettes laid out on the workbench."}
   {:img-src "press/444786d448" :aspect-ratio 1.778
    :caption "The Italian flag in the studio" :credit "In the studio · 2026"
    :alt "The Italian flag in green, white and red, in the studio."}
   {:img-src "press/cf203e22ed" :aspect-ratio 1.778
    :caption "Carrying a section of the Italian flag" :credit "In the studio · 2026"
    :alt "Zadik Zadikian and an assistant carrying a red section of the Italian flag."}
   {:img-src "press/58b122556e" :aspect-ratio 1.778
    :caption "Assembling the Italian flag" :credit "In the studio · 2026"
    :alt "Zadik Zadikian and an assistant assembling the Italian flag."}
   {:img-src "press/4061cedbde" :aspect-ratio 1.778
    :caption "Assembling the Italian flag" :credit "In the studio · 2026"
    :alt "Zadik Zadikian and an assistant assembling the Italian flag."}
   {:img-src "press/82c998897e" :aspect-ratio 1.778
    :caption "Setting up the Italian flag" :credit "In the studio · 2026"
    :alt "Setting the Italian flag on its feet in the studio."}
   {:img-src "press/70dd92afbf" :aspect-ratio 1.778
    :caption "The Italian flag, front view" :credit "In the studio · 2026"
    :alt "The Italian flag in the studio, front view."}
   {:img-src "press/b6052edd36" :aspect-ratio 1.778
    :caption "The Italian flag, its feet" :credit "In the studio · 2026"
    :alt "Detail of the Italian flag, showing the coloured feet the sections stand on."}
   {:img-src "press/41bc72df87" :aspect-ratio 1.778
    :caption "Adjusting the Italian flag" :credit "In the studio · 2026"
    :alt "Adjusting a section of the Italian flag in the studio."}
   {:img-src "press/8b3ff68d3c" :aspect-ratio 1.778
    :caption "Zadik Zadikian with the Italian flag" :credit "In the studio · 2026"
    :alt "Zadik Zadikian in front of the Italian flag in the studio."}
   {:img-src "press/2c3807ad70" :aspect-ratio 1.778
    :caption "Italian flag unit on the workbench" :credit "In the studio · 2026"
    :alt "A single unit painted in the three colours of the Italian flag, among coloured units on the workbench."}
   {:img-src "press/bc12377c2d" :aspect-ratio 1.778
    :caption "Works in the studio" :credit "In the studio · 2026"
    :alt "Works in the studio, including a stepped pink and teal stack and a small Italian flag."}
   {:img-src "press/8a0cadcb1a" :aspect-ratio 1.778
    :caption "Painting the red" :credit "In the studio · 2026"
    :alt "Painting the red of the Italian flag in the studio."}
   {:img-src "press/78e5577dff" :aspect-ratio 1.778
    :caption "Tony Shafrazi with the colour palettes" :credit "In the studio · 2026"
    :alt "Tony Shafrazi looking at colour palettes in the studio."}
   {:img-src "press/4b6de7dfcc" :aspect-ratio 1.778
    :caption "Palettes in their sleeves" :credit "In the studio · 2026"
    :alt "Colour palettes standing in their sleeves, inscribed Jasper Johns."}
   {:img-src "press/cc3071f65e" :aspect-ratio 1.778
    :caption "Colour palettes" :credit "In the studio · 2026"
    :alt "Colour palettes on the workbench."}
   {:img-src "press/250cb528da" :aspect-ratio 1.778
    :caption "Working on a palette sleeve" :credit "In the studio · 2026"
    :alt "Working on a white palette sleeve at the workbench."}])

(def slides
  "Every slide, in order."
  (into [] cat [installed curated drawn making]))
