(ns amp.pages.artist.escape
  "The escape story — narrative section about Zadikian's journey out of
   the Soviet Union."
  (:require
   [amp.ui.section-header :refer [section-header]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; TODO: Replace stub text with final escape narrative

(defnc escape-section
  [{:keys [id]}]
  (d/div {:id id}
         ($ section-header {:eyebrow "origins" :title "The Escape"}
            (d/div {:class "mt-6 px-4"}
                   (d/p {:class (s/cx s/body-lg "mb-6")}
                        "In the early 1970s, at the height of the Cold War, a young "
                        (d/span {:class s/em-strong} "Zadik Zadikian")
                        " made the decision that would define the rest of his life: "
                        "to leave Soviet Armenia. The borders were sealed, emigration all "
                        "but impossible, and the penalties for attempting it severe. Yet "
                        "the pull of artistic freedom\u2014the chance to work without "
                        "ideological constraint\u2014proved stronger than fear.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "The journey was perilous, crossing through countries and relying on "
                        "networks of sympathizers and fellow dissidents. Zadikian carried "
                        "almost nothing\u2014a few sketches, the clothes on his back, and an "
                        "unshakeable conviction that sculpture was worth risking everything for. "
                        "The details of the crossing remain partially obscured, as much by the "
                        "passage of time as by the deliberate silence that protected those who "
                        "helped him.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "Arriving first in Europe and eventually reaching "
                        (d/span {:class s/em-strong} "San Francisco")
                        ", Zadikian found himself in a city teeming with artistic reinvention. "
                        "It was here that he encountered "
                        (d/span {:class s/em-strong} "Benjamino Bufano")
                        ", the Italian-American sculptor whose monumental public works and "
                        "pacifist convictions resonated deeply with the young Armenian exile. "
                        "Under Bufano\u2019s mentorship, Zadikian learned not only technique but "
                        "a philosophy of art as civic presence\u2014sculpture that belongs to everyone.")

                   (d/p {:class (s/cx s/body-base "mb-6")}
                        "The escape from the Soviet Union was not merely a biographical event; "
                        "it became the foundational metaphor of Zadikian\u2019s practice. The "
                        "block\u2014the basic unit of construction and of confinement\u2014carries "
                        "within it the memory of walls that constrain and walls that shelter. "
                        "Every sculpture he builds is, in some sense, an act of rebuilding: "
                        "taking the elemental unit of architecture and reassembling it into "
                        "something free.")

                   (d/blockquote
                    {:class "border-l-2 border-white/20 dark:border-white/20 pl-6 my-8"}
                    (d/p {:class (s/cx s/body-base "italic")}
                         "\u201CThe block remembers two things\u2014the wall it was taken "
                         "from and the wall it will become.\u201D")
                    (d/cite {:class (s/cx "block mt-3 not-italic" s/label-muted)}
                            "\u2014 Zadik Zadikian"))))))
