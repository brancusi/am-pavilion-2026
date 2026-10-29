(ns amp.ui.lightbox
  "Full-screen film lightbox (design system: Lightbox). Rendered into
   <body> so no page transform or overflow clips it. Escape, the close
   button or a click on the backdrop closes it; page scroll is locked
   while it is open."
  (:require ["react-dom" :refer [createPortal]]
            [amp.data.films :as films]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.picture :refer [mux-poster]]
            [amp.utils.lazy-loading :refer-macros [lazy-component]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def lazy-film (lazy-component amp.ui.video-background/film-player))

(defnc film-lightbox
  "`film` is an entry of amp.data.films/films; nil renders nothing."
  [{:keys [film on-close]}]
  (let [close-ref (hooks/use-ref nil)]
    (hooks/use-effect
     [film]
     (when film
       (let [body (.-body js/document)
             prev-overflow (.. body -style -overflow)
             prev-focus (.-activeElement js/document)
             on-key (fn [e] (when (= "Escape" (.-key e)) (on-close)))]
         (set! (.. body -style -overflow) "hidden")
         (.addEventListener js/window "keydown" on-key)
         (some-> @close-ref (.focus))
         (fn []
           (set! (.. body -style -overflow) prev-overflow)
           (.removeEventListener js/window "keydown" on-key)
           (some-> prev-focus (.focus))))))
    (when film
      (let [{:keys [title playback-id poster where duration]} film]
        (createPortal
         (d/div {:class "ap-lightbox" :role "dialog" :aria-modal true :aria-label title
                 :on-click #(when (= (.-target %) (.-currentTarget %)) (on-close))}
                (d/div {:class "ap-lightbox__bar"}
                       (d/p {:class "ap-label m-0"}
                            (d/span {:class "text-yellow"} (films/running-time duration))
                            " · " title
                            (d/span {:class "ap-lightbox__where"} (str " · " where " · " (:when film))))
                       (d/button {:ref close-ref :class "ap-iconbtn" :aria-label "Close film"
                                  :on-click on-close}
                                 (d/svg {:viewBox "0 0 16 16" :fill "none" :stroke "currentColor"
                                         :stroke-width 1.6 :aria-hidden true}
                                        (d/path {:d "M3 3l10 10M13 3L3 13"}))))
                (d/div {:class "ap-lightbox__stage"}
                       ($ lazy-film {:key playback-id :playback-id playback-id :title title :fill? true
                                     :poster (mux-poster playback-id {:w 1600 :time poster})})))
         (.-body js/document))))))
