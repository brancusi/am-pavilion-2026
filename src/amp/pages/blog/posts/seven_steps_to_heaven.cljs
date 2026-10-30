(ns amp.pages.blog.posts.seven-steps-to-heaven
  "Blog post: The Making of Seven Steps to Heaven — from a pen sketch to a
   stair in Tesa 41. Drawings and renderings are from the Folio work
   (seven_steps_to_heaven: sources/, v9/presentation, v9/tesa); stills and
   quotes are from the film in amp.data.films (its burned-in subtitles)."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "uyEyjNf6mZ0200wJrP00QxFkarX00VubNrfhXaY00QnYqemM")

(def ^:private journal (str media-host "journal/26-10-30/"))

;; Each gallery keeps to one orientation: in the reading measure, mixing
;; portrait and landscape frames leaves the landscapes short.

(def ^:private views
  "Version 9, the presentation views: eight cameras around one model."
  (let [credit "Rendering · Zadik Zadikian"
        slide (fn [file caption] {:img-src (str journal "seven-steps-" file ".png")
                                  :aspect-ratio 1.7778 :caption caption :credit credit})]
    [(slide "front" "Front: seven steps against the corner")
     (slide "front-left" "Three-quarter front, from the left")
     (slide "right-side" "Right side, up the stair")
     (slide "high" "High three-quarter, looking down")
     (slide "plan" "Plan, from above: seven treads")
     (slide "side" "Side elevation: the stair in profile")
     (slide "back" "Three-quarter back: from behind, only the two walls")]))

(def ^:private in-the-room
  "Version 9 rendered into photographs of Tesa 41."
  (let [credit "Rendering · Zadik Zadikian"]
    [{:img-src (str journal "seven-steps-tesa-41-three-quarter.jpg") :aspect-ratio 1.4906
      :caption "Seven Steps to Heaven in Tesa 41, from the right. Rendering" :credit credit}
     {:img-src (str journal "seven-steps-tesa-41-straight-on.jpg") :aspect-ratio 1.4906
      :caption "Seven Steps to Heaven in Tesa 41, straight on. Rendering" :credit credit}]))

(defn- figure
  "One captioned image, in the post's reading measure: `key` is a press
   image's storage key, `src` any media URL. `ar` is width / height, so
   the frame holds its space before it loads."
  [{:keys [key src ar caption credit]}]
  (d/figure {:class "ap-figure"}
            (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                   ($ picture {:src (or src (str media-host key)) :alt caption
                               :sizes "(min-width: 720px) 680px, 100vw"}))
            (d/figcaption {:class "ap-tomb"}
                          (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                          (when credit
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}} credit)))))

(defnc film
  "The Seven Steps to Heaven film: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        still (d/img {:src (mux-poster film-id {:w 1600 :time 63}) :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "Seven Steps to Heaven"
                                     :fallback still
                                     :poster (mux-poster film-id {:w 1600 :time 63})})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label "Play Seven Steps to Heaven"
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    "Seven Steps to Heaven, 2:26. Arsenale and Tesa 41, October 2026")
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    "Sound on; subtitles are in the picture")))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"}
        "A stair is the most familiar thing in Venice. There are hundreds of bridges, and every "
        "one of them is a stair. This autumn the studio built one that goes nowhere: seven "
        "steps, set into the corner of two white walls, rising to a landing that leads to "
        "nothing but the wall above it.")

   (d/p "It is called "
        (d/em "Seven Steps to Heaven")
        ". Standing in front of it in Tesa 41, one of the team put the idea in a sentence: "
        (d/em "“I think that the ultimate point of a sculpture like this is that, being devoid "
              "of points of reference, you fill it with yourself.”"))

   (d/h2 "A drawing with a question on it")

   (d/p "It began as a pen drawing. A corner, two walls ten feet high, a floor ten feet by "
        "eight, and inside it a stair of seven steps, each twelve inches high and thirty-six "
        "inches wide, climbing to seven feet. Three feet of wall are left above the top step. "
        "Under the title, a note in pencil asks the question that the next months would keep "
        "asking: "
        (d/em "check how high is each step?"))

   (figure {:src (str journal "seven-steps-sketch.jpg") :ar 0.75
            :caption "7 Steps to Heaven. Pen and pencil sketch, with dimensions"
            :credit "Zadik Zadikian"})

   (d/p "The drawing has a history. A notebook page from the summer is full of steps cut into "
        "blocks: stairs sunk into a cube, stairs climbing between two volumes. At the bottom, "
        "a note to Aram: "
        (d/em "“let us see what AI can come up with, inspired and related to these drawings.”")
        " The stair against the wall came out of that conversation between hand drawings and "
        "the computer.")

   (figure {:src (str journal "seven-steps-notebook.jpg") :ar 0.75
            :caption "Notebook page: steps cut into blocks, with a note to Aram"
            :credit "Zadik Zadikian"})

   (d/h2 "Rise and run")

   (d/p "A stair is two numbers: how high each step rises and how far each tread runs. Change "
        "them and the same seven steps become steep and urgent or low and ceremonial. The "
        "studio modelled the work nine times, and tested ten proportions of rise to run, from "
        "shallow to almost a ladder, before settling the version shown here.")

   (d/p "Version nine was rendered from eight cameras placed around it. These are renderings, "
        "not photographs: they show the design, with a grey stair inside white walls.")

   (figure {:src (str journal "seven-steps-front-right.png") :ar 1.7778
            :caption "Seven Steps to Heaven, version 9, three-quarter front from the right. Rendering"
            :credit "Zadik Zadikian"})

   ($ fit-gallery {:slides views :inset? true})

   (d/p "Walk around it and it changes character. From the front it is a stair. From above it "
        "is seven bands. From behind there is no stair at all, only the outside of a corner.")

   (d/h2 "In the room")

   (d/p "Then the model was placed in the hall where it would be made. Rendered into "
        "photographs of Tesa 41, against the brick and the pilasters of the Arsenale, it "
        "becomes a piece of architecture: a room inside a room. Again, these are renderings, "
        "not the finished work.")

   ($ fit-gallery {:slides in-the-room :inset? true})

   (d/h2 "Carried by hand")

   (d/p "In October the drawing became an object. The pieces were carried along the water "
        "and through the doors of the Arsenale by hand, as everything is in Venice, then "
        "skimmed, sanded and painted white in the studio.")

   (figure {:src (str journal "seven-steps-on-the-quay.jpg") :ar 1.7778
            :caption "Carrying a section of the stair along the water"
            :credit "Arsenale, Venice, 2026. Still from the film"})

   (figure {:src (str journal "seven-steps-through-the-door.jpg") :ar 1.7778
            :caption "Through the door, one flight at a time"
            :credit "Arsenale, Venice, 2026. Still from the film"})

   (d/p "While they worked, the team talked about what they were making. "
        (d/em "“Humans are surrounded by cubes,”")
        " someone said. "
        (d/em "“I was thinking about the obsession of us, as humans, creating these shapes.”")
        " Another called it a "
        (d/em "viaggio")
        ", a trip: "
        (d/em "“There is a start, there is a finish, but the finish is not so clear.”"))

   (d/p "And another went further: "
        (d/em "“I think it’s like a life. You have a past, you have a story, you have a "
              "future, but you are in the present, and you know only the present.”"))

   (figure {:src (str journal "seven-steps-at-the-table.jpg") :ar 1.7778
            :caption "Zadik Zadikian and the team at the table, with the small models"
            :credit "Tesa 41, 2026. Still from the film"})

   ($ film)

   (d/h2 "Not taking you anywhere")

   (d/p "Zadik, a hand on the top step, put it most plainly: "
        (d/em "“These steps are not taking you anywhere, physically. It just takes you some "
              "place, mentally, or emotionally. It’s another form of function.”"))

   (d/p "The stair is chosen because everyone already knows it. "
        (d/em "“You see it everywhere, but in Venice you see it every second. Immediately you "
              "say: it’s a stair. There is familiarity. That familiarity is easy to accept. As "
              "if I know it: you feel comfortable.”")
        " The familiar form is the way in. What happens on the other side is up to the viewer.")

   (d/p "Which brings it back to scale. Seven steps fit inside a room ten feet wide, and yet: "
        (d/em "“It creates something that doesn’t materially exist, but that can be even bigger "
              "than the sculpture you’re seeing. Because I can see here the climb to heaven in "
              "a relatively small space, I can see something that is immensely large, that "
              "makes me feel immensely small.”"))

   (d/p (d/em "Seven Steps to Heaven is in the studio at Tesa 41. Stand at the bottom and "
              "look up."))))
