(ns amp.ui.theme-toggle
  "A sliding 3-position toggle: system / light / dark.
   Flat, borderless, square-cornered track with a sliding indicator.
   Reads & persists preference in localStorage.
   Toggles the `dark` class on <html>."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private ls-key "amp-theme")

(defn- system-prefers-dark? []
  (and (exists? js/window.matchMedia)
       (.-matches (.matchMedia js/window "(prefers-color-scheme: dark)"))))

(defn- read-preference
  "Return :dark, :light, or :system from localStorage, or nil."
  []
  (try
    (when-some [v (.getItem js/localStorage ls-key)]
      (keyword v))
    (catch :default _ nil)))

(defn- write-preference [theme]
  (try
    (.setItem js/localStorage ls-key (name theme))
    (catch :default _ nil)))

(defn- resolve-theme
  "Given a preference (:dark :light :system), return the effective :dark or :light."
  [pref]
  (if (= pref :system)
    (if (system-prefers-dark?) :dark :light)
    pref))

(defn- apply-theme! [pref]
  (let [effective (resolve-theme pref)
        cl (.-classList js/document.documentElement)]
    (if (= effective :dark)
      (.add cl "dark")
      (.remove cl "dark"))))

(def ^:private modes
  [[:system "System theme" (d/path {:d "M8 1.5a6.5 6.5 0 1 0 0 13zM8 1.5a6.5 6.5 0 0 1 0 13" :fill "none"})]
   [:light  "Light theme"  (d/g (d/circle {:cx 8 :cy 8 :r 3})
                                (d/path {:d "M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3"}))]
   [:dark   "Dark theme"   (d/path {:d "M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z"})]])

(defnc theme-toggle
  "Segmented control (design system: ThemeToggle): system | light | dark."
  [{:keys [class]}]
  (let [[mode set-mode!] (hooks/use-state
                          (fn []
                            (or (read-preference) :system)))

        select! (fn [m]
                  (set-mode! m)
                  (apply-theme! m)
                  (write-preference m))]

    ;; Apply theme on mount for ALL modes
    (hooks/use-effect
     :once
     (apply-theme! mode))

    ;; Listen to OS theme changes when in :system mode
    (hooks/use-effect
     [mode]
     (when (= mode :system)
       (let [mql (.matchMedia js/window "(prefers-color-scheme: dark)")
             handler (fn [_] (apply-theme! :system))]
         (.addEventListener mql "change" handler)
         (apply-theme! :system)
         (fn [] (.removeEventListener mql "change" handler)))))

    (d/div {:class (s/cx "ap-theme" class) :role "group" :aria-label "Color theme"}
           (for [[m label icon] modes]
             (d/button {:key (name m)
                        :class "ap-theme__btn"
                        :aria-label label
                        :aria-pressed (= mode m)
                        :title label
                        :on-click #(select! m)}
                       (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :stroke "currentColor"
                               :stroke-width 1.3 :stroke-linecap "round" :aria-hidden true}
                              icon))))))
