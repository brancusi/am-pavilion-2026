(ns amp.ui.post-card
  "Journal post card (design system: PostCard), shared by the homepage
   teaser and the journal index."
  (:require [amp.data.journal :as journal]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.picture :refer [picture]]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(defnc post-card
  "`feature?` gives the wide lead-story treatment used at the top of the index."
  [{:keys [slug title date kind tone summary cover-image feature? heading]}]
  (let [h (if (= heading :h2) "h2" "h3")]
    (d/a {:class (str "ap-card" (when feature? " ap-card--feature ap-posts__feature"))
          :href (str "/blog/" slug)}
         (d/div {:class "ap-card__media"}
                ($ picture {:src cover-image
                            :ar (/ 4 3)
                            :alt ""
                            :eager? feature?
                            :sizes (if feature? "(min-width: 720px) 50vw, 100vw" "(min-width: 720px) 33vw, 100vw")})
                (when kind
                  (d/span {:class (str "ap-tag ap-card__kind ap-tag--" (name (or tone :red)))} kind)))
         (d/div {:class "flex flex-col gap-3"}
                (d/div {:class "ap-card__meta"} (d/span (journal/display-date date)))
                ($ h {:class "ap-card__title"} title)
                (d/p {:class (str "ap-card__excerpt" (when-not feature? " line-clamp-3"))} summary)
                (when feature? (d/span {:class "ap-link ap-body-s self-start"} "Read the post"))))))
