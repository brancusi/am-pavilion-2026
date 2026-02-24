(ns amp.components.sections.artist-section
  (:require
   [amp.components.media.lazy-image-with-overlay :refer [lazy-image-with-overlay]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc artist-section
  [{:keys [id title]}]
  (let [ref (hooks/use-ref "artist-ref")
        [_visited? visible?] (use-intersection-observer ref {:threshold 0.05})
        tag-bg "bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"
        tag-style {:boxDecorationBreak "clone"
                   :WebkitBoxDecorationBreak "clone"}]
    (d/section
     {:id id
      :ref ref
      :class (s/cx s/section-pt s/section-pb)}

     ;; Section heading — blocky teaser style
     (when title
       (d/h2 {:class "font-display font-bold uppercase tracking-wider
                      text-2xl sm:text-3xl text-white dark:text-white
                      leading-relaxed mb-10 px-4"}
             (d/span {:class tag-bg :style tag-style} title)))

     (d/div {:class "px-4 sm:flex sm:gap-10 sm:items-start"}

            ;; Portrait — left column on desktop, full width on mobile
            (d/div
             {:class "w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0"}
             ($ lazy-image-with-overlay {:img-src "https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg"
                                         :fit "crop"
                                         :aspect-ratio 0.75
                                         :active? visible?}))

            ;; Text — right column on desktop
            (d/div
             {:class "sm:flex-1 sm:min-w-0"}

             ;; Name
             (d/p {:class "font-display font-bold uppercase tracking-wider
                           text-2xl sm:text-3xl text-white dark:text-white mb-2 leading-relaxed"}
                  (d/span {:class tag-bg :style tag-style} "Zadik Zadikian"))

             ;; Role
             (d/p {:class "font-display font-medium text-xs uppercase tracking-[0.2em]
                           text-amber-600 dark:text-amber-300/70 mb-6"} "Artist")

             ;; Quote
             (d/blockquote
              {:class "border-l-2 border-white/20 pl-6 my-8"}
              (d/p {:class (s/cx s/body-lg "italic")}
                   "\u201CIf you want to learn about something, become that thing and then study yourself.\u201D")
              (d/cite {:class (s/cx "block mt-3 not-italic" s/label-muted)}
                      "\u2014 Zadik Zadikian"))

             ;; Bio
             (d/p {:class (s/cx s/body-base "mb-6")}
                  "Zadik Zadikian (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works that challenge both the materials and ideologies of contemporary art. A daring escape from the Soviet Union in his youth marked the beginning of an extraordinary journey, from his training under "
                  (d/span {:class s/em-bold} "Benjamino Bufano")
                  " to his longstanding friendship with "
                  (d/span {:class s/em-bold} "Richard Serra")
                  ".")

             (d/p {:class (s/cx s/body-base "mb-6")}
                  "Zadikian\u2019s work, particularly his exploration of gilded forms, has established him as one of the leading sculptors in the realm of contemporary alchemy. His pieces, often crafted from gold leaf, suggest a transcendence of time and place, pushing boundaries while creating worlds that seem to belong to another realm entirely.")

             (d/p {:class (s/cx s/body-base)}
                  "Centered on the most basic unit\u2014the block, or brick\u2014which has been continuously used for building for over eleven millennia, Zadikian\u2019s simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through the assembly and fluid recombination of humanity\u2019s most common architectural building element."))))))
