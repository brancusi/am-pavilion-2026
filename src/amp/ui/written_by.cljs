(ns amp.ui.written-by
  (:require
   [amp.i18n :refer [t] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.dom :as d]))

(defcatalog "share")

(defnc written-by
  [{:keys [author class]}]
  (d/div {:class (str "flex items-baseline gap-2 " class)}
         (d/span {:class s/written-by-label}
                 (t :share/by))
         (d/span {:class s/written-by-name}
                 author)))
