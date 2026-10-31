(ns amp.ui.wayfinding
  "Design-system building blocks for the directions pages (/visit,
   /route-from-hotel-gabrielli, /delivery): the night page head with key
   facts, section heads, the live route map panel, numbered steps, the
   driver card and tap-to-call contacts. Data (addresses, phone numbers)
   lives in amp.ui.directions."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.pages.venue.map-config :as mc]
            [amp.ui.directions :refer [pavilion-address]]
            [amp.ui.lazy-map :refer [mapbox-map]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defn use-doc-lang
  "Sets <html lang> while a page shows content in `lang` (so screen readers
   pronounce the Italian correctly); back to English on leaving."
  [lang]
  (hooks/use-effect
   [lang]
   (set! (.. js/document -documentElement -lang) (name lang))
   #(set! (.. js/document -documentElement -lang) "en")))

(defn rich
  "Inline prose from plain strings and [:em \"text\"] segments."
  [segments]
  (map-indexed (fn [i seg]
                 (if (vector? seg)
                   (d/strong {:key i :class "font-medium"} (second seg))
                   seg))
               segments))

(defnc lang-switch
  "IT / EN segmented control."
  [{:keys [lang on-change]}]
  (d/div {:class "ap-lang" :role "group" :aria-label "Lingua / Language"}
         (for [[k label] [[:it "IT"] [:en "EN"]]]
           (d/button {:key label :type "button" :aria-pressed (= k lang)
                      :lang (name k) :on-click #(on-change k)}
                     label))))

(defnc page-head
  "Night band at the top of a directions page: eyebrow, title, lede and a
   grid of key facts ([label value] pairs). `aside` sits top right (the
   language switch)."
  [{:keys [eyebrow title lede facts aside]}]
  (<>
   (d/section {:class "ap-vhead"}
              (d/div {:class "ap-wrap ap-vhead__grid"}
                     (d/div {:class "flex flex-col gap-5"}
                            (d/div {:class "flex items-start justify-between gap-4"}
                                   (d/p {:class "ap-label m-0 text-yellow"} eyebrow)
                                   (when aside (d/div {:class "ap-vhead__aside"} aside)))
                            (d/h1 {:class "ap-display-xl"} title)
                            (when lede (d/p {:class "ap-lede max-w-[40ch] m-0"} lede)))
                     (when (seq facts)
                       (d/dl {:class "ap-keyfacts"}
                             (for [[k v] facts]
                               (d/div {:key k} (d/dt k) (d/dd v)))))))
   (d/div {:class "ap-hero__strip" :aria-hidden true}
          (for [i (range 9)] (d/i {:key i})))))

(defnc section-head
  [{:keys [label title lede id]}]
  (d/div {:class "flex flex-col gap-3 mb-8 max-w-[60ch]"}
         (when label (d/p {:class "ap-label ap-muted m-0"} label))
         (d/h2 {:class "ap-h1" :id id} title)
         (when lede (d/p {:class "ap-body m-0"} lede))))

(defnc steps
  "Numbered route steps. `water?` draws the blue rail; the last step is the
   red pavilion square. Items are strings or {:title :body :dist}."
  [{:keys [items water?]}]
  (d/ol {:class (str "ap-steps" (when water? " ap-steps--water"))}
        (map-indexed
         (fn [i item]
           (let [{:keys [title body dist]} (if (string? item) {:body item} item)]
             (d/li {:key i :class (str "ap-step" (when (= i (dec (count items))) " ap-step--end"))}
                   (d/span {:class "ap-step__dist"} (or dist (str "0" (inc i))))
                   (when title (d/h3 {:class "ap-step__title"} title))
                   (d/p {:class "ap-step__body"} body))))
         items)))

(defnc tel-row
  [{:keys [label contact note on-blue?]}]
  (let [{:keys [tel display]} contact]
    (d/a {:class (str "ap-telrow" (when on-blue? " ap-telrow--blue")) :href (str "tel:" tel)}
         (d/span {:class "ap-label"} label)
         (d/span {:class "ap-telrow__num"} display)
         (when note (d/span {:class "ap-caption"} note)))))

(defnc contacts
  "Card of tap-to-call contacts: items are [label contact note?]."
  [{:keys [title intro items]}]
  (d/div {:class "ap-contacts"}
         (when title (d/p {:class "ap-label m-0"} title))
         (when intro (d/p {:class "ap-body-s m-0"} intro))
         (d/div {:class "ap-contacts__list"}
                (for [[label contact note] items]
                  ($ tel-row {:key label :label label :contact contact :note note})))))

(defnc address
  [{:keys [title lines] :or {lines pavilion-address}}]
  (d/div {:class "flex flex-col gap-2"}
         (when title (d/p {:class "ap-label ap-muted m-0"} title))
         (d/address {:class "not-italic ap-h3 !font-normal"}
                    (map-indexed (fn [i line]
                                   (d/span {:key i :class (when (< i 2) "font-medium")} line (d/br)))
                                 lines))))

(defnc route-map
  "Map panel (design system: MapGuide): head, live map, legend, caption and
   actions. `map` is the props map for amp.ui.lazy-map/mapbox-map; `legend`
   is a seq of #{:walk :water :pav :stop} with labels."
  [{:keys [label title meta map legend caption actions tall?]}]
  (d/section {:class "ap-map ap-map--stack"}
             (when title
               (d/div {:class "ap-map__head"}
                      (when label (d/p {:class "ap-label ap-muted m-0"} label))
                      (d/h3 {:class "ap-h2"} title)
                      (when meta (d/p {:class "ap-caption m-0"} meta))))
             (d/div {:class (str "ap-map__live" (when tall? " ap-map__live--tall"))}
                    ($ mapbox-map {& (merge {:class "!h-full" :interactive? false} map)}))
             (when (seq legend)
               (d/div {:class "ap-legend"}
                      (for [[k text] legend]
                        (d/span {:key text} (d/i {:class (name k)}) text))))
             (when caption (d/p {:class "ap-caption m-0 px-4 pt-3"} caption))
             (when actions (d/div {:class "ap-map__actions"} actions))))

(def galeazze-map
  "Live map of the last leg: the Rio delle Galeazze entrance to the landing."
  {:initial-view mc/water-taxi-initial-view
   :bounds mc/galeazze-bounds
   :ant-paths mc/water-taxi-ant-paths
   :layers mc/water-taxi-layers
   :labels-url mc/water-taxi-data-url})

(defnc driver-card
  "The card shown to a water-taxi or boat driver. `c` holds the copy:
   :subtitle :authorized [..] :before-title :before-body :before-quote
   :contacts [[label contact] ..] :before-note :entrance-title
   :entrance-name :entrance-body :entrance-warn, optional :steps-title
   :steps [..] and :map-caption. `lang` sets the card's language."
  [{:keys [c lang children]}]
  (d/div {:class "ap-taxicard" :lang (name lang)}
         (d/p {:class "ap-label m-0 text-blue-text"} (:subtitle c))
         (for [para (:authorized c)]
           (d/p {:key para :class "ap-body m-0"} para))
         (d/div {:class "ap-callout ap-callout--blue"}
                (d/span {:class "ap-label"} (:before-title c))
                (d/span {:class "ap-body-s"} (:before-body c))
                (d/span {:class "ap-taxicard__quote"} (:before-quote c))
                (d/div {:class "grid sm:grid-cols-2 gap-x-6 mt-1"}
                       (for [[label contact] (:contacts c)]
                         ($ tel-row {:key label :label label :contact contact :on-blue? true})))
                (when (:before-note c)
                  (d/span {:class "ap-caption !text-on-blue"} (:before-note c))))
         (d/div {:class "flex flex-col gap-1.5"}
                (d/p {:class "ap-label ap-muted m-0"} (:entrance-title c))
                (d/p {:class "ap-h2 m-0"} (:entrance-name c))
                (d/p {:class "ap-body-s m-0"} (:entrance-body c)))
         (d/p {:class "ap-taxicard__warn"} (:entrance-warn c))
         (when (seq (:steps c))
           (d/div {:class "flex flex-col gap-4"}
                  (d/p {:class "ap-label ap-muted m-0"} (:steps-title c))
                  ($ steps {:items (:steps c) :water? true})))
         ($ route-map {:map (assoc galeazze-map :lang lang) :caption (:map-caption c)
                       :legend [[:water (if (= lang :it) "Percorso in acqua" "Water route")]
                                [:pav (if (= lang :it) "Padiglione Armenia" "Armenian Pavilion")]]})
         children))
