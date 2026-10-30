(ns amp.pages.blog.posts.making-a-flag
  "Blog post: Making a Flag — why an Italian flag from the Armenian Pavilion.
   Images are the press set's (public/data/press), so captions match /press;
   the film is the one in amp.data.films."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture media-host mux-poster]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

(def ^:private film-id "CR1rPwf1QHVhvNMICOawghM2g5QnylGxbMs0201QQxlLM")

(def ^:private journal (str media-host "journal/26-10-30/"))

(def ^:private gubbio
  "Italian Flags, the proposal near Gubbio: renderings, from the Folio work."
  (let [credit "Rendering · Zadik Zadikian"]
    [{:img-src (str journal "gubbio-morning.jpg") :aspect-ratio 1.4906
      :caption "Italian Flags, morning, with Gubbio beyond" :credit credit}
     {:img-src (str journal "gubbio-storm.jpg") :aspect-ratio 2.3571
      :caption "Italian Flags, storm light on the crest" :credit credit}
     {:img-src (str journal "gubbio-last-light.jpg") :aspect-ratio 2.3571
      :caption "Italian Flags, the last light" :credit credit}]))

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
  "The Italian Flag film: a still until someone presses play."
  [_props]
  (let [[playing? set-playing!] (hooks/use-state false)
        still (d/img {:src (mux-poster film-id {:w 1600 :time 60}) :alt "" :loading "lazy"})]
    (d/figure {:class "ap-figure"}
              (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                     (if playing?
                       ($ lazy-film {:playback-id film-id :title "The Italian Flag"
                                     :fallback still
                                     :poster (mux-poster film-id {:w 1600 :time 60})})
                       (<>
                        still
                        (d/button {:class "ap-play" :aria-label "Play The Italian Flag"
                                   :on-mouse-enter #(.preload lazy-film)
                                   :on-click #(set-playing! true)}
                                  (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                          :fill "currentColor" :aria-hidden true}
                                         (d/path {:d "M4 2l10 6-10 6z"}))))))
              (d/figcaption {:class "ap-tomb"}
                            (d/span {:class "ap-tomb__title" :style #js {:gridColumn "1 / -1"}}
                                    "The Italian Flag, 2:57. Tesa 41, October 2026")
                            (d/span {:class "ap-tomb__credit" :style #js {:gridColumn "1 / -1"}}
                                    "Sound on; captions in the player menu")))))

(defnc post-content
  [_props]
  ;; A fragment, so the body's own spacing applies between the blocks.
  (<>
   (d/p {:class "ap-dropcap"}
        "This autumn the Armenian Pavilion made a flag. Not Armenia’s red, blue and "
        "apricot, but Italy’s green, white and red: painted by hand in Tesa 41, built "
        "from the same kind of units the studio works with all year, and stood up on its own feet.")

   (d/p "It raises an obvious question, and we asked it ourselves, on camera: "
        (d/em "is it a little strange that we’re making an Italian flag from the Armenian "
              "Pavilion?")
        " This post doesn’t settle that question. It lays out what we have found while "
        "living with it.")

   (figure {:key "press/0f7f296e78" :ar 1.7778
            :caption "Zadik Zadikian painting the green of the Italian flag"
            :credit "Tesa 41, 2026. Photo: Aram Zadikian"})

   (d/h2 "Things the mind already knows")

   (d/p "In 1954 Jasper Johns painted a flag. He later explained that his early subjects, "
        "flags, targets, numbers and maps, were “things the mind already knows”, and "
        "that using them “gives me room to work on other levels.” A flag is the purest "
        "case. Nobody has to design it, and everyone recognises it before they have really "
        "looked. That frees the artist to make the looking itself the subject.")

   (d/p "Johns kept returning to it: a white flag, a flag on an orange field, three flags "
        "stacked so that each steps toward you. The Metropolitan Museum puts the open "
        "question well. The flag may signify flatness; it may connote America, or the "
        "politics of the moment in which you stand before it; “or the flag may connote "
        "none of these things.”")

   (d/p "The studio’s flag comes from the same place and goes somewhere else. Johns made "
        "a painting that is also a flag. Here the flag is made of things: blocks of "
        "colour, the size of the body, which can be lifted, carried, taken apart "
        "and set up again. What Johns did with the eye, the studio does with weight.")

   (d/p "The studio has answered Johns more directly too. "
        (d/em "Jasper Johns’ American Flag")
        " is a study for three free-standing slabs, blue, white and red, with a star cut "
        "through all three, so that from one spot the stars line up. There are no stripes "
        "and no canton: just the three colours, stood up as sculpture, and a hole the shape "
        "of a star.")

   (figure {:src (str journal "american-flag-study.png") :ar 1.7778
            :caption "Jasper Johns’ American Flag, 2026. Study for three free-standing slabs with a star cut through all three. Rendering"
            :credit "Zadik Zadikian"})

   (figure {:key "press/8a0cadcb1a" :ar 1.7778
            :caption "Painting the red"
            :credit "Tesa 41, 2026. Photo: Aram Zadikian"})

   (d/h2 "Three colours, no fixed meaning")

   (d/p "The tricolour was first adopted as a flag by an Italian state, the Cispadane "
        "Republic, at Reggio Emilia on 7 January 1797. It was a new kind of sign: a "
        "people’s flag rather than a dynasty’s. And it is striking how little the state "
        "says about what it means. Italy gives its three colours no official meaning; the "
        "meanings have been supplied by poets, by families, by football crowds, by "
        "whoever happens to be holding it.")

   (d/p "That openness is part of what makes it workable as material. A flag is, in one "
        "description, “only a piece of cloth”, and yet people love it, mourn under it "
        "and cross the world for it. Zadik put it more simply, standing in front of the "
        "finished piece: "
        (d/em "“There are three colours, but loaded with message.”"))

   (figure {:key "press/4061cedbde" :ar 1.7778
            :caption "Zadik Zadikian and an assistant assembling the Italian flag"
            :credit "Tesa 41, 2026. Photo: Aram Zadikian"})

   (d/h2 "A song about a sewn flag")

   (d/p "There is an older thread between the two countries, and it runs through a flag. "
        "Armenia’s national anthem began as a poem by Mikayel Nalbandian, written in "
        "1859: the song of an Italian girl who sews a tricolour for her brother as he goes "
        "to fight for Italy. The anthem’s opening words are hers.")

   (d/p "She is a character in a poem, not a historical person, and Armenia chose its own "
        "flag in 1918 for its own reasons. We don’t want to make more of the link than "
        "it can carry. But it is hard not to notice: for more than a century Armenians have "
        "sung an Italian girl’s words about making a flag by hand, and now an Armenian "
        "studio in Venice is making her flag by hand.")

   (d/p "The studio has not left its own flag out. "
        (d/em "Armenian Flag Stack")
        " lays red, blue and apricot units in rings, each ring leaving a gap on every face, "
        "so that the stripes spiral upward in colour and in space. Armenia’s flag law gives "
        "its colours meanings that Italy’s never fixed: red for the Armenian Highland and "
        "the struggle to survive, blue for the will to live beneath peaceful skies, apricot "
        "for the creative, hard-working nature of the people.")

   (figure {:key "press/06087305db" :ar 1.4906
            :caption "Armenian Flag Stack, 2026. Pigmented plaster units. Rendering of the proposed work in Republic Square, Yerevan"
            :credit "Zadik Zadikian"})

   (d/p "Venice is the right place to notice it. The first book ever printed in Armenian "
        "was made here, in 1511 or 1512. Since 1717 the Mekhitarist monks of San Lazzaro "
        "have kept an Armenian monastery and library in the lagoon, and for two centuries "
        "they printed books there. "
        "Armenians have been guests in this city for a very long time, and it has been a "
        "generous host. If the flag is anything, it may be a greeting returned: between "
        "neighbours, or siblings, not a debt being paid.")

   ($ film)

   (d/h2 "A flag on its own feet")

   (d/p "Asked how he came to make it, Zadik didn’t reach for history at all. "
        (d/em "“It came to me very naturally,”")
        " he said. "
        (d/em "“It’s an extension of what I’m doing. You tune into simplicity, blocks of "
              "colour, and then it’s natural: where do you start from? You start from your "
              "roots, you start from your environment.”")
        " For a studio working inside the Arsenale, at the edge of a lagoon, under an "
        "Italian sky, the environment is Italy.")

   (d/p "And then there are the feet. "
        (d/em "“I wanted to put feet underneath, so that the piece will stand. The flag "
              "should have its own feet.”")
        " A flag usually needs a pole, a wall or a hand. This one stands up by itself, and "
        "because it is built from units it can also come apart. Push a block and the "
        "structure has already changed. Two people can carry a section. It is a national "
        "sign that is also, quite literally, a set of building blocks.")

   (figure {:key "press/8b3ff68d3c" :ar 1.7778
            :caption "Zadik Zadikian in front of the Italian flag in the studio"
            :credit "Tesa 41, 2026. Photo: Aram Zadikian"})

   (d/p "The studio has been thinking at other scales too. "
        (d/em "Italian Flags")
        " is a proposal for three folded slabs of pigmented cement, standing on a hillside "
        "near Gubbio, in Umbria: not raised on a pole but set into the land like a building. "
        "It exists so far as drawings and renderings; the images below are renderings, "
        "not photographs.")

   ($ fit-gallery {:slides gubbio :inset? true})

   (d/h2 "An open question")

   (d/p "So: why the Italian flag, from the Armenian Pavilion? We have several answers, "
        "and we hold all of them loosely.")

   (d/p "Because a flag is something the mind already knows, and that leaves room to work "
        "on other levels. Because Italy’s colours come without an official meaning, and "
        "can take the weight of a new one. Because an Armenian poem once imagined an "
        "Italian girl sewing this flag. Because Venice has been host to Armenians for five "
        "centuries. Because you start from your roots and your environment, and the "
        "studio’s environment, this year, is Italy.")

   (d/p "Or, as someone said in the studio one afternoon in September, remembering one of "
        "Johns’s flag paintings: "
        (d/em "“Is that a flag? Is that a flag?”"))

   (d/p (d/em "The Italian flag is in the studio at Tesa 41. Come and see it, and tell us "
              "what you think it is."))))
