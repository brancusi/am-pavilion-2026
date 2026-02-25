(ns amp.nav.menu
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.services.router :refer [site-map]]
            [amp.state.provider :refer [use-main-state]]
            [amp.styles :as s]
            [amp.ui.icons :refer [XMarkIcon]]
            [amp.ui.theme-toggle :refer [theme-toggle]]
            [helix.core :refer [$ <>]]
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
;; Cutout logo — W3Schools-style mix-blend-mode knockout.
;; Black bg + white text + multiply = white text pixels become transparent,
;; showing whatever page content is behind. For light mode we invert:
;; white bg + black text + screen = same effect, light version.
;;
;; CRITICAL: this element must NOT live inside the nav's glass container
;; (which has backdrop-filter → creates an isolation group that traps
;; blend modes). It is rendered as a sibling fixed element.
;; ---------------------------------------------------------------------------

(defnc cutout-logo
  "Fixed-position logo with CSS cutout text effect.
   Page content bleeds through the letterforms as you scroll."
  [_props]
  (d/a {:href "/"
        :class (s/cx "fixed top-0 left-0 z-50"
                     "h-14 px-4 md:px-8 flex items-center"
                     "bg-white dark:bg-black"
                     "text-black dark:text-white"
                     s/font-display
                     "text-sm font-semibold uppercase tracking-widest"
                     "mix-blend-multiply dark:mix-blend-screen"
                     "hover:opacity-80 transition-opacity duration-200")}
       "Armenian Pavilion"))

(defnc menu-link [{:keys [path title active? on-click]}]
  (d/a {:href path
        :on-click on-click
        :class (s/cx s/font-display
                     "block py-5 md:py-0 text-2xl md:text-sm font-medium md:font-normal uppercase tracking-wider"
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

    (<>
     ;; Cutout logo — rendered OUTSIDE the nav to avoid
     ;; backdrop-filter isolation trapping the blend mode.
     ($ cutout-logo)

     (d/nav {:class "fixed top-0 left-0 right-0 z-40"}

            ;; ---- Top bar (frosted glass) ----
            (d/div {:class (s/cx "flex items-center justify-between"
                                 "px-4 md:px-8 h-14"
                                 s/bg-glass
                                 s/border-glass)}

                   ;; Spacer matching the logo width so nav links don't overlap
                   (d/div {:class "w-[170px] shrink-0"})

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

            ;; ---- Mobile slide-down panel (frosted glass) ----
            (d/div {:class (s/cx "md:hidden overflow-hidden"
                                 "transition-all duration-300 ease-in-out"
                                 (if open?
                                   "max-h-[500px] opacity-100"
                                   "max-h-0 opacity-0"))}
                   (d/div {:class (s/cx s/bg-glass
                                        "px-6 pb-6 pt-2"
                                        "border-t border-white/10")}
                          (for [item nav-items]
                            (let [active? (= (:path item) (or current-path "/"))]
                              ($ menu-link {:key (:path item)
                                            :path (:path item)
                                            :title (:title item)
                                            :active? active?
                                            :on-click close!})))
                          ;; Theme toggle in mobile panel
                          (d/div {:class (s/cx "mt-4 pt-4 border-t" s/border-subtle)}
                                 ($ theme-toggle))))))))