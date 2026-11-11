(ns amp.pages.blog.posts.the-studio-play-balance
  "Blog post: The Studio — Play, Balance, and the Life of Form. Text in
   resources/i18n/<locale>/post-the-studio-play-balance.json."
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

(defcatalog "post-the-studio-play-balance")

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; ---------------------------------------------------------------------------
;; Gallery slides
;; ---------------------------------------------------------------------------

(def ^:private gallery-data
  "Captions are catalog keys, looked up when the gallery renders."
  [["https://media.armenianpavilion.org/media/26/03/15/the_studio0493.jpg" 0.667
    :post-the-studio-play-balance/gallery.plaster-blocks]
   ["https://media.armenianpavilion.org/media/26/03/15/the_studio0492.jpg" 0.667
    :post-the-studio-play-balance/gallery.composition]
   ["https://media.armenianpavilion.org/media/26/03/15/the_studio0512.jpg" 0.667
    :post-the-studio-play-balance/gallery.arrangement]
   ["https://media.armenianpavilion.org/media/26/03/15/the_studio0479.jpg" 1.5
    :post-the-studio-play-balance/gallery.overview]])

(defn- gallery-slides []
  (let [credit (ts :post-the-studio-play-balance/gallery.credit)]
    (mapv (fn [[src ar k]] {:img-src src :aspect-ratio ar :caption (ts k) :credit credit})
          gallery-data)))

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

(defn- p [k]
  (d/p {:class s/body-base}
       (t k {:hl (i18n/tag "span" {:className s/em-strong})})))

(defnc post-content
  "Body of The Studio: Play, Balance, and the Life of Form post."
  [_props]
  (let [ref (hooks/use-ref nil)
        gallery-ref (hooks/use-ref nil)
        [_visited? visible?] (use-intersection-observer ref)
        [_gallery-visited? gallery-visible?] (use-intersection-observer gallery-ref)]
    (d/div {:class "space-y-6 pb-8"}

           (d/p {:class s/body-lg}
                (t :post-the-studio-play-balance/lede))

           (p :post-the-studio-play-balance/p1)

           (p :post-the-studio-play-balance/p2)

           (section-break)

           (p :post-the-studio-play-balance/p3)

           (p :post-the-studio-play-balance/p4)

           ;; Image gallery
           (d/div {:ref gallery-ref
                   :class "my-8 relative"}
                  ($ lazy-image-gallery {:enabled? gallery-visible?
                                         :slides   (gallery-slides)}))

           (section-break)

           ;; Magnetism section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 (t :post-the-studio-play-balance/h2-magnetism))

           (p :post-the-studio-play-balance/p5)

           (section-break)

           ;; Ephemeral structures section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 (t :post-the-studio-play-balance/h2-ephemeral))

           (p :post-the-studio-play-balance/p6)

           (p :post-the-studio-play-balance/p7)

           ;; Video
           (d/div {:ref ref :class "my-8"}
                  (d/div {:class "w-full aspect-[16/9]"}
                         ($ lazy-video {:playback-id  "nqkPCfL7DYfjkhxPJAWX5TmJ1XqVDcugkUZUvyt018HY"
                                        :aspect-ratio 1.77
                                        :should-play? visible?
                                        :allow-audio? false})))

           (p :post-the-studio-play-balance/p8)

           (section-break)

           ;; Venice section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 (t :post-the-studio-play-balance/h2-venice))

           (p :post-the-studio-play-balance/p9)

           (d/p {:class (s/cx s/body-closing)}
                (d/span {:class s/em-italic}
                        (t :post-the-studio-play-balance/closing))))))
