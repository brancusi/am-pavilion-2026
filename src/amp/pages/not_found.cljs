(ns amp.pages.not-found
  "Shown for any path the router doesn't know (old links, typos). Small
   enough to ship with the main bundle."
  (:require [amp.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(defnc not-found-view []
  (d/div {:class "ap-wrap py-24 lg:py-40 flex flex-col gap-6 items-start min-h-[60vh]"}
         (d/p {:class "ap-label ap-muted m-0"} "404")
         (d/h1 {:class "ap-display-l"} "Page not found")
         (d/p {:class "ap-lede m-0 max-w-[40ch]"}
              "This page doesn’t exist, or it has moved.")
         (d/div {:class "flex flex-wrap gap-2"}
                (d/a {:class "ap-btn" :href "/"} "Home")
                (d/a {:class "ap-btn ap-btn--ghost" :href "/visit"} "Plan your visit"))))
