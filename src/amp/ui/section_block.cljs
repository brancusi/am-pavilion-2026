(ns amp.ui.section-block
  "Numbered section head (design system: SectionHead): a mono label with the
   section number over a display title."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.dom :as d]))

(defnc section-block
  [{:keys [idx eyebrow title children]}]
  (d/div {:class (s/cx s/section-pt s/section-pb)}
         (d/div {:class (s/cx "px-4 flex flex-col gap-4" s/text-primary)}
                (when (and idx eyebrow)
                  (d/p {:class "ap-label ap-muted m-0 flex items-center gap-3"}
                       (d/span {:class "text-red-text"} (str (when (< idx 10) "0") idx))
                       (d/span {:class "h-px w-8 bg-rule-strong" :aria-hidden true})
                       (d/span eyebrow)))
                (d/h2 {:class "ap-display-l"} title))
         (d/div {:class (s/cx s/text-xl s/text-primary)}
                children)))
