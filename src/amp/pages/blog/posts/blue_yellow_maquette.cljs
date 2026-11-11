(ns amp.pages.blog.posts.blue-yellow-maquette
  "Blog post: Blue Yellow Blue Yellow — the full-scale maquette as prelude to Venice.
   Text in resources/i18n/<locale>/post-blue-yellow-maquette.json."
  (:require
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "post-blue-yellow-maquette")

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; ---------------------------------------------------------------------------
;; Gallery slides — CNC milling process + interactive 3D mockup
;; ---------------------------------------------------------------------------

(def ^:private gallery-data
  "Captions and credits are catalog keys, looked up when the gallery renders."
  [{:img-src      "https://media.armenianpavilion.org/photos/02-13-26/Screenshot%202026-02-27%20at%209.02.01%E2%80%AFAM.png"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.cnc-milling
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00117198.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.milled-unit
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00116841.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.detail
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00116751.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.cnc-edge
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00116035.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.stacking-test
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00115488.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.alignment
    :credit       :post-blue-yellow-maquette/gallery.credit}

   ;; Interactive 3D mockup (mockup-007 from the archived mockup viewer)
   {:type         :threejs
    :aspect-ratio 0.75
    :caption      :post-blue-yellow-maquette/gallery.model
    :credit       :post-blue-yellow-maquette/gallery.model-credit
    :camera       {:position [150 150 150]
                   :target   [0 50 0]}
    :scene-data   {:lighting [[:ambient-light {:intensity 0.7}]
                              [:directional-light {:cast-shadow true
                                                   :position    [-100 120 60]
                                                   :intensity   1.5}]]
                   :data [{:bounds [36 36 48]
                           :layers [[{:color "#eb0000" :align :tl :dims [4 4 6]}
                                     {:color "#eb0000" :align :tr :dims [4 4 6]}
                                     {:color "#eb0000" :align :bl :dims [4 4 6]}
                                     {:color "#eb0000" :align :br :dims [4 4 6]}]]}
                          {:layers [[{:color "#ff7979" :align :tl :dims [36 36 48]}]]}
                          {:layers [[{:color "#ffb1b1" :align :tl :dims [36 8 12]}]]}
                          {:layers [[{:color "#ff9f9f" :align :tl :dims [12 6 12]}]]}
                          {:layers [[{:color "#eb0000" :align :tl :dims [4 4 4]}]]}]}}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00091415.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.assembly
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00088317.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.structure
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00086751.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.profile
    :credit       :post-blue-yellow-maquette/gallery.credit}

   {:img-src      "https://media.armenianpavilion.org/photos/02-13-26/foam_00091886.jpg"
    :aspect-ratio 1.77
    :caption      :post-blue-yellow-maquette/gallery.completed-unit
    :credit       :post-blue-yellow-maquette/gallery.credit}])

(defn- gallery-slides []
  (mapv #(-> % (update :caption ts) (update :credit ts)) gallery-data))

;; ---------------------------------------------------------------------------
;; Section divider
;; ---------------------------------------------------------------------------

(defn- section-break []
  (d/div {:class "my-10 flex justify-center"}
         (d/span {:class (s/cx s/text-faint "text-xl tracking-[0.5em]")}
                 "⸻")))

;; ---------------------------------------------------------------------------
;; Post content component
;; ---------------------------------------------------------------------------

(def ^:private hl
  "Rich-text handlers: <hl> for names and titles, <it> for the quotation."
  {:hl (i18n/tag "span" {:className s/em-strong})
   :it (i18n/tag "span" {:className s/em-italic})})

(defn- p
  ([k] (p k s/body-base))
  ([k cls] (d/p {:class cls} (t (keyword "post-blue-yellow-maquette" (name k)) hl))))

(defnc post-content
  "Body of the Blue Yellow Blue Yellow maquette post."
  [_props]
  (let [ref (hooks/use-ref nil)
        gallery-ref (hooks/use-ref nil)
        [_visited? visible?] (use-intersection-observer ref)
        [_gallery-visited? gallery-visible?] (use-intersection-observer gallery-ref)]
    (d/div {:class "space-y-6 pb-8"}

           ;; Subtitle
           (p :subtitle (s/cx s/font-display s/weight-medium s/text-muted
                              "text-lg sm:text-xl italic mb-2"))

           (p :lede s/body-lg)

           (p :p1)

           (p :p2)

           (p :p3 (s/cx s/body-base s/em-italic))

           ;; Video
           (d/div {:ref ref :class "my-8"}
                  (d/div {:class "w-full aspect-[16/9]"}
                         ($ lazy-video {:playback-id  "ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ"
                                        :aspect-ratio 1.77
                                        :should-play? visible?
                                        :allow-audio? true})))

           (section-break)

           ;; CNC section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 (t :post-blue-yellow-maquette/h2-cnc))

           (p :p4)

           (p :p5)

           (p :p6)

           (p :p7 (s/cx s/body-base s/em-strong))

           ;; Image gallery — CNC process photos + interactive 3D mockup
           (d/div {:ref gallery-ref
                   :class "my-8 relative"}
                  ($ lazy-image-gallery {:enabled? gallery-visible?
                                         :slides   (gallery-slides)}))

           (section-break)

           ;; Color section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 (t :post-blue-yellow-maquette/h2-color))

           (p :p8)

           (p :p9)

           (d/div {:class "my-6 space-y-1"}
                  (p :blue)
                  (p :yellow))

           (p :p10)

           (section-break)

           ;; Laboratory section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 (t :post-blue-yellow-maquette/h2-laboratory))

           (p :p11)

           (p :p12)

           (p :p13)

           (section-break)

           ;; Toward Venice section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 (t :post-blue-yellow-maquette/h2-venice))

           (p :p14)

           (p :p15)

           (d/div {:class "my-8 space-y-1"}
                  (p :coda-1)
                  (p :coda-2)
                  (p :coda-3))

           (d/p {:class (s/cx s/body-closing)}
                (d/span {:class s/em-italic}
                        (t :post-blue-yellow-maquette/closing))))))
