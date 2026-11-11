(ns amp.pages.landing.bench
  "On the bench: the home page's work-in-progress section (design canvas
   \"Work in progress — home section\", direction B). A count of the day of the
   run, a contact sheet of the studio at work (the press images marked
   bench in Caption Genius, amp.hooks.use-press-home) and the making-of
   posts."
  (:require
   [amp.data.journal :as journal]
   [amp.hooks.use-in-view :refer [use-in-view]]
   [amp.hooks.use-press-home :as press-home :refer [use-press-home]]
   [amp.i18n :as i18n :refer [t tx] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :as picture :refer [picture]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defcatalog "landing")
(defcatalog "data-media")

(def ^:private day-ms 86400000)
(def ^:private opens (js/Date.UTC 2026 4 9))
(def ^:private closes (js/Date.UTC 2026 10 22))

(defn- run-day
  "{:day :total}: today in Venice as a day of the run, 9 May = 1."
  []
  (let [today (.format (js/Intl.DateTimeFormat. "en-CA" #js {:timeZone "Europe/Rome"}) (js/Date.))
        at (js/Date.parse (str today "T00:00:00Z"))
        total (inc (js/Math.round (/ (- closes opens) day-ms)))]
    {:day (max 1 (min total (inc (js/Math.round (/ (- at opens) day-ms)))))
     :total total}))

(def ^:private slots
  "Photos on the contact sheet: the first is the lead. The sheet's grid is
   laid out for this many."
  7)

(defn- making-of
  "The posts on how the works are made, newest first."
  []
  (filterv #(#{"seven-steps-to-heaven" "making-a-flag"} (:slug %)) (journal/posts)))

(defn- short-date [iso]
  (i18n/date (js/Date. iso) {:day "numeric" :month "short" :year "numeric" :timeZone "UTC"}))

(defnc bench-shot [{:keys [n uid title photo alt sizes]}]
  (let [title (tx :data-media title)]
    (d/figure {:class "ap-bench__shot"}
              (d/div {:class "ap-bench__frame"}
                     ($ picture {:src (str picture/media-host "press/" uid) :alt (tx :data-media alt) :sizes sizes}))
              (d/figcaption {:class "ap-bench__cap" :title title}
                            (d/span (t :landing/bench.fig {:n n :title title}))
                            (when photo (t :landing/bench.photo {:name photo}))))))

(defnc on-the-bench []
  (let [{:keys [day total]} (run-day)
        [ref {near? :in?}] (use-in-view :root-margin "150% 0px")
        [lead & rest] (take slots (press-home/of (use-press-home near?) "bench"))]
    (d/section {:ref ref :class "ap-bench" :aria-labelledby "bench-title"}
               (d/div {:class "ap-wrap ap-bench__head"}
                      (d/div {:class "flex flex-col gap-4"}
                             (d/p {:class "ap-label m-0 ap-bench__eyebrow"} (t :landing/bench.eyebrow))
                             (d/h2 {:id "bench-title" :class "ap-display-l m-0"} (t :landing/bench.title))
                             (d/p {:class "ap-lede m-0 max-w-[30em] ap-bench__lede"} (t :landing/bench.lede)))
                      (d/div {:class "ap-bench__count"}
                             (d/p {:class "ap-bench__day" :aria-hidden true} day)
                             (d/div {:class "ap-bench__of ap-label"}
                                    (d/span (t :landing/bench.day {:day day :total total}))
                                    (d/span {:class "ap-bench__left"}
                                            (t :landing/bench.left {:n (- total day)}))
                                    (d/span {:class "ap-bench__bar" :aria-hidden true}
                                            (d/i {:style #js {:width (str (* 100 (/ day total)) "%")}})))))
               (d/div {:class "ap-wrap ap-bench__sheet"}
                      ($ bench-shot {:n 1 :sizes "(min-width: 960px) 54vw, 100vw" :& lead})
                      (map-indexed (fn [i s]
                                     ($ bench-shot {:key (:uid s) :n (+ i 2)
                                                    :sizes "(min-width: 960px) 38vw, 50vw" :& s}))
                                   rest))
               (d/div {:class "ap-wrap"}
                      (d/div {:class "ap-bench__foot"}
                             (d/p {:class "ap-label m-0 ap-bench__muted"} (t :landing/bench.from-journal))
                             (for [{:keys [slug title date]} (making-of)]
                               (d/a {:key slug :class "ap-bench__post" :href (i18n/href (str "/blog/" slug)) :title title}
                                    (d/span {:class "ap-label ap-bench__muted"} (short-date date))
                                    (d/span {:class "ap-h2"} title)))
                             (d/a {:class "ap-btn ap-btn--yellow" :href (i18n/href "/blog")} (t :landing/bench.all-notes)))))))
