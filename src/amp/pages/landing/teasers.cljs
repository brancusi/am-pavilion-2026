(ns amp.pages.landing.teasers
  "Teasers on the home page: the walks (/walks), just below the hero, and
   the long reads, the story (\"Armenian as well\", /armenian-as-well) and
   Portage (/portage). Each has one drawing
   that plays once as it comes into view (the crossings of the two lives,
   the bridges of the walk); under reduced motion they stand drawn."
  (:require
   [amp.data.walk-media :as wm]
   [amp.hooks.use-in-view :refer [use-in-view]]
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :as picture :refer [picture]]
   [clojure.string :as str]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "landing")

(def ^:private media picture/media-host)

(defn- use-played
  "[ref played?]: played? turns true the first time a third of the element
   is on screen, and stays true."
  []
  (let [[ref {in? :in?}] (use-in-view :threshold 0.3)
        [played? set-played!] (hooks/use-state false)]
    (hooks/use-effect [in?] (when in? (set-played! true)))
    [ref played?]))

(defn- srcset
  "R2 renditions of `key` at the given widths (the story and Portage images
   were uploaded with their own widths, not amp.ui.picture's)."
  [key widths]
  (str/join ", " (map #(str media key "-" % ".webp " % "w") widths)))

;; ── The story ───────────────────────────────────────────────────────────

(def ^:private crossings
  "The nine meetings on the story's timeline, as fractional years."
  [1973.5 1974.3 1974.8 1978.83 1979.79 1983.04 1986.92 2025.68 2026.35])

(defn- spine-at
  "Where a year falls on the spine, in % of its width."
  [year]
  (* 100 (/ (- year 1973) (- 2026.6 1973))))

(defn- movements
  "The story's five movements and the colour of each opener."
  []
  [{:id "i"   :n "I"   :title (t :landing/story.m1) :years (t :landing/story.to-1972) :tone "blue"}
   {:id "ii"  :n "II"  :title (t :landing/story.m2) :years "1973–1974"   :tone "ink"}
   {:id "iii" :n "III" :title (t :landing/story.m3) :years "1973–1978"   :tone "yellow"}
   {:id "iv"  :n "IV"  :title (t :landing/story.m4) :years "1978–1987"   :tone "gold"}
   {:id "v"   :n "V"   :title (t :landing/story.m5) :years "2024–2026"   :tone "red"}])

(def ^:private story-href "/armenian-as-well")

(defnc story-spine
  "Two rails, gold for Zadikian and red for Shafrazi, drawn across 1973–2026;
   a bar where they meet. Scaled to the years, so the long gap shows."
  [{:keys [played?]}]
  (d/figure {:class "ap-tz-spine m-0" :data-played (when played? "")}
            (d/div {:class "ap-tz-spine__track" :aria-hidden true}
                   (d/i {:class "ap-tz-spine__rail ap-tz-spine__rail--z"})
                   (d/i {:class "ap-tz-spine__rail ap-tz-spine__rail--t"})
                   (for [y crossings
                         :let [at (spine-at y)]]
                     (d/b {:key y :class "ap-tz-spine__bar"
                           :style #js {:left (str at "%") "--t" (/ at 100)}})))
            (d/div {:class "ap-tz-spine__years ap-label" :aria-hidden true}
                   (d/span "1973")
                   (d/span {:class "max-sm:!hidden" :style #js {:left (str (spine-at 1978.83) "%")}} "1978")
                   (d/span {:class "max-sm:!hidden" :style #js {:left (str (spine-at 1986.92) "%")}} "1986")
                   (d/span "2026"))
            (d/figcaption {:class "ap-tz-spine__cap ap-label"}
                          (d/span (d/i {:class "ap-tz-key ap-tz-key--z"}) (t :landing/story.zadikian))
                          (d/span (d/i {:class "ap-tz-key ap-tz-key--t"}) (t :landing/story.shafrazi))
                          (d/span {:class "ap-tz-spine__count"} (t :landing/story.crossings)))))

(defnc story-teaser []
  (let [[ref played?] (use-played)]
    (d/section {:class "ap-tz-story" :aria-labelledby "tz-story-title"}
               (d/div {:class "ap-wrap ap-tz-story__grid"}
                      (d/div {:class "ap-tz-story__text"}
                             (d/p {:class "ap-label m-0 ap-tz-story__eyebrow"} (t :landing/story.eyebrow))
                             (d/h2 {:id "tz-story-title" :class "ap-tz-story__title"}
                                   (d/span (t :landing/story.title-1)) (d/span (t :landing/story.title-2)))
                             (d/p {:class "ap-lede m-0 max-w-[36ch]"} (t :landing/story.lede))
                             (d/a {:class "ap-btn ap-btn--yellow self-start" :href (i18n/href story-href)}
                                  (t :landing/story.read)
                                  (d/span {:aria-hidden true} "→")))
                      (d/div {:class "ap-tz-pair"}
                             (d/figure {:class "ap-tz-pair__a m-0"}
                                       (d/div {:class "ap-figure__frame" :style #js {"--ar" "1362/1000"}}
                                              (d/img {:src (str media "zz-story/tehran-1978-800.webp")
                                                      :srcSet (srcset "zz-story/tehran-1978" [480 800 1200 1600])
                                                      :sizes "(min-width: 960px) 34vw, 82vw"
                                                      :alt (ts :landing/story.alt-1978)
                                                      :loading "lazy" :decoding "async"}))
                                       (d/figcaption {:class "ap-tz-pair__cap"}
                                                     (d/b "1978") (d/span (t :landing/story.cap-1978))))
                             (d/figure {:class "ap-tz-pair__b m-0"}
                                       (d/div {:class "ap-figure__frame" :style #js {"--ar" "4/3"}}
                                              (d/img {:src (str media "zz-story/independent-2025-800.webp")
                                                      :srcSet (srcset "zz-story/independent-2025" [480 800 1200])
                                                      :sizes "(min-width: 960px) 26vw, 64vw"
                                                      :alt (ts :landing/story.alt-2025)
                                                      :loading "lazy" :decoding "async"}))
                                       (d/figcaption {:class "ap-tz-pair__cap"}
                                                     (d/b "2025") (d/span (t :landing/story.cap-2025))))))
               (d/div {:class "ap-wrap" :ref ref}
                      ($ story-spine {:played? played?}))
               (d/nav {:class "ap-wrap" :aria-label (ts :landing/story.movements)}
                      (d/ol {:class "ap-tz-moves"}
                            (for [{:keys [id n title years tone]} (movements)]
                              (d/li {:key id}
                                    (d/a {:class (str "ap-tz-move ap-tz-move--" tone)
                                          :href (i18n/href (str story-href "#" id))}
                                         (d/span {:class "ap-tz-move__n" :aria-hidden true} n)
                                         (d/span {:class "ap-tz-move__t"}
                                                 (d/span {:class "sr-only"} (t :landing/story.movement {:n n}))
                                                 title)
                                         (d/span {:class "ap-tz-move__y"} years)))))))))

;; ── Portage ─────────────────────────────────────────────────────────────

(def ^:private bridges
  "Route A in section, from the Portage home sheet (resources/data/portage/
   home.html, \"The walk in section\"): each crossing drawn from its
   OpenStreetMap flights, distance to scale on a 16–1328 baseline. Bridge 7
   has no tagged steps; 8 is the Rialto."
  [{:n 1 :x 55.2 :y 131.6 :d "M45.5 160.0V158.3H46.2V156.6H47.0V154.9H47.7V153.2H48.5V151.5H49.2V149.8H50.0V148.1H50.7V146.4H51.5V144.7H52.2V143.0H53.0V141.3H53.7V139.6H54.5H56.0H56.7V141.3H57.5V143.0H58.2V144.7H59.0V146.4H59.7V148.1H60.5V149.8H61.2V151.5H62.0V153.2H62.7V154.9H63.5V156.6H64.2V158.3H65.0V160.0Z"}
   {:n 2 :x 104.8 :y 133.3 :d "M92.4 160.0V158.3H93.2V156.6H93.9V154.9H94.7V153.2H95.4V151.5H96.2V149.8H96.9V148.1H97.7V146.4H98.4V144.7H99.2V143.0H99.9V141.3H100.7H102.2H102.9V143.0H103.7V144.7H104.4V146.4H105.2V148.1H105.9V149.8H106.7V151.5H107.4V153.2H108.2V154.9H108.9V156.6H110.4H111.2V158.3H111.9V160.0H112.7H113.4H114.2H114.9H115.7H116.4H117.2Z"}
   {:n 3 :x 171.2 :y 135.0 :d "M158.8 160.0V158.3H159.5V156.6H160.3V154.9H161.0V153.2H161.8V151.5H162.5V149.8H163.3V148.1H164.0V146.4H164.8V144.7H165.5V143.0H166.3H167.8H168.5V144.7H169.3V146.4H170.0V148.1H170.8V149.8H171.5V151.5H172.3V153.2H173.0V154.9H173.8V156.6H174.5V158.3H175.3V160.0H176.8H177.5H178.3H179.0H179.8H180.5H181.3H182.0H182.8H183.5Z"}
   {:n 4 :x 363.8 :y 138.4 :d "M357.5 160.0V158.3H358.2V156.6H359.0V154.9H359.7V153.2H360.5V151.5H361.2V149.8H362.0V148.1H362.7V146.4H363.5H365.0H365.7V148.1H366.5V149.8H367.2V151.5H368.0V153.2H368.7V154.9H369.5V156.6H370.2V158.3V160.0Z"}
   {:n 5 :x 449.6 :y 133.3 :d "M439.8 160.0V158.3H440.6V156.6H441.3V154.9H442.1V153.2H442.8V151.5H443.6V149.8H444.3V148.1H445.1V146.4H445.8V144.7H446.6V143.0H447.3V141.3H448.1H449.6H450.3V143.0H451.1V144.7H451.8V146.4H452.6V148.1H453.3V149.8H454.1V151.5H454.8V153.2H455.6V154.9H456.3V156.6H457.1V158.3H457.8V160.0H458.6H459.3Z"}
   {:n 6 :x 512.5 :y 133.3 :d "M500.9 160.0V158.3H501.7V156.6H502.4V154.9H503.2V153.2H503.9V151.5H504.7V149.8H505.4V148.1H506.2V146.4H506.9V144.7H507.7V143.0H508.4V141.3H509.2H510.7H511.4V143.0H512.2V144.7H512.9V146.4H513.7V148.1H514.4V149.8H515.2V151.5H516.7H517.4V153.2H518.2V154.9H518.9V156.6H519.7V158.3H520.4V160.0H521.2H521.9H522.7H523.4H524.2Z"}
   {:n 7 :x 544.9 :y 130.0 :d ""}
   {:n 8 :x 725.4 :y 50.0 :d "M680.4 160.0V158.3H681.2V156.6H681.9V154.9H682.7V153.2H683.4V151.5H684.2V149.8H684.9V148.1H685.7V146.4H686.4V144.7H687.2V143.0H687.9V141.3H688.7V139.6H689.4V137.9H690.2V136.2H690.9V134.5H691.7V132.8H692.4V131.1H693.2V129.4H693.9H695.4V127.7H696.2V126.0H696.9V124.3H697.7V122.6H698.4V120.9H699.2V119.2H699.9V117.5H700.7V115.8H701.4V114.1H702.2V112.4H702.9V110.7H703.7V109.0H704.4V107.3H705.2V105.6H705.9V103.9H706.7V102.2H707.4V100.5H708.2V98.8H708.9V97.1H709.7V95.4H710.4V93.7H711.2V92.0H711.9V90.3H712.7V88.6H713.4V86.9H714.2V85.2H714.9V83.5H715.7V81.8H716.4V80.1H717.2V78.4H717.9V76.7H718.7V75.0H719.4V73.3H720.2V71.6H720.9V69.9H721.7V68.2H722.4V66.5H723.2V64.8H723.9V63.1H724.7V61.4H725.4V59.7H726.2V58.0H726.9H728.4H729.2V59.7H729.9V61.4H730.7V63.1H731.4V64.8H732.2V66.5H732.9V68.2H733.7V69.9H734.4V71.6H735.2V73.3H735.9V75.0H736.7V76.7H737.4V78.4H738.2V80.1H738.9V81.8H739.7V83.5H740.4V85.2H741.2V86.9H741.9V88.6H742.7V90.3H743.4V92.0H744.2V93.7H744.9V95.4H745.7V97.1H746.4V98.8H747.2V100.5H747.9V102.2H748.7V103.9H749.4V105.6H750.2V107.3H750.9V109.0H751.7V110.7H752.4V112.4H753.2V114.1H753.9V115.8H754.7V117.5H755.4V119.2H756.2V120.9H756.9V122.6H757.7V124.3H758.4V126.0H759.2V127.7H759.9V129.4H761.4H762.2V131.1H762.9V132.8H763.7V134.5H764.4V136.2H765.2V137.9H765.9V139.6H766.7V141.3H767.4V143.0H768.2V144.7H768.9V146.4H769.7V148.1H770.4V149.8V160.0Z"}
   {:n 9 :x 814.2 :y 129.9 :d "M803.0 160.0V158.3H803.7V156.6H804.5V154.9H805.2V153.2H806.0V151.5H806.7V149.8H807.5V148.1H808.2H809.7V146.4H810.5V144.7H811.2V143.0H812.0V141.3H812.7V139.6H813.5V137.9H814.2H815.7H816.5V139.6H817.2V141.3H818.0V143.0H818.7V144.7H819.5V146.4H820.2V148.1H821.0V149.8H821.7V151.5H822.5V153.2H823.2V154.9H824.0V156.6H824.7V158.3H825.5V160.0Z"}
   {:n 10 :x 918.1 :y 133.3 :d "M907.6 160.0V158.3H908.4V156.6H909.1V154.9H909.9V153.2H910.6H912.1V151.5H912.9V149.8H913.6V148.1H914.4V146.4H915.1V144.7H915.9V143.0H916.6V141.3H917.4H918.9H919.6V143.0H920.4V144.7H921.1V146.4H921.9V148.1H922.6V149.8H923.4V151.5H924.1V153.2H925.6H926.4V154.9H927.1V156.6H927.9V158.3H928.6V160.0Z"}
   {:n 11 :x 1003.9 :y 135.0 :anchor "end" :d "M1001.3 160.0V158.3H1002.0V156.6H1002.8V154.9H1003.5V153.2H1004.3V151.5H1005.0H1006.5V149.8H1007.3V148.1H1008.0V146.4H1008.8V144.7H1009.5V143.0H1010.3H1011.8H1012.5V144.7H1013.3V146.4H1014.0V148.1H1014.8V149.8H1015.5V151.5H1017.0H1017.8V153.2H1018.5V154.9V160.0Z"}
   {:n 12 :x 1028.4 :y 140.1 :anchor "start" :d "M1014.5 160.0V158.3H1015.3V156.6H1016.0V154.9H1016.8V153.2H1017.5V151.5H1018.3V149.8H1019.0V148.1H1019.8H1021.3H1022.0V149.8H1022.8V151.5H1023.5V153.2H1024.3V154.9H1025.0V156.6H1026.5H1027.3V158.3H1028.0V160.0H1028.8H1029.5H1030.3Z"}
   {:n 13 :x 1144.8 :y 121.4 :d "M1129.8 160.0V158.3H1130.6V156.6H1131.3V154.9H1132.1V153.2H1132.8V151.5H1133.6V149.8H1134.3V148.1H1135.1V146.4H1135.8V144.7H1136.6H1138.1V143.0H1138.8V141.3H1139.6V139.6H1140.3V137.9H1141.1V136.2H1141.8V134.5H1142.6V132.8H1143.3V131.1H1144.1V129.4H1144.8H1146.3H1147.1V131.1H1147.8V132.8H1148.6V134.5H1149.3V136.2H1150.1V137.9H1150.8V139.6H1151.6V141.3H1152.3V143.0H1153.8H1154.6V144.7H1155.3V146.4H1156.1V148.1H1156.8V149.8H1157.6V151.5H1158.3V153.2H1159.1V154.9H1159.8V156.6V160.0Z"}])

(def ^:private stations
  "Portage sheets: slug and numeral (the short name is portage.st.<slug>)."
  [["shoulder" "I"] ["guild" "II"] ["world" "III"]
   ["machine" "IV"] ["walk" "V"] ["studio" "VI"]])

(def ^:private walk-facts
  "Value, unit and note of each, in landing.json portage.<id>.v/.u/.note."
  ["km" "bridges" "steps" "m"])

(defnc walk-section
  "The thirteen bridges rise one by one as the red line walks the route."
  [{:keys [played?]}]
  (d/figure {:class "ap-tz-walk m-0" :data-played (when played? "")}
            (d/svg {:viewBox "0 36 1344 128" :class "ap-tz-walk__svg" :role "img"
                    :aria-label (ts :landing/portage.section-aria)}
                   (for [{:keys [n x y d anchor]} bridges
                         :let [t (/ (- x 16) 1312)]]
                     (d/g {:key n :class (str "ap-tz-walk__bridge" (when (= n 8) " is-rialto"))
                           :style #js {"--t" t}}
                          (when (seq d) (d/path {:d d}))
                          (d/text {:x x :y y :text-anchor (or anchor "middle")} n)))
                   (d/text {:class "ap-tz-walk__rialto" :x 742 :y 50} (t :landing/portage.tag-rialto))
                   (d/line {:class "ap-tz-walk__base" :x1 16 :y1 160 :x2 1328 :y2 160})
                   (d/line {:class "ap-tz-walk__route" :x1 16 :y1 160 :x2 1328 :y2 160 :pathLength 1}))
            (d/figcaption {:class "ap-tz-walk__km ap-label"}
                          (d/span (t :landing/portage.section-start))
                          (d/span {:class "ap-tz-walk__title max-sm:!hidden"} (t :landing/portage.section-title))
                          (d/span (t :landing/portage.section-end)))))

(defnc portage-teaser []
  (let [[ref played?] (use-played)]
    (d/section {:class "ap-sec ap-tz-portage" :aria-labelledby "tz-portage-title"}
               (d/div {:class "ap-wrap ap-tz-portage__head"}
                      (d/p {:class "ap-label ap-muted m-0"} (t :landing/portage.eyebrow))
                      (d/h2 {:id "tz-portage-title" :class "ap-tz-portage__title"}
                            (t :landing/portage.title {:red (i18n/tag "span" {:className "text-red-text"})})))
               (d/figure {:class "ap-tz-map m-0" :data-played (when played? "")}
                         (d/div {:class "ap-tz-map__frame"}
                                (d/img {:src (str media "portage/barbari-1440.webp")
                                        :srcSet (srcset "portage/barbari" [640 960 1440 2000])
                                        :sizes "100vw"
                                        :alt (ts :landing/portage.map-alt)
                                        :loading "lazy" :decoding "async"})
                                (d/svg {:viewBox "0 0 2000 964" :preserveAspectRatio "none" :aria-hidden true}
                                       (for [[i [cx cy r]] (map-indexed vector [[119 386 37.4] [735 373 45.9] [1299 445 28.9]])]
                                         (d/circle {:key i :class "ap-tz-map__ring" :cx cx :cy cy :r r
                                                    :style #js {"--i" i}})))
                                (d/span {:class "ap-tz-map__tag" :style #js {:left "2%" :top "35%" "--i" 0 "--x" "0%"}} (t :landing/portage.tag-start))
                                (d/span {:class "ap-tz-map__tag" :style #js {:left "36.75%" :top "33%" "--i" 1}} (t :landing/portage.tag-rialto))
                                (d/span {:class "ap-tz-map__tag" :style #js {:left "64.95%" :top "42.2%" "--i" 2}} (t :landing/portage.tag-end)))
                         (d/figcaption {:class "ap-wrap ap-caption ap-muted mt-2"}
                                       (t :landing/portage.map-cap)))
               (d/div {:class "ap-wrap ap-tz-portage__grid"}
                      (d/figure {:class "ap-tz-porter m-0"}
                                (d/div {:class "ap-figure__frame" :style #js {"--ar" "1045/1504"}}
                                       (d/img {:src (str media "portage/vecellio__pool-640.webp")
                                               :srcSet (srcset "portage/vecellio__pool" [320 640 960 1045])
                                               :sizes "(min-width: 960px) 22vw, 40vw"
                                               :alt (ts :landing/portage.porter-alt)
                                               :loading "lazy" :decoding "async"}))
                                (d/figcaption {:class "ap-caption ap-muted"}
                                              (t :landing/portage.porter-cap)))
                      (d/div {:class "ap-tz-portage__body"}
                             (d/dl {:class "ap-tz-facts"}
                                   (for [k walk-facts
                                         :let [f #(t (keyword "landing" (str "portage." k "." %)))]]
                                     (d/div {:key k}
                                            (d/dt (d/span {:class "ap-tz-facts__v"} (f "v")) (d/span {:class "ap-tz-facts__u"} (f "u")))
                                            (d/dd (f "note")))))
                             (d/div {:ref ref}
                                    ($ walk-section {:played? played?}))
                             (d/div {:class "ap-tz-portage__go"}
                                    (d/a {:class "ap-btn ap-btn--red" :href (i18n/href "/portage")}
                                         (t :landing/portage.follow) (d/span {:aria-hidden true} "→"))
                                    (d/nav {:aria-label (ts :landing/portage.sheets)}
                                           (d/ul {:class "ap-tz-stations"}
                                                 (for [[slug n] stations]
                                                   (d/li {:key slug}
                                                         (d/a {:href (i18n/href (str "/portage/" slug))}
                                                              (d/i n) (t (keyword "landing" (str "portage.st." slug))))))))))))))


;; ── The walks ───────────────────────────────────────────────────────────

(defnc walks-teaser
  "The walks out from Tesa 41: a photograph, a line, every walk day as a
   square (walked, next, planned) and the way in."
  []
  (let [walks (hooks/use-memo :once (wm/with-status))
        done (filter #(= :walked (:status %)) walks)
        nxt (some #(when (:next? %) %) walks)]
    (d/section {:class "ap-wt" :aria-labelledby "wt-title"}
               (d/div {:class "ap-wrap ap-wt__grid"}
                      (d/a {:class "ap-wt__media" :href (i18n/href "/walks") :tab-index -1 :aria-hidden true}
                           ($ picture {:src (str media "walks/2026-11-06/dsc08011.tif")
                                       :sizes "(min-width: 960px) 55vw, 100vw" :alt ""})
                           (d/span {:class "ap-wt__tag ap-label"} (t :landing/walks.tag)))
                      (d/div {:class "ap-wt__text"}
                             (d/p {:class "ap-label ap-muted m-0"} (t :landing/walks.eyebrow))
                             (d/h2 {:id "wt-title" :class "ap-wt__title"} (t :landing/walks.title))
                             (d/p {:class "ap-lede m-0 max-w-[30ch]"}
                                  (t :landing/walks.lede)
                                  (t :landing/walks.count {:done (count done) :left (- (count walks) (count done))}))
                             (d/ol {:class "ap-wt__days" :aria-label (ts :landing/walks.days)}
                                   (for [{:keys [id date status next?] :as w} walks]
                                     (d/li {:key id :data-status (name status) :data-next (when next? "")
                                            :aria-label (ts :landing/walks.day {:date (wm/short-date date) :status (wm/status-label w)})}
                                           (d/b (wm/day-of date)) (wm/weekday-abbr date))))
                             (when nxt
                               (d/p {:class "ap-data m-0"}
                                    (t :landing/walks.next {:date (wm/long-date (:date nxt)) :time (:depart nxt) :n (:works nxt)})))
                             (d/div {:class "flex flex-wrap gap-2"}
                                    (d/a {:class "ap-btn ap-btn--yellow" :href (i18n/href "/walks")}
                                         (t :landing/walks.see) (d/span {:aria-hidden true} "→"))
                                    (d/a {:class "ap-btn ap-btn--ghost" :href (i18n/href "/walks#schedule")} (t :landing/walks.join))))))))
