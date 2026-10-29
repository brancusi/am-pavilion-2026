(ns amp.ui.share-bar
  "Horizontal share-action bar for blog posts.
   Provides one-click sharing to Facebook, X/Twitter, native OS share sheet
   (for Instagram, WhatsApp, etc. on mobile), and copy-to-clipboard."
  (:require
   [amp.ui.social-icons :refer [FacebookIcon XTwitterIcon ShareIcon
                                LinkIcon CheckIcon]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; ---------------------------------------------------------------------------
;; Share URL builders
;; ---------------------------------------------------------------------------

(defn- current-url []
  (.. js/window -location -href))

(defn- share-facebook [url]
  (str "https://www.facebook.com/sharer/sharer.php?u=" (js/encodeURIComponent url)))

(defn- share-x [url title]
  (str "https://x.com/intent/tweet?url="
       (js/encodeURIComponent url)
       "&text="
       (js/encodeURIComponent title)))

(defn- can-share? []
  (some? (.-share js/navigator)))

;; ---------------------------------------------------------------------------
;; Share actions
;; ---------------------------------------------------------------------------

(def ^:private share-actions
  "Ordered list of share targets. :href-fn receives (url title) and returns
   a URL string."
  [{:key       "facebook"
    :label     "Facebook"
    :icon      FacebookIcon
    :href-fn   (fn [url _title] (share-facebook url))}
   {:key       "x"
    :label     "X / Twitter"
    :icon      XTwitterIcon
    :href-fn   (fn [url title] (share-x url title))}])

(def ^:private icon-btn-class
  "Square icon button (44px tap target) in the share bar."
  "ap-sharebtn")

;; ---------------------------------------------------------------------------
;; Component
;; ---------------------------------------------------------------------------

(defnc share-bar
  "Renders a row of share icons for the current blog post.
   Props:
     :title  — The post title (used in share text)"
  [{:keys [title]}]
  (let [[copied? set-copied!] (hooks/use-state false)
        post-title (or title "Armenia Pavilion 2026")

        handle-copy
        (hooks/use-callback
         :once
         (fn []
           (-> (.writeText js/navigator.clipboard (current-url))
               (.then (fn []
                        (set-copied! true)
                        (js/setTimeout #(set-copied! false) 2000))))))

        handle-native-share
        (hooks/use-callback
         [post-title]
         (fn []
           (when (can-share?)
             (.share js/navigator
                     #js {:title post-title
                          :text  post-title
                          :url   (current-url)}))))]

    (d/div {:class "flex items-center gap-4"}
           ;; Label
           (d/span {:class "ap-label ap-muted select-none"} "Share")

           ;; Divider
           (d/span {:class "w-px h-4 bg-rule-strong" :aria-hidden true})

           ;; Action icons
           (d/div {:class "flex items-center gap-1"}

                  ;; Platform share links (Facebook, X)
                  (for [{:keys [key label icon href-fn]} share-actions]
                    (d/a {:key    key
                          :href   (href-fn (current-url) post-title)
                          :target "_blank"
                          :rel    "noopener noreferrer"
                          :title  (str "Share on " label)
                          :aria-label (str "Share on " label)
                          :class  icon-btn-class}
                         ($ icon {:class "w-[16px] h-[16px]"})))

                  ;; Native share button (opens OS share sheet — Instagram, WhatsApp, etc.)
                  (when (can-share?)
                    (d/button {:title    "Share via…"
                               :aria-label "Share via…"
                               :class    icon-btn-class
                               :on-click handle-native-share}
                              ($ ShareIcon {:class "w-[16px] h-[16px]"})))

                  ;; Copy link button
                  (d/button {:title    (if copied? "Copied!" "Copy link")
                             :aria-label (if copied? "Link copied" "Copy link")
                             :aria-live "polite"
                             :class    icon-btn-class
                             :data-copied (when copied? "")
                             :on-click handle-copy}
                            (if copied?
                              ($ CheckIcon {:class "w-[16px] h-[16px]"})
                              ($ LinkIcon  {:class "w-[16px] h-[16px]"})))))))
