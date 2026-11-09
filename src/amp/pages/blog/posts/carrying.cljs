(ns amp.pages.blog.posts.carrying
  "Blog post: Carrying — one red unit on a back frame, 22 October 2026: the
   first time a work left Tesa 41 on someone's back. Stills are frames of the
   graded Carrying film (amp.data.films); quotes are from its captions and the
   day's recorders. Followed by the-weight-of-the-flag."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "El6mWAaeWtIxqHERgu7fYE00pcLH7szuH8EG16lbn7CE")

(def ^:private journal (str media-host "journal/"))

(def ^:private credit "Still from Carrying · Venice, 22 October 2026")

(def ^:private day-credit
  "Stills from the camera originals, graded (blackbox, filmic)."
  "Venice, 22 October 2026")

(def ^:private out-and-about
  "Through the Arsenale and Castello: the landscape frames, from the camera
   originals (26-10-22-orig) and the film (26-10-22)."
  (let [slide (fn [file caption cr] {:img-src (str journal file ".jpg") :aspect-ratio 1.7778
                                     :caption caption :credit cr})]
    [(slide "26-10-22-orig/along-the-wall" "Along the Arsenale wall, Zadik Zadikian alongside" day-credit)
     (slide "26-10-22-orig/campo-facing" "Stopping in a campo in Castello" day-credit)
     (slide "26-10-22-orig/calle-with-zadik" "Down to the water" day-credit)
     (slide "26-10-22/bridge" "Over the wooden bridge by the Arsenale towers" credit)
     (slide "26-10-22/calle" "Down a calle; heads turn" credit)
     (slide "26-10-22/fondamenta" "Along a fondamenta" credit)
     (slide "26-10-22/bridge-low" "Crossing back at golden hour" credit)]))

(defn- figure
  "One captioned still, in the post's reading measure. `ar` is width /
   height, so the frame holds its space before it loads."
  [{:keys [file ar caption by]}]
  (d/figure {:class "ap-figure"}
            (d/div {:class "ap-figure__frame" :style #js {"--ar" (str ar)}}
                   ($ picture {:src (str journal file ".jpg") :alt caption
                               :sizes "(min-width: 720px) 680px, 100vw"}))
            (d/figcaption {:class "ap-tomb"}
                          (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}} caption)
                          (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}} (or by credit)))))

(defnc film
  "The Carrying film: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        poster (mux-poster film-id {:w 1600 :time 47})
        still (d/img {:src poster :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "Carrying"
                                     :fallback still :poster poster})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label "Play Carrying"
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    "Carrying, 2:04. The Arsenale and Castello, 22 October 2026")
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    "Sound on; captions in the player menu")))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"}
        "On the afternoon of 22 October one red unit left Tesa 41 on somebody’s back. "
        "It was strapped to a hiking frame with black webbing, and Aram Zadikian carried it "
        "out of the studio, along the quay, through the gate of the Arsenale and into the "
        "streets of Castello, with Zadik Zadikian walking beside him.")

   (d/p "It was a test, and a simple one: can a work from the pavilion be carried through "
        "Venice the way everything else in Venice is carried? It turned out to be the "
        "beginning of something larger.")

   (figure {:file "26-10-22-orig/tesa-41-fitted" :ar 1.7778 :by day-credit
            :caption "Aram Zadikian in Tesa 41 with the unit on his back, before setting out"})

   (d/h2 "Fitting the frame")

   (d/p "The unit is one of the studio’s plain forms: a tall red block, stepped at the "
        "shoulders, with a band of green at its foot. It is light enough for one person and "
        "big enough that the person all but disappears behind it. The afternoon began on "
        "the studio floor, tightening straps, kneeling to take the weight, standing up, "
        "walking a lap of the hall and adjusting again. The frame had had its first try in "
        "the hall eleven days before.")

   (figure {:file "26-10-22-orig/first-fitting" :ar 1.7778 :by "Tesa 41, 11 October 2026"
            :caption "11 October: a first try of the back frame"})

   (figure {:file "26-10-22-orig/strapping" :ar 1.7778 :by day-credit
            :caption "Zadik Zadikian checks the frame by the door of Tesa 41"})

   (d/p "Then the door, and the quay, and the water.")

   (figure {:file "26-10-22-orig/arsenale-quay" :ar 1.7778 :by day-credit
            :caption "On the quay in front of the old boat sheds of the Arsenale"})

   (d/h2 "Everything by hand, or by boat")

   (d/p "The studio has spent the year learning what this city does to logistics; we "
        "wrote about it in "
        (d/a {:href "/blog/carried-by-hand"} "Carried by Hand")
        ". Carrying a work through it on purpose turned that problem into the subject. "
        "As Aram puts it in the film:")

   (d/blockquote
    (d/p "You don’t realise it until you can’t throw something in the back of your car or "
         "a truck and haul it to your destination. So everything has to be carried by hand, "
         "by boat."))

   (d/p "Zadik has always made work that goes out into the world: site-specific pieces, "
        "work set down outdoors, work taken out of the studio. This was the same impulse, "
        "with something new in it: the act of carrying weight. And the weight is not only "
        "the unit’s. Representing a country at the Biennale has a weight of its own; that "
        "day Aram called it “this cross you’re kind of bearing”.")

   ($ fit-gallery {:slides out-and-about :inset? true})

   (d/h2 "Form, colour, that’s it")

   (d/p "What surprised us was the street. A block of colour on someone’s back is about "
        "as basic a thing as you could carry, and yet nobody walks through Venice with "
        "anything like it. People stopped, turned, asked. “You don’t see something like "
        "this, of this scale, being carried around town,” Aram says. “How do you cut "
        "through with such a basic thing? Form, colour, that’s it.”")

   (d/p "Zadik saw it from the other side:")

   (d/blockquote
    (d/p "It’s coming from a certain tradition, carrying. And yet in Venice it makes "
         "total sense, because there is no other way."))

   (figure {:file "26-10-22/portrait" :ar 1.7778
            :caption "Aram Zadikian in a campo in Castello, the unit on his back"})

   (d/p "There was the wind, too. On the open quay a tall flat form becomes a sail, and "
        "the carrier learns quickly not to stand square to it. Somebody has to walk close "
        "by as a stabiliser. The film keeps that moment.")

   ($ film)

   (figure {:file "26-10-22/setting-down" :ar 1.7778
            :caption "Setting the unit down on the quay, Zadik Zadikian watching"})

   (d/h2 "One, for now")

   (d/p "One unit, one back, one afternoon. But the conversation on the way was already "
        "about more. "
        (d/em "“We want to do at least six,”")
        " Aram told someone who asked. "
        (d/em "“I have three more coming like this. It would be great if we had twenty.”")
        " Zadik agreed: six at least. Come out with six, he said, and there is no doubt "
        "what you are looking at.")

   (d/p "The studio had been "
        (d/a {:href "/blog/making-a-flag"} "building a flag in the hall")
        ", green, white and red, from the same kind of units, standing on its own feet. "
        "Units that can be carried one at a time can also be carried together. A flag "
        "could walk.")

   (figure {:file "26-10-22/back-in-tesa-41" :ar 1.7778
            :caption "Back in Tesa 41: Zadik and Aram Zadikian after the walk"})

   (d/p "Zadik, at the end of the day, on a year of learning a new city: "
        (d/em "“Now maybe we learn some things. Let it go, have fun. Then it becomes very "
              "beautiful.”"))

   (d/p (d/em "Two weeks later, three units went out together. That walk is "
              (d/a {:href "/blog/the-weight-of-the-flag"} "The Weight of the Flag")
              "."))))
