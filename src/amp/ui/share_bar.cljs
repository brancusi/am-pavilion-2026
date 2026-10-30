(ns amp.ui.share-bar
  "Horizontal share-action bar, used under every blog post and in the footer.
   One-click sharing to the usual networks and messengers, email, the native
   OS share sheet (Instagram and the rest, on phones) and copy-to-clipboard."
  (:require
   [amp.ui.social-icons :refer [FacebookIcon XTwitterIcon LinkedInIcon
                                BlueskyIcon ThreadsIcon RedditIcon
                                WhatsAppIcon TelegramIcon PinterestIcon
                                EmailIcon ShareIcon LinkIcon CheckIcon]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; ---------------------------------------------------------------------------
;; Share URL builders
;; ---------------------------------------------------------------------------

(defn- current-url []
  (.. js/window -location -href))

(def ^:private enc js/encodeURIComponent)

(defn- with-text
  "Networks that take one text field: the title, then the link."
  [url title]
  (enc (str title " " url)))

(defn- can-share? []
  (some? (.-share js/navigator)))

;; ---------------------------------------------------------------------------
;; Share actions
;; ---------------------------------------------------------------------------

(def ^:private share-actions
  "Ordered list of share targets. :href-fn receives (url title) and returns
   a URL string."
  [{:key     "facebook"
    :label   "Facebook"
    :icon    FacebookIcon
    :href-fn (fn [url _title] (str "https://www.facebook.com/sharer/sharer.php?u=" (enc url)))}
   {:key     "x"
    :label   "X / Twitter"
    :icon    XTwitterIcon
    :href-fn (fn [url title] (str "https://x.com/intent/tweet?url=" (enc url) "&text=" (enc title)))}
   {:key     "linkedin"
    :label   "LinkedIn"
    :icon    LinkedInIcon
    :href-fn (fn [url _title] (str "https://www.linkedin.com/sharing/share-offsite/?url=" (enc url)))}
   {:key     "bluesky"
    :label   "Bluesky"
    :icon    BlueskyIcon
    :href-fn (fn [url title] (str "https://bsky.app/intent/compose?text=" (with-text url title)))}
   {:key     "threads"
    :label   "Threads"
    :icon    ThreadsIcon
    :href-fn (fn [url title] (str "https://www.threads.com/intent/post?text=" (with-text url title)))}
   {:key     "reddit"
    :label   "Reddit"
    :icon    RedditIcon
    :href-fn (fn [url title] (str "https://www.reddit.com/submit?url=" (enc url) "&title=" (enc title)))}
   {:key     "pinterest"
    :label   "Pinterest"
    :icon    PinterestIcon
    :href-fn (fn [url title] (str "https://www.pinterest.com/pin/create/button/?url=" (enc url)
                                  "&description=" (enc title)))}
   {:key     "whatsapp"
    :label   "WhatsApp"
    :icon    WhatsAppIcon
    :href-fn (fn [url title] (str "https://wa.me/?text=" (with-text url title)))}
   {:key     "telegram"
    :label   "Telegram"
    :icon    TelegramIcon
    :href-fn (fn [url title] (str "https://t.me/share/url?url=" (enc url) "&text=" (enc title)))}
   {:key     "email"
    :label   "email"
    :icon    EmailIcon
    :self?   true
    :href-fn (fn [url title] (str "mailto:?subject=" (enc title) "&body=" (enc url)))}])

(def ^:private icon-btn-class
  "Square icon button (44px tap target) in the share bar."
  "ap-sharebtn")

;; ---------------------------------------------------------------------------
;; Component
;; ---------------------------------------------------------------------------

(defnc share-bar
  "Renders a row of share icons.
   Props:
     :title  — share text (the post title, or the site's name)
     :url    — the link to share; the current page when absent
     :label  — the label before the icons (default \"Share\"; \"\" for none)
     :class  — extra classes on the row (e.g. ap-sharebar--night)"
  [{:keys [title url label class]}]
  (let [[copied? set-copied!] (hooks/use-state false)
        share-title (or title "Armenia Pavilion 2026")
        link (or url (current-url))

        handle-copy
        (hooks/use-callback
         [link]
         (fn []
           (-> (.writeText js/navigator.clipboard link)
               (.then (fn []
                        (set-copied! true)
                        (js/setTimeout #(set-copied! false) 2000))))))

        handle-native-share
        (hooks/use-callback
         [share-title link]
         (fn []
           (when (can-share?)
             (.share js/navigator
                     #js {:title share-title
                          :text  share-title
                          :url   link}))))]

    (d/div {:class (str "ap-sharebar " class)}
           ;; Label
           (when (not= label "")
             (d/span {:class "ap-label ap-muted select-none"} (or label "Share")))

           ;; Action icons
           (d/div {:class "ap-sharebar__icons"}

                  ;; Network and messenger links
                  (for [{:keys [key label icon href-fn self?]} share-actions]
                    (d/a {:key        key
                          :href       (href-fn link share-title)
                          :title      (str (if self? "Share by " "Share on ") label)
                          :aria-label (str (if self? "Share by " "Share on ") label)
                          :class      icon-btn-class
                          & (when-not self? {:target "_blank" :rel "noopener noreferrer"})}
                         ($ icon {:class "w-[16px] h-[16px]"})))

                  ;; Native share button (opens OS share sheet — Instagram, Messages, etc.)
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
