(ns amp.data.walk-media
  "What the walks (amp.data.walks, generated) don't say: the film and
   photographs of each walk, the photograph at each stop, and each walk's
   status today. Shared by the Walks page and its home teaser. Films are
   silent loops on R2 at walks/films/<id>.mp4 (with <id>.jpg as poster),
   graded from the camera originals; photographs are R2 images (npm run media).
   Their titles and alt text are in the walks catalog
   (resources/i18n/<locale>/walks.json: loop.<id>, photo.<file name>.title
   and .alt, solo.*); the status labels and durations here are in the small
   walk-media catalog, since the home teaser uses them too."
  (:require [amp.data.walks :as data]
            [amp.i18n :as i18n :refer [t] :refer-macros [defcatalog]]
            [clojure.string :as str]))

(defcatalog "walk-media")

;; ── Media ───────────────────────────────────────────────────────────────

(def films
  "Silent loops from each walk, in the order they happened (titles: walks
   catalog, loop.<id>)."
  {"w01" [{:id "w01-follow"}
          {:id "w01-square"}
          {:id "w01-flag"}
          {:id "w01-calle"}
          {:id "w01-canal"}
          {:id "w01-campo"}
          {:id "w01-bridges"}]
   "w02" [{:id "w02-rehearse"}
          {:id "w02-door"}
          {:id "w02-letsgo"}
          {:id "w02-castello"}
          {:id "w02-cat"}
          {:id "w02-campo"}
          {:id "w02-narrow"}
          {:id "w02-bridge"}]})

(def photos
  "Photographs from each walk, with :ar (width / height) so the gallery holds
   their space. The 6 November set is the day's photographs (Dropbox
   the_studio/media/photo/2026/11/06); 5 November is stills from the film.
   Title and alt text: walks catalog, photo.<file name without extension>."
  {"w01" [{:path "walks/2026-11-05/portico.jpg" :ar 1.7778}
          {:path "walks/2026-11-05/church-front.jpg" :ar 1.7778}
          {:path "walks/2026-11-05/campo-canal.jpg" :ar 1.7778}
          {:path "walks/2026-11-05/fondamenta.jpg" :ar 1.7778}
          {:path "walks/2026-11-05/chapel.jpg" :ar 1.7778}
          {:path "walks/2026-11-05/single-file.jpg" :ar 1.7778}]
   "w02" [{:path "walks/2026-11-06/dsc07975.tif" :ar 1.5000}
          {:path "walks/2026-11-06/dsc08011.tif" :ar 1.5000}
          {:path "walks/2026-11-06/dsc08020.tif" :ar 1.5000}
          {:path "walks/2026-11-06/dsc08038.tif" :ar 2.1307}
          {:path "walks/2026-11-06/dsc08044.tif" :ar 3.0264}
          {:path "walks/2026-11-06/dsc08046.tif" :ar 2.0646}
          {:path "walks/2026-11-06/dsc08090.tif" :ar 2.3479}
          {:path "walks/2026-11-06/dsc08093.tif" :ar 1.9911}
          {:path "walks/2026-11-06/dsc08098.tif" :ar 0.8438}
          {:path "walks/2026-11-06/dsc08099.jpg" :ar 1.8694}
          {:path "walks/2026-11-06/dsc08135.tif" :ar 1.0390}
          {:path "walks/2026-11-06/dsc08205.tif" :ar 1.4999}]})

(def photographers
  "Who took each walk's photographs (as credited in the press set). Walks
   without an entry show film stills."
  {"w02" "Mina Biasutti"})

(def gallery-walk
  "The walk whose photographs fill the Walks page's gallery."
  "w02")

(def stop-photos
  "The photograph for each stop, in stop order."
  {"w01" ["walks/2026-11-05/portico.jpg" "walks/2026-11-05/church-front.jpg" "walks/2026-11-05/campo-canal.jpg"]
   "w02" ["walks/2026-11-06/dsc07975.tif" "walks/2026-11-06/dsc08090.tif" "walks/2026-11-06/dsc08135.tif"]})

(def walk-films
  "The finished film of a walk, by walk id: a :slug in amp.data.films."
  {"w01" "the-weight-of-the-flag"})

(def solo-walk
  "Before the walks: Aram Zadikian carried one red unit out of Tesa 41 alone
   (the Carrying film and journal post). Shown with the walks so far. The
   title is the film's (kept in English); alt text and summary are in the
   walks catalog (solo.alt, solo.summary)."
  {:date "2026-10-22"
   :title "Carrying"
   :photo "journal/26-10-22-orig/arsenale-quay.jpg"
   :film "/films/carrying"
   :post "/blog/carrying"})

(def accademia
  "The walk to the Accademia di Belle Arti, 18 November, as the Academy
   confirmed it on 10 November: its event page, its Instagram post, and the
   posters (Dropbox the_studio/marketing/accademia_walk_2026-11-18)."
  {:walk "w06"
   :poster "walks/accademia/poster-2026-11-10.jpg"
   :poster-ar 0.7076
   :pdf "walks/accademia/locandina-2026-11-10-A3.pdf"
   :event-url "https://www.accademiavenezia.it/eventi/zadik-zadikian-performance-e-incontro-con-l-artista-905.html"
   :instagram "https://www.instagram.com/p/DfjyUypoaud/"})

(def hero-photo "walks/2026-11-06/dsc07975.tif")

;; ── Dates and times ─────────────────────────────────────────────────────

(defn today
  "Today in Venice, as yyyy-mm-dd."
  []
  (.format (js/Intl.DateTimeFormat. "en-CA" #js {:timeZone "Europe/Rome"}) (js/Date.)))

(defn date-of [iso] (js/Date. (str iso "T12:00:00Z")))
(defn day-of [iso] (.getUTCDate (date-of iso)))

;; Dates in the current locale (call while rendering).
(defn weekday
  "Thursday / giovedì / հինգշաբթի."
  [iso]
  (i18n/date iso {:weekday "long"}))

(defn weekday-abbr
  "The weekday in two or three letters, for a day square: Th / gio / հնգ."
  [iso]
  (if (= "en" (i18n/locale))
    (subs (weekday iso) 0 2)
    (i18n/date iso {:weekday "short"})))

(defn short-date
  "Thu 5 Nov / gio 5 nov / նոյ 5, հնգ."
  [iso]
  (i18n/date iso {:weekday "short" :day "numeric" :month "short"}))

(defn long-date
  "Thursday 5 November / giovedì 5 novembre / նոյեմբերի 5, հինգշաբթի."
  [iso]
  (i18n/date iso {:weekday "long" :day "numeric" :month "long"}))

(defn at-time
  "\"14:30\" plus `m` minutes, as h:mm."
  [hm m]
  (let [[h mm] (map js/parseInt (str/split hm ":"))
        x (+ (* h 60) mm (js/Math.round m))]
    (str (quot x 60) ":" (.padStart (str (mod x 60)) 2 "0"))))

(defn clock
  "Minutes after leaving Tesa 41 at `t` (0–1) along `walk`: walking time at
   3 km/h plus the stays at the stops already left behind."
  [{:keys [km stops]} t]
  (+ (* t km 20) (reduce + (keep #(when (< (:t %) (- t 1e-4)) (:stay % 8)) stops))))

(defn duration
  "Minutes as hours and minutes: 1 h 15."
  [m]
  (t :walk-media/duration {:h (quot m 60) :mm (.padStart (str (mod m 60)) 2 "0")}))

(defn with-status
  "The walks with :status — :walked (done, or has its film in), :today, or
   :planned — and :next? on the first walk still to come."
  []
  (let [now (today)
        ws (mapv (fn [{:keys [id date] :as w}]
                   (assoc w :status (cond (or (< (compare date now) 0) (contains? films id)) :walked
                                          (= date now) :today
                                          :else :planned)))
                 data/walks)
        nxt (some #(when (not= :walked (:status %)) (:id %)) ws)]
    (mapv #(assoc % :next? (= nxt (:id %))) ws)))

(defn status-label [{:keys [status next?]}]
  (case status
    :walked (t :walk-media/status.walked)
    :today (t :walk-media/status.today)
    (if next? (t :walk-media/status.next) (t :walk-media/status.planned))))
