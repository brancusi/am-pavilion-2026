(ns amp.components.elements.budget.section-block
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))


(defnc section-block
  [{:keys [idx eyebrow title children]}]
  (d/div {}
         (d/div {:class "px-4 pt-12 text-slate-100"}
                (d/div {:class "mb-6 flex items-center gap-3"}
                       (d/div {:class "h-px w-10 bg-pink-500/70"})
                       (d/p {:class "font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500"}
                            (str idx ". " eyebrow)))
                (d/h2
                 {:class "
               font-mono
               font-bold
               uppercase
               leading-none
               text-5xl
               md:text-7xl
               "}
                 title))
         (d/div {:class "text-xl text-white-100"}
                children)))