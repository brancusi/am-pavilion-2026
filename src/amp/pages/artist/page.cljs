(ns amp.pages.artist.page
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.styles :as s]
            [helix.dom :as d]))

(defnc artist-view
  [_props]
  (d/div {:class (s/cx "min-h-screen flex flex-col items-center justify-center px-4"
                       s/text-primary)}
         (d/div {:class "max-w-2xl w-full text-center"}
                (d/p {:class (s/cx s/eyebrow s/text-faint "mb-6")}
                     "Deep Dive")
                (d/h1 {:class (s/cx s/heading-display "mb-8")}
                      "Artist")
                (d/p {:class (s/cx s/body-lg s/text-secondary)}
                     "A closer look at Sadik Kwaish Alfraji — coming soon."))))
