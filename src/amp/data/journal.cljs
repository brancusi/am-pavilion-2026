(ns amp.data.journal
  "Journal post listings: what the index, the homepage teaser and the
   next-post links need. Post bodies live in amp.pages.blog.posts.* and are
   joined by slug in amp.pages.blog.registry, so this stays small enough to
   ship with the homepage. Titles, summaries and kind labels are in the
   journal catalog (resources/i18n/<locale>/journal.json, keys <slug>.title
   and <slug>.summary)."
  (:require [amp.i18n :as i18n :refer [t] :refer-macros [defcatalog]]))

(defcatalog "journal")

(def ^:private entries
  "Newest first. :kind is the filter tag (its label is kind.<kind>); :tone
   picks its pigment; :cover-ar is the cover's width / height, so its space
   is held before it loads."
  [{:slug        "this-fits-this"
    :date        "2026-11-13"
    :kind        "Studio"
    :tone        :turquoise
    :cover-image "https://media.armenianpavilion.org/journal/26-10-25/conversation.jpg"
    :cover-ar    1.7778}

   {:slug        "the-weight-of-the-flag"
    :date        "2026-11-05"
    :kind        "Venice"
    :tone        :red
    :cover-image "https://media.armenianpavilion.org/journal/26-11-05/scuola-grande.jpg"
    :cover-ar    1.7778}

   {:slug        "seven-steps-to-heaven"
    :date        "2026-10-30"
    :kind        "Process"
    :tone        :turquoise
    :cover-image "https://media.armenianpavilion.org/journal/26-10-30/seven-steps-into-tesa-41.jpg"
    :cover-ar    1.7778}

   {:slug        "making-a-flag"
    :date        "2026-10-28"
    :kind        "Studio"
    :tone        :red
    :cover-image "https://media.armenianpavilion.org/press/444786d448"
    :cover-ar    1.7778}

   {:slug        "carrying"
    :date        "2026-10-22"
    :kind        "Venice"
    :tone        :blue
    :cover-image "https://media.armenianpavilion.org/journal/26-10-22/arsenale-gate.jpg"
    :cover-ar    1.7778}

   {:slug        "carried-by-hand"
    :date        "2026-09-03"
    :kind        "Venice"
    :tone        :blue
    :cover-image "https://media.armenianpavilion.org/journal/26-09-03-filmic/bridge-steps.jpg"
    :cover-ar    1.7778}

   {:slug        "the-studio-play-balance"
    :date        "2026-03-15"
    :kind        "Process"
    :tone        :red
    :cover-image "https://media.armenianpavilion.org/media/26/03/15/the_studio0493.jpg"
    :cover-ar    0.6667}

   {:slug        "blue-yellow-maquette"
    :date        "2026-02-14"
    :kind        "Maquette"
    :tone        :turquoise
    :cover-image "https://media.armenianpavilion.org/photos/02-13-26/foam_00117198.jpg"
    :cover-ar    1.7778}])

(defn localize
  "A listing with its text in the current locale."
  [{:keys [slug kind] :as p}]
  (assoc p
         :title (t (keyword "journal" (str slug ".title")))
         :summary (t (keyword "journal" (str slug ".summary")))
         :kind-label (t (keyword "journal" (str "kind." kind)))
         :author (t :journal/author)))

(defn posts
  "Every listing, newest first, in the current locale. Call it while
   rendering (the locale is read then)."
  []
  (mapv localize entries))

(defn kind-label [kind]
  (t (keyword "journal" (str "kind." kind))))

(defn display-date
  "\"2026-03-15\" → \"15 Mar 2026\" (in the current locale)."
  [iso]
  (i18n/date iso {:day "numeric" :month "short" :year "numeric"}))
