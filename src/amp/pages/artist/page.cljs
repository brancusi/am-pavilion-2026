(ns amp.pages.artist.page
  "Artist page, in the design system's page language: night head with the
   portrait and key facts, epigraph, the biography essay, a chronology, the
   works gallery, a studio film and the closing chapter on Armenia."
  (:require
   [amp.data.films :as films]
   [amp.hooks.use-in-view :refer [use-in-view]]
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture mux-poster]]
   [amp.ui.wayfinding :as wf]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "artist")

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

;; ── Data ───────────────────────────────────────────────────────────────────

(def portrait-src "https://media.armenianpavilion.org/portraits/zz-portrait-2.jpg")

(def ^:private facts
  [[:artist/facts.born :artist/facts.born-value]
   [:artist/facts.studio :artist/facts.studio-value]
   [:artist/facts.practice :artist/facts.practice-value]
   [:artist/facts.pavilion :artist/facts.pavilion-value]])

(defn- chronology
  "The chronology steps, in the current locale."
  []
  (for [id ["arax" "bufano" "serra" "gold" "bricks" "pavilion"]
        :let [k #(keyword "artist" (str "chron." id "." %))]]
    {:dist (t (k "dist")) :title (t (k "title")) :body (t (k "body"))}))

(defn- works
  "The gallery slides, captions in the current locale."
  []
  (mapv #(-> % (update :caption ts) (update :credit ts))
    [{:img-src "https://media.armenianpavilion.org/artwork/1.jpeg"
      :aspect-ratio 0.75 :caption :artist/works.gilded-block :credit :artist/works.credit-zadikian}
     {:img-src "https://media.armenianpavilion.org/blue_yellow/top_view.jpg"
      :aspect-ratio 0.75 :caption :artist/works.blue-yellow :credit :artist/works.credit-studio}
     {:img-src "https://media.armenianpavilion.org/blue_yellow/side-2.jpg"
      :aspect-ratio 0.75 :caption :artist/works.blue-yellow :credit :artist/works.credit-studio}
     {:img-src "https://media.armenianpavilion.org/big_red/master.jpg"
      :aspect-ratio 1.78 :caption :artist/works.big-red :credit :artist/works.credit-render}
     {:img-src "https://media.armenianpavilion.org/big_red/corner_low.jpg"
      :aspect-ratio 0.75 :caption :artist/works.big-red :credit :artist/works.credit-render}
     {:img-src "https://media.armenianpavilion.org/photos/blue_unit_with_hand.jpg"
      :aspect-ratio 1.50 :caption :artist/works.blue-block :credit :artist/works.credit-la}
     {:img-src "https://media.armenianpavilion.org/big_red/flag.jpg"
      :aspect-ratio 1.38 :caption :artist/works.big-red :credit :artist/works.credit-render}]))

(defn- film
  "The studio film, localised: read while rendering."
  []
  (first (filter #(= "maquette" (:slug %)) (films/films))))

;; ── Sections ───────────────────────────────────────────────────────────────

(defnc head []
  (<>
   (d/section {:class "ap-vhead"}
              (d/div {:class "ap-wrap ap-vhead__grid ap-artist-head"}
                     (d/div {:class "flex flex-col gap-5"}
                            (d/p {:class "ap-label m-0 text-yellow"} (t :artist/head.label))
                            (d/h1 {:class "ap-display-xl"} (t :artist/head.name))
                            (d/p {:class "ap-lede max-w-[36ch] m-0"} (t :artist/head.lede))
                            (d/dl {:class "ap-keyfacts mt-4"}
                                  (for [[k v] facts]
                                    (d/div {:key (name k)} (d/dt (t k)) (d/dd (t v))))))
                     (d/figure {:class "ap-figure ap-artist-head__portrait"}
                               (d/div {:class "ap-figure__frame" :style #js {"--ar" "4/5"}}
                                      ($ picture {:src portrait-src :alt (ts :artist/head.portrait-alt) :eager? true
                                                  :sizes "(min-width: 960px) 40vw, 100vw"})))))
   (d/div {:class "ap-hero__strip" :aria-hidden true}
          (for [i (range 9)] (d/i {:key i})))))

(defnc epigraph []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap"}
                    (d/blockquote {:class "ap-quote ap-artist-epigraph max-w-[32ch] !m-0"}
                                  (d/p (t :artist/epigraph.quote))
                                  (d/cite (t :artist/epigraph.cite))))))

(defnc biography []
  (d/section {:class "ap-article pb-12 lg:pb-24" :id "biography"}
             (d/header {:class "ap-article__head !pt-0"}
                       (d/p {:class "ap-label ap-muted m-0"} (t :artist/bio.label))
                       (d/h2 {:class "ap-display-l"} (t :artist/bio.title))
                       (d/p {:class "ap-article__byline m-0"} (d/span (t :artist/bio.byline))))
             (d/div {:class "ap-article__body"}
                    (d/p {:class "ap-dropcap"} (t :artist/bio.p1))
                    (d/p (t :artist/bio.p2))
                    (d/p (t :artist/bio.p3)))
             (d/blockquote {:class "ap-quote ap-quote--block ap-wide !my-4"}
                           (d/p (t :artist/bio.quote))
                           (d/cite (t :artist/bio.quote-cite)))
             (d/div {:class "ap-article__body"}
                    (d/p (t :artist/bio.p4))
                    (d/p (t :artist/bio.p5)))))

(defnc chronology-section []
  (d/section {:class "ap-sec bg-paper-sunk" :id "chronology"}
             (d/div {:class "ap-wrap ap-guide lg:!grid-cols-[1fr_1.4fr] items-start"}
                    ($ wf/section-head {:label (t :artist/chron.label) :title (t :artist/chron.title)
                                        :lede (t :artist/chron.lede)})
                    ($ wf/steps {:items (chronology)}))))

(defnc works-section []
  (d/section {:class "ap-sec" :id "works"}
             ($ fit-gallery {:slides (works) :label (t :artist/works.label) :title (t :artist/works.title)})))

(defnc film-section []
  (let [[playing? set-playing!] (hooks/use-state false)
        film (film)
        {:keys [title playback-id poster summary where duration]} film
        [ref {near? :in?}] (use-in-view :root-margin "100% 0px")
        _ (hooks/use-effect [near?] (when near? (.preload lazy-film)))
        still (d/img {:src (mux-poster playback-id {:w 1600 :time poster})
                      :alt "" :loading "lazy"})]
    (d/section {:ref ref :class "ap-sec ap-film" :id "film"}
               (d/div {:class "ap-wrap flex flex-col gap-6"}
                      (d/div
                       (d/p {:class "ap-label m-0 mb-1 text-yellow"} (t :artist/film.label))
                       (d/h2 {:class "ap-h1"} title))
                      (d/figure {:class "ap-figure"}
                                (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                                       (if playing?
                                         ($ lazy-film {:playback-id playback-id :title title
                                                       :fallback still
                                                       :poster (mux-poster playback-id {:w 1600 :time poster})})
                                         (<>
                                          still
                                          (d/button {:class "ap-play" :aria-label (ts :artist/film.play {:title title})
                                                     :on-click #(set-playing! true)}
                                                    (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                                            :fill "currentColor" :aria-hidden true}
                                                           (d/path {:d "M4 2l10 6-10 6z"}))))))
                                (d/figcaption {:class "ap-tomb"}
                                              (d/span {:class "ap-tomb__no"} (films/running-time duration))
                                              (d/span {:class "ap-tomb__title"} title)
                                              (d/span {:class "ap-tomb__credit"} (str where " · " (:when film)))))
                      (d/p {:class "ap-body m-0 max-w-[60ch]"} summary)))))

(defnc story-link []
  (d/section {:class "ap-sec" :id "story"}
             (d/div {:class "ap-wrap"}
                    (d/a {:class "ap-article__next ap-story-link" :href (i18n/href "/armenian-as-well")}
                         (d/span {:class "ap-label text-yellow"} (t :artist/story.label))
                         (d/span {:class "ap-display-l"} (t :artist/story.title))
                         (d/span {:class "ap-body m-0 max-w-[52ch]"} (t :artist/story.body))
                         (d/span {:class "ap-link self-start mt-2"} (t :artist/story.cta))))))

(defnc return-section []
  (d/section {:class "ap-chapter ap-chapter--red" :id "return"}
             (d/div {:class "ap-wrap !px-0 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-24"}
                    (d/div {:class "flex flex-col gap-4"}
                           (d/p {:class "ap-label ap-chapter__eyebrow m-0"} (t :artist/return.eyebrow))
                           (d/h2 {:class "ap-display-l ap-chapter__title"} (t :artist/return.title))
                           (d/p {:class "ap-artist-aphorism"} (t :artist/return.aphorism)))
                    (d/div {:class "ap-artist-cols"}
                           (d/p (t :artist/return.p1))
                           (d/p (t :artist/return.p2))
                           (d/p (t :artist/return.p3))
                           (d/p (t :artist/return.p4))
                           (d/p (t :artist/return.p5))))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc artist-view
  [_props]
  (d/div {:class "bg-paper text-ink"}
         ($ head)
         ($ epigraph)
         ($ biography)
         ($ chronology-section)
         ($ works-section)
         ($ film-section)
         ($ story-link)
         ($ return-section)))
