(ns amp.ui.page-shell
  "Universal page wrapper for routed views (except landing).

   Provides:
   • `grey-grad` background + `text-primary` cascade
   • `pt-14` clearance for the fixed `h-14` nav bar
   • Centered `content-column` layout

   Usage:
       ($ page-shell
          ($ my-section-a)
          ($ my-section-b))"
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc page-shell
  [{:keys [children]}]
  (d/div {:class (s/cx s/page-shell
                       "flex items-center flex-col")}
         (d/div {:class (s/cx "flex flex-col" s/content-column)}
                children)))
