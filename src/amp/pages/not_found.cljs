(ns amp.pages.not-found
  "Shown for any path the router doesn't know (old links, typos). Small
   enough to ship with the main bundle."
  (:require [amp.i18n :as i18n :refer [t]]
            [amp.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(defnc not-found-view []
  (d/div {:class "ap-wrap py-24 lg:py-40 flex flex-col gap-6 items-start min-h-[60vh]"}
         (d/p {:class "ap-label ap-muted m-0"} (t :site/nf-label))
         (d/h1 {:class "ap-display-l"} (t :site/nf-title))
         (d/p {:class "ap-lede m-0 max-w-[40ch]"} (t :site/nf-lede))
         (d/div {:class "flex flex-wrap gap-2"}
                (d/a {:class "ap-btn" :href (i18n/href "/")} (t :site/nf-home))
                (d/a {:class "ap-btn ap-btn--ghost" :href (i18n/href "/visit")} (t :site/nf-visit)))))
