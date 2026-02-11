(ns amp.components.threejs.copy-link-button
  "Button that copies a shareable link to the clipboard."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.components.icons :refer [DocumentIcon]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc copy-link-button
  "Top-right button that copies a piece URL to the clipboard.
   Props:
     :piece-id - the piece identifier used to construct the URL"
  [{:keys [piece-id]}]
  (let [[copied? set-copied!] (hooks/use-state false)]
    (d/button {:class (str "z-20 fixed top-0 right-0 m-2 p-2 rounded "
                           "bg-white/40 border-2 border-slate-800 "
                           "hover:bg-white/60 transition-colors")
               :title "Copy link to clipboard"
               :on-click (fn []
                           (let [url (str "https://armenianpavilion2026.org/mockups?piece=" piece-id)]
                             (-> (js/navigator.clipboard.writeText url)
                                 (.then (fn []
                                          (set-copied! true)
                                          (js/setTimeout #(set-copied! false) 2000))))))}
              (if copied?
                (d/span {:class "text-xs font-fira-code text-slate-800"} "Copied!")
                ($ DocumentIcon {:class "w-5 h-5 text-slate-800"})))))
