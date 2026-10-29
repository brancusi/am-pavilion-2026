(ns amp.nav.menu
  "Site header (design system: SiteHeader). Sticky paper bar with the
   StudioMark and name; inline links from 960px, a full-screen numbered
   menu sheet below that."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.services.router :as router]
            [amp.state.provider :refer [use-main-state]]
            [amp.ui.studio-mark :refer [studio-mark]]
            [amp.ui.theme-toggle :refer [theme-toggle]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [reitit.frontend.easy :as rfe]))

(def nav-items
  "The pages in the main menu, in order."
  [{:path "/"       :title "Exhibition"}
   {:path "/artist" :title "Artist"}
   {:path "/visit"  :title "Visit"}
   {:path "/blog"   :title "Journal"}
   {:path "/press"  :title "Press"}])

(defn- active?
  "A nav item is current when the path matches, or for the Journal, any post."
  [item current-path]
  (let [p (or current-path "/")]
    (if (= (:path item) "/")
      (= p "/")
      (.startsWith p (:path item)))))

(defnc menu-icon [{:keys [open?]}]
  (d/svg {:viewBox "0 0 24 24" :fill "none" :stroke "currentColor"
          :stroke-width 2 :aria-hidden true}
         (if open?
           (d/path {:d "M5 5l14 14M19 5L5 19"})
           (d/path {:d "M3 7h18M3 12h18M3 17h18"}))))

(defnc menu
  "Site navigation: sticky header plus the phone menu sheet."
  [_props]
  (let [[state _] (use-main-state)
        [open? set-open!] (hooks/use-state false)
        current-path (-> state :current-route :path)
        close! (hooks/use-callback :once (fn [_] (set-open! false)))]

    ;; Close the sheet whenever the route changes, and lock page scroll while it is open.
    (hooks/use-effect [current-path] (set-open! false))
    (hooks/use-effect
     [open?]
     (set! (.. js/document -body -style -overflow) (if open? "hidden" ""))
     (fn [] (set! (.. js/document -body -style -overflow) "")))

    (<>
     (d/header {:class "ap-header"}
               (d/a {:class "ap-header__brand" :href "/" :on-click close!}
                    ($ studio-mark {:variants #{:pigment} :label nil})
                    (d/span {:class "ap-header__name"}
                            "Armenia Pavilion" (d/br)
                            (d/span {:class "ap-muted"} "Biennale Arte 2026")))
               (d/nav {:class "ap-header__nav" :aria-label "Main"}
                      (for [item nav-items]
                        (d/a {:key (:path item)
                              :href (:path item)
                              :aria-current (when (active? item current-path) "page")}
                             (:title item))))
               (d/div {:class "hidden lg:flex items-center"} ($ theme-toggle))
               (d/a {:class "ap-btn ap-btn--red"
                     :href (rfe/href ::router/donate)}
                    "Support")
               (d/button {:class "ap-header__menu"
                          :aria-expanded open?
                          :aria-controls "site-menu"
                          :aria-label (if open? "Close menu" "Open menu")
                          :on-click #(set-open! (not open?))}
                         ($ menu-icon {:open? open?})))

     (d/nav {:id "site-menu"
             :class "ap-sheet lg:hidden"
             :data-open (str open?)
             :aria-label "Menu"
             :aria-hidden (not open?)}
            (map-indexed
             (fn [i item]
               (d/a {:key (:path item)
                     :href (:path item)
                     :tab-index (if open? 0 -1)
                     :aria-current (when (active? item current-path) "page")
                     :on-click close!}
                    (d/span (str "0" (inc i)))
                    (:title item)))
             nav-items)
            (d/div {:class "ap-sheet__foot"}
                   (d/a {:class "ap-btn ap-btn--red ap-btn--block"
                         :href (rfe/href ::router/donate)
                         :tab-index (if open? 0 -1)
                         :on-click close!}
                        "Support the pavilion")
                   (d/div {:class "flex items-center justify-between"}
                          (d/p {:class "ap-caption m-0"}
                               "Arsenale Militare, Tesa 41 · 9 May – 22 November 2026")
                          ($ theme-toggle)))))))
