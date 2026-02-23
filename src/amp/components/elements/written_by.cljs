(ns amp.components.elements.written-by
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(defnc written-by
  [{:keys [author class]}]
  (d/div {:class (str "flex items-center gap-2 " class)}
         (d/span {:class "font-display font-medium text-[14px] uppercase tracking-[0.15em] text-slate-500"}
                 "By")
         (d/span {:class "font-display font-medium text-[20px] text-slate-400"}
                 author)))
