(ns amp.core

  (:require ["gsap" :refer [gsap]]
            ["gsap/ScrollToPlugin" :refer [ScrollToPlugin]]
            ["gsap/SplitText" :refer [SplitText]]
            ["react-dom/client" :as rdom]
            [amp.hooks.use-media-query :refer [use-touch-enabled]]

            [amp.ui.section-transitioner :refer [section-transitioner]]
            [amp.lib.defnc :refer [defnc]]
            [amp.state.provider :refer [MainProvider]]
            [amp.services.router :refer [router]]
            [helix.core :refer [$]]))

(defnc app []
  (let [is-desktop? (use-touch-enabled)]
    ($ MainProvider {:default-state {}}
       ($ router
          ($ section-transitioner)))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn start
  []
  ;; Register all gsap plugins
  (.registerPlugin gsap ScrollToPlugin)
  (.registerPlugin gsap SplitText)

  (.render root ($ app)))

(def ^:private faces
  "The faces the first screen of any page uses. Loaded before the first
   render, so text never swaps from a fallback font and reflows."
  ["500 1em Jost" "400 1em Newsreader" "italic 400 1em Newsreader" "400 1em 'IBM Plex Mono'"])

(defn- fonts-ready
  "Resolves once `faces` have loaded, or after `ms`: a slow font network
   delays the first render by at most that much, then fonts swap as usual."
  [ms]
  (js/Promise.race
   #js [(if-let [fonts (.-fonts js/document)]
          (js/Promise.allSettled (into-array (map #(.load fonts %) faces)))
          (js/Promise.resolve))
        (js/Promise. (fn [resolve] (js/setTimeout resolve ms)))]))

(defn init!
  []
  (.then (fonts-ready 1200) start))
