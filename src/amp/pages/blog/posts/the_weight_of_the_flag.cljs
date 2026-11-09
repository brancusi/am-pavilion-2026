(ns amp.pages.blog.posts.the-weight-of-the-flag
  "Blog post: The Weight of the Flag — the first walk, 5 November 2026: three
   units, green, white and red, carried from San Francesco della Vigna to
   Zanipolo; how one carried unit (amp.pages.blog.posts.carrying) became
   three; and the plan for the walks (scripts/walks/plan.json, /walks).
   Stills are frames of the graded film (amp.data.films); quotes are from its
   captions and the day's recorders."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "MwHUHhUaOUvc97m01QmU6JBaf1ctSXWoz00s9dI302zEUo")

(def ^:private journal (str media-host "journal/"))

(def ^:private credit "Still from The Weight of the Flag · Castello, 5 November 2026")

(def ^:private day-credit
  "Stills from the camera originals, graded (blackbox, filmic)."
  "Castello, 5 November 2026")

(def ^:private on-the-way
  "Between the stops: landscape frames from the camera originals
   (26-11-05-orig) and the film (26-11-05)."
  (let [slide (fn [file caption] {:img-src (str journal "26-11-05/" file ".jpg") :aspect-ratio 1.7778
                                  :caption caption :credit credit})]
    [{:img-src (str journal "26-11-05-orig/campo-crossing.jpg") :aspect-ratio 1.7778
      :caption "Red and white crossing a campo" :credit day-credit}
     (slide "garden" "Green, white and red under the pines")
     (slide "portico" "Through a sottoportego")
     (slide "low-red" "Under a stone arch")
     (slide "green-low" "Against a white church front")
     (slide "bridge" "Over a canal bridge, single file")
     (slide "basilica" "Set down by the Basilica of Santi Giovanni e Paolo")]))

(def ^:private schedule
  "The walks as planned on 5 November: [date works route]."
  [["Thu 5 Nov" "3" "San Francesco della Vigna, Zanipolo, Santa Maria Formosa"]
   ["Fri 6 Nov" "6" "The Arsenale gate to the Giardini"]
   ["Sun 8 Nov" "6" "Along the Riva to San Marco"]
   ["Mon 16 Nov" "12" "Rialto by the salizade"]
   ["Tue 17 Nov" "12" "Fondamente Nove to the Ca’ d’Oro"]
   ["Wed 18 Nov" "3–6" "Walking the work to the Accademia di Belle Arti"]
   ["Thu 19 Nov" "12" "Misericordia, the Orto and the Ghetto"]
   ["Fri 20 Nov" "12" "San Polo and the Frari"]
   ["Sat 21 Nov" "12" "Santa Margherita, the Salute and the Dogana"]
   ["Sun 22 Nov" "12" "Closing day: Via Garibaldi to Sant’Elena"]])

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
  "The Weight of the Flag: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        poster (mux-poster film-id {:w 1600 :time 32})
        still (d/img {:src poster :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "The Weight of the Flag"
                                     :fallback still :poster poster})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label "Play The Weight of the Flag"
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    "The Weight of the Flag, 2:52. Castello, 5 November 2026")
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    "Sound on; captions in the player menu")))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"}
        "At twenty to three on Thursday 5 November three people left Tesa 41 with the "
        "Italian flag on their backs: one green unit, one white, one red, each strapped to "
        "a frame. They walked to San Francesco della Vigna, on to the great campo of Santi "
        "Giovanni e Paolo, Zanipolo to Venetians, then to Santa Maria Formosa, and home "
        "another way. About two and a half kilometres, an hour and a quarter. It was the "
        "first of the walks.")

   (figure {:file "26-11-05-orig/vigna-campo" :ar 1.7778 :by day-credit
            :caption "Setting out: three units across a campo in Castello"})

   (d/h2 "From one to three")

   (d/p "Two weeks earlier, on 22 October, a single red unit had gone out the same door "
        "on Aram Zadikian’s back. We wrote about that afternoon in "
        (d/a {:href "/blog/carrying"} "Carrying")
        ". It was a test: of the frame, of the straps, of the wind on the quay, and of "
        "what Venice would make of it. Even then the talk on the way was of more. "
        "“At least six,” Aram said. Zadik agreed.")

   (d/p "Three is the smallest number that makes a flag. One red unit on a back is a "
        "form in the street; green, white and red walking side by side is something "
        "everybody recognises before they have really looked. The flag the studio "
        (d/a {:href "/blog/making-a-flag"} "built in Tesa 41")
        " stands on its own feet. On 5 November it walked on other people’s.")

   (d/p "Those people were students of the Accademia di Belle Arti di Venezia, the "
        "city’s academy of fine arts. When a passer-by asked who was carrying, Zadik "
        "pointed: "
        (d/em "“They’re over there, the students.")
        (d/em " They’re helping me, from the Venice Academy of Arts.”"))

   (figure {:file "26-11-05-orig/church-front" :ar 1.7778 :by day-credit
            :caption "Set down before a church door"})

   (d/h2 "The first walk")

   (d/p "The route went by the wide ways, rive, fondamente and campi, where three tall "
        "forms can pass and be set down without blocking anyone. At each stop the "
        "carriers stood in a row, and the city did "
        "what cities do: it looked.")

   ($ film)

   (d/p "The film keeps some of what was said. Introducing the work to people in a "
        "campo: "
        (d/em "“This is the Armenian Pavilion, and the Armenian artist is right here, and "
              "he created a tribute to the country of Italy, which is their flag.”")
        " Someone answered: "
        (d/em "“Thank you for the tribute.”")
        " And, a moment later: "
        (d/em "“Thank you for what your people have been doing through history, because "
              "that’s very important.”"))

   (figure {:file "26-11-05-orig/zanipolo-colleoni" :ar 1.7778 :by day-credit
            :caption "In Campo Santi Giovanni e Paolo, under Verrocchio’s Colleoni"})

   (figure {:file "26-11-05/zanipolo-wide" :ar 1.7778
            :caption "Campo Santi Giovanni e Paolo, before the Scuola Grande di San Marco"})

   (d/p "Another passer-by found the words we had been looking for: "
        (d/em "“It’s a travelling flag.”")
        " Zadik: "
        (d/em "“It’s a journey. We are taking a journey in Venice.”"))

   ($ fit-gallery {:slides on-the-way :inset? true})

   (d/p "And heads turned, all afternoon. "
        (d/em "“We are turning people’s heads around,”")
        " Zadik said. "
        (d/em "“Anytime they see it, they’re just looking: what the hell is this?”")
        " And later, sitting down: "
        (d/em "“We’re sitting in this historic square. We’re making history again.”"))

   (d/h2 "The plan: out and back, every few days")

   (d/p "The walks go on until the Biennale closes. Each one leaves Tesa 41 by the "
        "door on the Fondamenta Case Nuove, follows a different route out, sets the works "
        "down in two or three places, and comes home another way. The number of works "
        "grows: three on the first day, six on the next walks, then twelve. On 18 November "
        "students of the Accademia walk them to the Accademia itself, one work on each student’s back, into "
        "the Academy’s own courtyard, for an hour with its professors and students. "
        "The last walk is on the closing day.")

   (d/ul
    (for [[date works route] schedule]
      (d/li {:key date} (d/strong date) (str " · " works " works · " route))))

   (d/p "This is the plan as it stood on 5 November. Routes and times may still move: "
        "the up-to-date schedule, the map of every route and the photographs of each walk "
        "are on the "
        (d/a {:href "/walks"} "Walks")
        " page. Anyone may walk alongside: meet at the door of Tesa 41 ten minutes before "
        "the time.")

   (figure {:file "26-11-05/backlit-campo" :ar 1.7778
            :caption "Late sun in a campo"})

   (d/h2 "The weight of it")

   (d/p "The weight is not only in the units. It is in the carrying: in "
        "kilometres of stone underfoot, in being looked "
        "at, and in carrying another country’s colours through its own city, as guests. "
        "One unit was a test. Three is a flag. Twelve, we hope, will be something else "
        "again.")

   (figure {:file "26-11-05-orig/three-in-a-row" :ar 1.7778 :by day-credit
            :caption "Three in a row"})

   (d/p (d/em "The next walk leaves Tesa 41 tomorrow, with six. Come and walk with us."))))
