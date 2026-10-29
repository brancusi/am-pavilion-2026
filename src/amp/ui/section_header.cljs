(ns amp.ui.section-header
  "Section head for narrative pages (design system: SectionHead): a mono
   eyebrow over a display title. Budget sections use the numbered
   `section-block`."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def section-display "ap-display-l")

(defnc section-eyebrow
  [{:keys [text]}]
  (d/p {:class "ap-label ap-muted m-0 mb-4 flex items-center gap-3"}
       (d/span {:class "h-px w-8 bg-rule-strong" :aria-hidden true})
       (d/span text)))

(defnc section-header
  "Complete section header block — eyebrow + title, with standard padding.
   Wraps children below the header."
  [{:keys [eyebrow title children]}]
  (d/div {:class (s/cx s/section-pt s/section-pb)}
         (d/div {:class (s/cx "px-4" s/text-primary)}
                (when eyebrow
                  ($ section-eyebrow {:text eyebrow}))
                (d/h2 {:class section-display} title))
         (d/div {:class (s/cx s/text-xl s/text-primary)}
                children)))
