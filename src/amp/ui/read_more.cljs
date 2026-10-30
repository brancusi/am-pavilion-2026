(ns amp.ui.read-more
  "The rest of a long text inside an .ap-article, folded behind a button.
   Folded, it is hidden=\"until-found\", so find-in-page still reaches it
   (and opens it); open, its children sit in the article grid directly, so
   an .ap-wide quote among them spans the wide column."
  (:require [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [<>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc read-more
  [{:keys [label children]}]
  (let [[open? set-open!] (hooks/use-state false)
        ref (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (when-let [el @ref]
       (let [f #(set-open! true)]
         (.addEventListener el "beforematch" f)
         #(.removeEventListener el "beforematch" f))))
    (<>
     (d/div {:ref ref
             :class "ap-fold"
             :hidden (when-not open? "until-found")}
            children)
     (when-not open?
       (d/button {:type "button" :class "ap-btn ap-btn--ghost justify-self-start"
                  :aria-expanded false :on-click #(set-open! true)}
                 label)))))
