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
   their space. The 18 November set is all of the day's photographs, at the
   Accademia di Belle Arti, on the water and in Piazza San Marco, as they are
   in the press library (Dropbox the_studio/media/photo/2026/11/18). The 14 November set is twelve of the day's photographs as
   they are in the press library (R2 press/<uid>, uploaded by npm run press;
   Dropbox the_studio/media/photo/2026/11/14). The 6 November set is the day's photographs (Dropbox
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
          {:path "walks/2026-11-06/dsc08205.tif" :ar 1.4999}]
   "w03" [{:path "press/74f8c15580" :ar 1.5000}
          {:path "press/e9ee937203" :ar 1.5000}
          {:path "press/df29e54a02" :ar 1.9555}
          {:path "press/753790e634" :ar 1.4999}
          {:path "press/bf37979a50" :ar 1.5000}
          {:path "press/d0726896ef" :ar 1.8705}
          {:path "press/2d2fb66733" :ar 1.9739}
          {:path "press/fca6016671" :ar 0.8472}
          {:path "press/8255662971" :ar 1.5000}
          {:path "press/5fca9ec4d3" :ar 1.1504}
          {:path "press/ad67b4fede" :ar 1.7306}
          {:path "press/72135a5e47" :ar 0.8631}]
   "w06" [{:path "press/efc5b7e42e" :ar 1.5001}
          {:path "press/2d42391bf6" :ar 2.4907}
          {:path "press/70d1098923" :ar 0.5255}
          {:path "press/dca2cb21a0" :ar 0.6348}
          {:path "press/76ba65df0d" :ar 0.5925}
          {:path "press/3c0b8a03ed" :ar 1.5000}
          {:path "press/5b8a8203ba" :ar 1.5001}
          {:path "press/40a09981cf" :ar 1.8037}
          {:path "press/1a72bb7d43" :ar 1.5000}
          {:path "press/c0f7505a0c" :ar 1.5686}
          {:path "press/ff07d14201" :ar 1.6742}
          {:path "press/8c47262a4b" :ar 1.7444}
          {:path "press/730fea73ca" :ar 1.4999}
          {:path "press/30d7a57f61" :ar 1.5000}
          {:path "press/61b330a15d" :ar 1.5000}
          {:path "press/f44096ee92" :ar 1.5000}
          {:path "press/a306a9af6a" :ar 1.5000}
          {:path "press/c49a7d273c" :ar 1.5001}
          {:path "press/9d7b6af6f8" :ar 1.5000}
          {:path "press/9dfa2a50f8" :ar 1.5000}
          {:path "press/11ecade310" :ar 1.5000}
          {:path "press/e3fc2d4aaa" :ar 2.3538}
          {:path "press/e7a592c78e" :ar 1.5000}
          {:path "press/86bf7f4a27" :ar 1.5000}
          {:path "press/4837b7df4e" :ar 1.5000}
          {:path "press/09b00fbf45" :ar 1.5000}
          {:path "press/dca61a0bf0" :ar 1.5000}
          {:path "press/4f87fa6e8b" :ar 1.5000}
          {:path "press/45aaff8229" :ar 1.5000}
          {:path "press/82700d42d4" :ar 1.5000}
          {:path "press/8e73480553" :ar 3.1866}
          {:path "press/2177d90373" :ar 1.5000}
          {:path "press/9d54246880" :ar 1.5000}
          {:path "press/7d1ef5dcf4" :ar 1.7874}
          {:path "press/40eb0dc367" :ar 1.5001}
          {:path "press/e779ead83b" :ar 1.5000}
          {:path "press/f6033aa655" :ar 1.5001}
          {:path "press/66737a8274" :ar 2.6797}
          {:path "press/4feddb4a8c" :ar 3.1858}
          {:path "press/f798441561" :ar 1.5000}
          {:path "press/83ac87fb65" :ar 1.5000}
          {:path "press/a0a7632eaf" :ar 1.5000}
          {:path "press/965c1dbaba" :ar 2.1873}
          {:path "press/1ce39fcb06" :ar 1.5000}
          {:path "press/a0954f53f9" :ar 1.8840}
          {:path "press/818ee9de8a" :ar 1.5000}
          {:path "press/65627fbfff" :ar 1.5000}
          {:path "press/07e20a6e90" :ar 1.5001}
          {:path "press/bf60086dca" :ar 1.7437}
          {:path "press/50bf0a70f6" :ar 1.5000}
          {:path "press/937fdfbd4d" :ar 1.5000}
          {:path "press/9315582916" :ar 1.5000}
          {:path "press/8fc4398bd2" :ar 1.5000}
          {:path "press/12b722d0f8" :ar 2.1131}
          {:path "press/1cfbac06ac" :ar 2.0693}
          {:path "press/0d611b201b" :ar 0.8365}
          {:path "press/cbbcb085a1" :ar 1.5000}
          {:path "press/4555ae731b" :ar 1.8904}]})

(def photographers
  "Who took each walk's photographs (as credited in the press set). Walks
   without an entry show film stills."
  {"w02" "Mina Biasutti"
   "w03" "Mina Biasutti"
   "w06" "Mina Biasutti"})

(def gallery-walk
  "The walk whose photographs fill the Walks page's gallery (its text:
   walks catalog, gallery.text.<id>)."
  "w06")

(def stop-photos
  "The photograph for each stop, in stop order."
  {"w01" ["walks/2026-11-05/portico.jpg" "walks/2026-11-05/church-front.jpg" "walks/2026-11-05/campo-canal.jpg"]
   "w02" ["walks/2026-11-06/dsc07975.tif" "walks/2026-11-06/dsc08090.tif" "walks/2026-11-06/dsc08135.tif"]
   "w03" ["press/753790e634" "press/2d2fb66733"]
   "w06" ["press/40a09981cf" "press/4feddb4a8c"]})

(def walk-films
  "The finished film of a walk, by walk id: a :slug in amp.data.films. The
   Last Walk is cut from both the 18 November walk (by boat to the Accademia
   and San Marco) and the 21 November finale."
  {"w01" "the-weight-of-the-flag"
   "w06" "the-last-walk"
   "w09" "the-last-walk"})

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

(def closing
  "Closing day, 22 November: not a walk but a gathering at the pavilion, with
   talks with the artist and the curator (text: walks catalog, close.*). :time
   is nil until it is set."
  {:date "2026-11-22" :time nil})

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
  "Minutes after leaving Tesa 41 at `t` (0–1) along `walk`: time on the way
   at its :pace (minutes per km: 20 on foot; by boat, whatever brings it home on time) plus the stays at the
   stops already left behind."
  [{:keys [km stops pace]} t]
  (+ (* t km (or pace 20)) (reduce + (keep #(when (< (:t %) (- t 1e-4)) (:stay % 8)) stops))))

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
