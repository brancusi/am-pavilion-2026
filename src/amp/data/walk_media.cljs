(ns amp.data.walk-media
  "What the walks (amp.data.walks, generated) don't say: the film and
   photographs of each walk, the photograph at each stop, and each walk's
   status today. Shared by the Walks page and its home teaser. Films are
   silent loops on R2 at walks/films/<id>.mp4 (with <id>.jpg as poster),
   graded from the camera originals; photographs are R2 images (npm run media)."
  (:require [amp.data.walks :as data]
            [clojure.string :as str]))

;; ── Media ───────────────────────────────────────────────────────────────

(def films
  "Silent loops from each walk, in the order they happened."
  {"w01" [{:id "w01-follow" :title "Three works, single file"}
          {:id "w01-square" :title "Turning in a campo"}
          {:id "w01-flag" :title "Green, white and red"}
          {:id "w01-calle" :title "Down a calle"}
          {:id "w01-canal" :title "Along the fondamenta"}
          {:id "w01-campo" :title "Across a campo"}
          {:id "w01-bridges" :title "Over the bridges"}]
   "w02" [{:id "w02-rehearse" :title "Rehearsing the turn in Tesa 41"}
          {:id "w02-door" :title "Out of the door"}
          {:id "w02-letsgo" :title "Setting off"}
          {:id "w02-castello" :title "Through Castello"}
          {:id "w02-cat" :title "A cat crosses"}
          {:id "w02-campo" :title "Across the campo"}
          {:id "w02-narrow" :title "Into a narrow calle"}
          {:id "w02-bridge" :title "On the bridge"}]})

(def photos
  "Photographs from each walk, with :ar (width / height) so the gallery holds
   their space. The 6 November set is the day's photographs (Dropbox
   the_studio/media/photo/2026/11/06); 5 November is stills from the film."
  {"w01" [{:path "walks/2026-11-05/portico.jpg" :ar 1.7778 :title "Under a portico" :alt "Three walkers carry the red, white and green works past a marble portico in low sun"}
          {:path "walks/2026-11-05/church-front.jpg" :ar 1.7778 :title "At a church front" :alt "The works stood against a church front while the walkers rest"}
          {:path "walks/2026-11-05/campo-canal.jpg" :ar 1.7778 :title "A campo on the canal" :alt "The works cross a sunlit campo beside a canal"}
          {:path "walks/2026-11-05/fondamenta.jpg" :ar 1.7778 :title "Towards the lagoon" :alt "Walkers carry the red and turquoise works along a fondamenta towards the lagoon"}
          {:path "walks/2026-11-05/chapel.jpg" :ar 1.7778 :title "Before a chapel" :alt "Three walkers stand with the works before a small chapel"}
          {:path "walks/2026-11-05/single-file.jpg" :ar 1.7778 :title "Single file" :alt "The walkers turn into a campo in single file"}]
   "w02" [{:path "walks/2026-11-06/dsc07975.tif" :ar 1.5000 :title "The Arsenale gate" :alt "Six works crossing the wooden bridge at the Arsenale gate"}
          {:path "walks/2026-11-06/dsc08011.tif" :ar 1.5000 :title "Against the Arsenale wall" :alt "The six works stood in a row against the brick wall of the Arsenale"}
          {:path "walks/2026-11-06/dsc08020.tif" :ar 1.5000 :title "Fondamenta de l’Arsenal" :alt "The works carried along the canal under the Arsenale wall"}
          {:path "walks/2026-11-06/dsc08038.tif" :ar 2.1307 :title "Setting off again" :alt "Walkers with the green, white and red works in a campo"}
          {:path "walks/2026-11-06/dsc08044.tif" :ar 3.0264 :title "In line" :alt "Six works carried side by side"}
          {:path "walks/2026-11-06/dsc08046.tif" :ar 2.0646 :title "A pause" :alt "The walkers stop and talk in a group"}
          {:path "walks/2026-11-06/dsc08090.tif" :ar 2.3479 :title "Museo Storico Navale" :alt "The six works set down between the anchors of the naval museum"}
          {:path "walks/2026-11-06/dsc08093.tif" :ar 1.9911 :title "Between the anchors" :alt "A walker sets a work down beside an iron anchor"}
          {:path "walks/2026-11-06/dsc08098.tif" :ar 0.8438 :title "Unbuckling" :alt "A walker undoes the harness of a white work"}
          {:path "walks/2026-11-06/dsc08099.jpg" :ar 1.8694 :title "Carriers" :alt "Two walkers and the turquoise work"}
          {:path "walks/2026-11-06/dsc08135.tif" :ar 1.0390 :title "To the lagoon" :alt "A walker carries the green work along the lagoon"}
          {:path "walks/2026-11-06/dsc08205.tif" :ar 1.4999 :title "Back by the gate" :alt "The works crossing the Arsenale bridge at dusk"}]})

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
   (the Carrying film and journal post). Shown with the walks so far."
  {:date "2026-10-22"
   :title "Carrying"
   :photo "journal/26-10-22-orig/arsenale-quay.jpg"
   :alt "Aram Zadikian with the red unit on his back on the quay before the Arsenale boat sheds"
   :summary "Aram Zadikian carries one red unit out of Tesa 41, along the Arsenale quay and through Castello, with Zadik Zadikian alongside: the test that started the walks."
   :film "/films/carrying"
   :post "/blog/carrying"})

(def hero-photo "walks/2026-11-06/dsc07975.tif")

;; ── Dates and times ─────────────────────────────────────────────────────

(defn today
  "Today in Venice, as yyyy-mm-dd."
  []
  (.format (js/Intl.DateTimeFormat. "en-CA" #js {:timeZone "Europe/Rome"}) (js/Date.)))

(defn date-of [iso] (js/Date. (str iso "T12:00:00Z")))
(def weekdays ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"])
(defn weekday [iso] (weekdays (.getUTCDay (date-of iso))))
(defn day-of [iso] (.getUTCDate (date-of iso)))
(defn short-date [iso] (str (subs (weekday iso) 0 3) " " (day-of iso) " Nov"))
(defn long-date [iso] (str (weekday iso) " " (day-of iso) " November"))

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

(defn duration [m] (str (quot m 60) " h " (.padStart (str (mod m 60)) 2 "0")))

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
  (case status :walked "Walked" :today "Today" (if next? "Next walk" "Planned")))
