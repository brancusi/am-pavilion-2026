(ns amp.nav.menu
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.services.router :refer [site-map]]
            [amp.state.provider :refer [use-main-state]]
            [amp.styles :as s]
            [amp.ui.icons :refer [XMarkIcon]]
            [amp.ui.theme-toggle :refer [theme-toggle]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

;; ---------------------------------------------------------------------------
;; Hamburger icon (three horizontal bars)
;; ---------------------------------------------------------------------------

(defnc hamburger-icon [{:keys [class]}]
  (d/svg {:xmlns "http://www.w3.org/2000/svg"
          :fill "none"
          :viewBox "0 0 24 24"
          :stroke-width "1.5"
          :stroke "currentColor"
          :class (or class "w-6 h-6")}
         (d/path {:stroke-linecap "round"
                  :stroke-linejoin "round"
                  :d "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})))

;; ---------------------------------------------------------------------------
;; Nav links for the menu — only the primary public pages (not budget/mockups)
;; ---------------------------------------------------------------------------

(def nav-items
  "The pages to show in the main menu.
   Derived from site-map, filtered to the public-facing pages."
  [{:path "/" :title "Home"}
   {:path "/visit" :title "Visit"}
   {:path "/artist" :title "Artist"}
   {:path "/blog" :title "Blog"}
   {:path "/press" :title "Press"}])

;; ---------------------------------------------------------------------------
;; Menu component
;; ---------------------------------------------------------------------------

(defnc menu-link [{:keys [path title active? on-click]}]
  (d/a {:href path
        :on-click on-click
        :class (s/cx s/font-display
                     "block py-3 md:py-0 text-sm uppercase tracking-wider"
                     "transition-colors duration-200"
                     (if active?
                       s/text-accent
                       (str s/text-secondary " hover:text-pink-600 dark:hover:text-pink-300")))}
       title))

(defnc menu
  "Site navigation menu. Collapsible hamburger on mobile, horizontal bar on desktop."
  [_props]
  (let [[state _] (use-main-state)
        [open? set-open!] (hooks/use-state false)

        current-route-name (-> state :current-route :data :name)
        current-path (-> state :current-route :path)

        toggle! (hooks/use-callback
                 [open?]
                 (fn [_e]
                   (set-open! (not open?))))

        close! (hooks/use-callback
                :always
                (fn [_e]
                  (set-open! false)))]

    (d/nav {:class "fixed top-0 left-0 right-0 z-40"}

           ;; ---- Top bar ----
           (d/div {:class (s/cx "flex items-center justify-between"
                                "px-4 md:px-8 h-14"
                                s/bg-chrome)}

                  ;; Site title / home link
                  (d/a {:href "/"
                        :class (s/cx s/font-display
                                     "text-sm font-semibold uppercase tracking-widest"
                                     s/text-primary
                                     "hover:text-pink-600 dark:hover:text-pink-300"
                                     "transition-colors duration-200")}
                       "Armenian Pavilion")

                  ;; Desktop nav links + theme toggle (hidden on mobile)
                  (d/div {:class "hidden md:flex items-center gap-8"}
                         (for [item nav-items]
                           (let [active? (= (:path item) (or current-path "/"))]
                             ($ menu-link {:key (:path item)
                                           :path (:path item)
                                           :title (:title item)
                                           :active? active?
                                           :& {}})))
                         ;; Separator + theme toggle
                         (d/div {:class (s/cx "pl-6 ml-2 border-l" s/border-subtle
                                              "flex items-center")}
                                ($ theme-toggle)))

                  ;; Mobile hamburger button (hidden on desktop)
                  (d/button {:class (s/cx "md:hidden p-2"
                                          s/text-primary
                                          "hover:text-pink-600 dark:hover:text-pink-300"
                                          "transition-colors duration-200")
                             :on-click toggle!
                             :aria-label (if open? "Close menu" "Open menu")}
                            (if open?
                              ($ XMarkIcon {:class "w-6 h-6"})
                              ($ hamburger-icon {:class "w-6 h-6"}))))

           ;; ---- Mobile slide-down panel ----
           (when open?
             (d/div {:class (s/cx "md:hidden"
                                  s/bg-chrome
                                  "px-6 pb-6 pt-2"
                                  "border-t" s/border-subtle)}
                    (for [item nav-items]
                      (let [active? (= (:path item) (or current-path "/"))]
                        ($ menu-link {:key (:path item)
                                      :path (:path item)
                                      :title (:title item)
                                      :active? active?
                                      :on-click close!})))
                    ;; Theme toggle in mobile panel
                    (d/div {:class (s/cx "mt-4 pt-4 border-t" s/border-subtle)}
                           ($ theme-toggle)))))))
