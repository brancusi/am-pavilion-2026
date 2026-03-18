(ns amp.pages.blog.posts.the-studio-play-balance
  "Blog post: The Studio — Play, Balance, and the Life of Form."
  (:require
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; ---------------------------------------------------------------------------
;; Gallery slides
;; ---------------------------------------------------------------------------

(def ^:private gallery-slides
  [{:img-src      "https://atd-722658831.imgix.net/media/26/03/15/the_studio0493.jpg"
    :aspect-ratio 0.667
    :caption      "THE STUDIO — PLASTER BLOCKS"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/media/26/03/15/the_studio0492.jpg"
    :aspect-ratio 0.667
    :caption      "THE STUDIO — COMPOSITION"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/media/26/03/15/the_studio0512.jpg"
    :aspect-ratio 0.667
    :caption      "THE STUDIO — ARRANGEMENT"
    :credit       "Los Angeles 2026"}

   {:img-src      "https://atd-722658831.imgix.net/media/26/03/15/the_studio0479.jpg"
    :aspect-ratio 1.5
    :caption      "THE STUDIO — OVERVIEW"
    :credit       "Los Angeles 2026"}])

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

(defnc post-content
  "Body of The Studio: Play, Balance, and the Life of Form post."
  [_props]
  (let [ref (hooks/use-ref nil)
        gallery-ref (hooks/use-ref nil)
        [_visited? visible?] (use-intersection-observer ref)
        [_gallery-visited? gallery-visible?] (use-intersection-observer gallery-ref)]
    (d/div {:class "space-y-6 pb-8"}

           ;; Subtitle
           (d/p {:class (s/cx s/font-display s/weight-medium s/text-muted
                              "text-lg sm:text-xl italic mb-2")}
                "Play, Balance, and the Life of Form")

           (d/p {:class s/body-lg}
                "What happens when sculpture begins not with monumentality, but with a single, beautiful unit?")

           (d/p {:class s/body-base}
                "At the heart of "
                (d/span {:class s/em-strong} "Zadik Zadikian\u2019s")
                " work for the upcoming Venice Biennale is a small plaster block: pigmented, finely "
                "finished, tactile, and deceptively simple. It recalls the directness of a child\u2019s "
                "wooden toy block, yet in Zadikian\u2019s hands it becomes something far more "
                "expansive\u2014a tool for improvisation, a way of sketching in space, and a means of "
                "thinking through form by touch.")

           (d/p {:class s/body-base}
                "These blocks invite rearrangement. They can be gathered, balanced, stacked, offset, "
                "turned, and recomposed in quick succession. A structure can emerge in moments, only to "
                "be taken apart and rebuilt into something entirely different. That speed matters. When "
                "the cost of trying is low, experimentation opens. One is willing to test an unlikely "
                "balance, an awkward interval, a strange relation between forms. Possibility expands. "
                "Structures appear that might never have been planned in advance.")

           (section-break)

           (d/p {:class s/body-base}
                "There is a musicality to this process. One arrangement leads to another the way a "
                "phrase suggests a variation, or a chord opens toward a new resolution. The work does "
                "not proceed by fixed blueprint so much as by rhythm, intuition, and responsive "
                "adjustment. Each block is complete in itself, yet it also asks to be placed into "
                "relation. Meaning is not imposed from outside; it arises through proximity, spacing, "
                "repetition, and tension.")

           (d/p {:class s/body-base}
                "What makes this language so compelling is that the unit itself is already resolved. "
                "Each block is made with extraordinary care. Color is embedded into the material "
                "rather than merely laid on its surface. The object has weight, finish, and presence. "
                "It does not need the larger composition in order to become beautiful. Instead, the "
                "larger structure remains free to stay abstract\u2014to operate as relation, tempo, "
                "and balance rather than symbol or illustration.")

           ;; Image gallery
           (d/div {:ref gallery-ref
                   :class "my-8 relative pinstripe-bold"}
                  ($ lazy-image-gallery {:enabled? gallery-visible?
                                         :slides   gallery-slides}))

           (section-break)

           ;; Magnetism section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 "Magnetism as Medium")

           (d/p {:class s/body-base}
                "Magnetism deepens this field of possibility. Embedded within the blocks, it is not "
                "simply a hidden technical device but a medium in its own right: an invisible force "
                "that shapes how one form meets another, how equilibrium is found, how tension is "
                "held. Magnetism allows delicate encounters, improbable balances, and temporary "
                "states that hover between stability and collapse. It introduces another layer of "
                "composition\u2014one not fully seen, but felt in the behavior of the work.")

           (section-break)

           ;; Ephemeral structures section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 "The Ephemeral Structure")

           (d/p {:class s/body-base}
                "Many of the structures that emerge are intentionally ephemeral. Some are not meant "
                "to last. They are assembled for a moment, held just long enough to be seen, and then "
                "disappear. A precarious formation may exist only for the instant required to make a "
                "photograph. In that sense, the work extends beyond the object into its document. The "
                "photograph becomes the memory of a structure that no longer occupies the physical "
                "world. What remains is not permanence, but evidence: a trace of balance, attention, "
                "and a fleeting decision made in real time.")

           (d/p {:class s/body-base}
                "This quality gives the work an unusual vitality. It exists between sculpture and "
                "event, between construction and disappearance. The temporary structure is no less "
                "real for being brief. In fact, its brevity may be what sharpens our attention to it. "
                "We see it not as something fixed and settled, but as something alive in the act of "
                "becoming.")

           ;; Video
           (d/div {:ref ref :class "my-8"}
                  (d/div {:class "w-full aspect-[16/9]"}
                         ($ lazy-video {:playback-id  "nqkPCfL7DYfjkhxPJAWX5TmJ1XqVDcugkUZUvyt018HY"
                                        :aspect-ratio 1.77
                                        :should-play? visible?
                                        :allow-audio? false})))

           (d/p {:class s/body-base}
                "The accompanying video of Zadik working with these elements makes this especially "
                "clear. It reveals the hand, the pause, the adjustment, the subtle testing of weight "
                "and relation. It shows sculpture not as static outcome, but as active thought made "
                "visible\u2014an unfolding conversation between eye, hand, material, and force.")

           (section-break)

           ;; Venice section
           (d/h2 {:class (s/cx s/heading-section "mb-4")}
                 "Toward Venice")

           (d/p {:class s/body-base}
                "For "
                (d/span {:class s/em-strong} "The Studio")
                ", Zadikian\u2019s project for Venice, this open-ended mode of making is central. "
                "The studio is not hidden behind the finished work; it becomes the work\u2019s "
                "condition and its form. Rearrangement, touch, risk, precision, and play all remain "
                "present. Viewers encounter not a closed statement, but a living field of exploration.")

           (d/p {:class (s/cx s/body-closing)}
                (d/span {:class s/em-italic}
                        "In a time that often demands speed, certainty, and resolution, these small "
                        "blocks propose another model: one in which beauty begins with attention, "
                        "experimentation remains visible, and form is allowed to remain fluid. A "
                        "modest unit, approached with care, can open onto an entire world.")))))

;; ---------------------------------------------------------------------------
;; Post metadata
;; ---------------------------------------------------------------------------

(def post-meta
  {:slug        "the-studio-play-balance"
   :title       "The Studio: Play, Balance, and the Life of Form"
   :date        "2026-03-15"
   :author      "Armenian Pavilion Team"
   :summary     "What happens when sculpture begins not with monumentality, but with a single, beautiful unit? At the heart of Zadik Zadikian\u2019s work is a small plaster block\u2014a tool for improvisation, rhythm, and thinking through form by touch."
   :cover-image "https://atd-722658831.imgix.net/media/26/03/15/the_studio0493.jpg"
   :component   post-content})
