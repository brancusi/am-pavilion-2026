(ns amp.pages.blog.posts.carried-by-hand
  "Blog post: Carried by Hand — logistics in Venice, a summer away, and the
   return to production."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :refer [picture]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]))

(def ^:private media "https://media.armenianpavilion.org/journal/26-09-03-filmic/")

(defn- figure
  "One captioned still, in the post's reading measure."
  [{:keys [src ar caption credit]}]
  (d/figure {:class "ap-figure"}
            (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                   ($ picture {:src (str media src) :alt caption
                               :sizes "(min-width: 720px) 680px, 100vw"}))
            (d/figcaption {:class "ap-tomb"}
                          (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                          (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}} credit))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"}
        "There is a gesture most of us never think about. You pick something up, you put it "
        "in the back of a car, you close the door, and some time later it is somewhere else. "
        "Venice has spent this year teaching us how much that gesture hides.")

   (d/p "Running a pavilion at the Biennale is, in large part, a problem of moving things. "
        "Plaster, pigment, timber, foam, tools, crates of finished work: everything the studio "
        "uses has to arrive at Tesa 41, at the far end of the Arsenale, and almost nothing "
        "arrives the way it would anywhere else.")

   (d/h2 "A city without a back seat")

   (d/p "There are no streets here in the sense we mean. There are canals, and there are "
        "bridges, and a bridge is a staircase. A courier van stops at Piazzale Roma or "
        "Tronchetto, and from there every parcel continues by boat, by hand, or by both. "
        "Pallets come up the canals and are lifted ashore by crane. Everything else goes on "
        "a hand truck, one box at a time, up one side of a bridge and down the other, and "
        "then again at the next one.")

   (figure {:src "crane-boat.jpg" :ar 1.7778
            :caption "Crates landed on the Arsenale quay, the crane still at work"
            :credit "Venice, 2026"})

   (d/p "A delivery that would take an afternoon in Los Angeles becomes a small expedition. "
        "It needs a time window, a person on the dock, a call to the right office, the right "
        "boat at the right tide. A missed handover is not an inconvenience; it is another day. "
        "We have learned the names of the bridges between the vaporetto stop and our door the "
        "way you learn the stops on a commute, by how many steps each one has.")

   (figure {:src "campo.jpg" :ar 1.7778
            :caption "Across a campo with the morning's boxes"
            :credit "Venice, September 2026"})

   (d/h2 "A meditation on gravity")

   (d/p "What has surprised us is how instructive this is. The car, the truck, the forklift "
        "have made weight almost abstract. We stopped feeling what things weigh because we "
        "stopped carrying them. Venice gives it back. Every object has to be lifted by "
        "someone, held by someone, set down by someone. You start to think about a sculpture "
        "not only as a form but as a load: how many hands it needs, how it turns on a narrow "
        "stair, where it can rest.")

   (d/p "The city is ancient, and it is stubborn about it. It does not make room for the "
        "conveniences we take for granted, and so it slows everything down to the speed of a "
        "body. In that sense Venice is less an obstacle than a teacher. It is a long, daily "
        "meditation on gravity.")

   (figure {:src "calle-stairs.jpg" :ar 1.7778
            :caption "Down a narrow calle, sharing the stairs"
            :credit "Venice, September 2026"})


   (d/h2 "A summer away")

   (d/p "We also owe our visitors an honest account of the summer. Visa requirements meant "
        "that Zadik and Aram had to travel to Armenia to put the proper paperwork in place. "
        "The process took most of July and August, and while we were away the pavilion was "
        "not able to do what it set out to do: to be a working studio, producing work in "
        "public. That was a real loss for us, and we know for some of you who came by "
        "expecting to see the studio in motion.")

   (d/h2 "Back to work")

   (d/p "The good news is that we are back. Since the first of September the studio has been "
        "returning to full production: the tools are running again, materials are arriving, "
        "and the blocks are being cast, finished and arranged at Tesa 41.")

   (figure {:src "unloading.jpg" :ar 1.7778
            :caption "Materials arriving again at Tesa 41, the last few metres by trolley"
            :credit "Venice, 2026"})

   (d/p "And the summer has left us with an idea. All year we have carried things to the "
        "work. We have begun to wonder what it would mean to carry the work itself: to take "
        "it out of the pavilion and into the city, by hand, over the same bridges, at the "
        "same pace. We will say more about that soon.")

   (d/p (d/em "For now, the studio is open again, Tuesday to Sunday. Come and see it working."))))
