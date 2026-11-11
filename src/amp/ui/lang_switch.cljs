(ns amp.ui.lang-switch
  "The language switch: EN · IT · ՀԱՅ. Each is a link to the page on screen
   in that language (same path, hash and query), so it works without
   JavaScript and in a new tab."
  (:require [amp.i18n :as i18n :refer [ts]]
            [amp.lib.defnc :refer [defnc]]
            [amp.state.provider :refer [use-main-state]]
            [amp.styles :as s]
            [helix.dom :as d]))

(defnc lang-switch
  [{:keys [class on-click tab-index]}]
  (let [[state _] (use-main-state)
        path (or (-> state :current-route :path) "/")
        current (i18n/locale)
        tail (when (exists? js/location) (str (.-search js/location) (.-hash js/location)))]
    (d/nav {:class (s/cx "ap-lang" class) :aria-label (ts :site/lang-label)}
           (for [l i18n/locales]
             (d/a {:key l
                   :class "ap-lang__a"
                   :href (str (i18n/href path l) tail)
                   :href-lang l
                   :lang l
                   :title (i18n/names l)
                   :aria-label (i18n/names l)
                   :aria-current (when (= l current) "true")
                   :tab-index tab-index
                   :on-click on-click}
                  (i18n/short-names l))))))
