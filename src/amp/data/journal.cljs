(ns amp.data.journal
  "Journal post listings: what the index, the homepage teaser and the
   next-post links need. Post bodies live in amp.pages.blog.posts.* and are
   joined by slug in amp.pages.blog.registry, so this stays small enough to
   ship with the homepage.")

(def posts
  "Newest first. :kind is the filter tag; :tone picks its pigment; :cover-ar
   is the cover's width / height, so its space is held before it loads."
  [{:slug        "seven-steps-to-heaven"
    :title       "The Making of Seven Steps to Heaven"
    :date        "2026-10-30"
    :author      "Armenian Pavilion Team"
    :kind        "Process"
    :tone        :turquoise
    :summary     "Seven steps against the corner of two walls, rising to nowhere. From a pen sketch with a question on it, through nine versions and ten proportions of rise to run, to a stair carried by hand into Tesa 41."
    :cover-image "https://media.armenianpavilion.org/journal/26-10-30/seven-steps-into-tesa-41.jpg"
    :cover-ar    1.7778}

   {:slug        "making-a-flag"
    :title       "Making a Flag"
    :date        "2026-10-30"
    :author      "Armenian Pavilion Team"
    :kind        "Studio"
    :tone        :red
    :summary     "Why would the Armenian Pavilion make an Italian flag? On Jasper Johns and things the mind already knows, three colours with no official meaning, an Armenian anthem that began with an Italian girl sewing a flag, and a flag that stands on its own feet."
    :cover-image "https://media.armenianpavilion.org/press/444786d448"
    :cover-ar    1.7778}

   {:slug        "carried-by-hand"
    :title       "Carried by Hand"
    :date        "2026-09-03"
    :author      "Armenian Pavilion Team"
    :kind        "Venice"
    :tone        :blue
    :summary     "In Venice every delivery ends on foot, one bridge at a time. On the realities of logistics in a city that resists the car, a summer away for visas, and the studio's return to full production."
    :cover-image "https://media.armenianpavilion.org/journal/26-09-03-filmic/bridge-steps.jpg"
    :cover-ar    1.7778}

   {:slug        "the-studio-play-balance"
    :title       "The Studio: Play, Balance, and the Life of Form"
    :date        "2026-03-15"
    :author      "Armenian Pavilion Team"
    :kind        "Process"
    :tone        :red
    :summary     "What happens when sculpture begins not with monumentality, but with a single, beautiful unit? At the heart of Zadik Zadikian’s work is a small plaster block—a tool for improvisation, rhythm, and thinking through form by touch."
    :cover-image "https://media.armenianpavilion.org/media/26/03/15/the_studio0493.jpg"
    :cover-ar    0.6667}

   {:slug        "blue-yellow-maquette"
    :title       "Blue Yellow Blue Yellow"
    :date        "2026-02-14"
    :author      "Armenian Pavilion Team"
    :kind        "Maquette"
    :tone        :turquoise
    :summary     "Zadik Zadikian is developing a full-scale maquette of a new sculptural variation—an architectural test of structure, proportion, and chromatic rhythm."
    :cover-image "https://media.armenianpavilion.org/photos/02-13-26/foam_00117198.jpg"
    :cover-ar    1.7778}])

(def ^:private months
  ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])

(defn display-date
  "\"2026-03-15\" → \"15 Mar 2026\"."
  [iso]
  (let [[y m d] (.split iso "-")]
    (str (js/parseInt d 10) " " (nth months (dec (js/parseInt m 10))) " " y)))
