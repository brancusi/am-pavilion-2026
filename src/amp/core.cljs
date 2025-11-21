(ns amp.core

  (:require ["gsap" :refer [gsap]]
            ["gsap/ScrollToPlugin" :refer [ScrollToPlugin]]
            ["gsap/ScrollTrigger" :refer [ScrollTrigger]]
            ["gsap/SplitText" :refer [SplitText]]
            ["react-dom/client" :as rdom]
            [amp.hooks.use-media-query :refer [use-touch-enabled]]
            [amp.components.navs.logo-nav :refer [logo-nav]]
            [amp.components.navs.donation-nav :refer [donation-nav]]
            [amp.components.navs.side-nav :refer [side-nav]]
            [amp.components.section-transitioner :refer [section-transitioner]]
            [amp.lib.defnc :refer [defnc]]
            [amp.providers.main-provider :refer [MainProvider]]
            [amp.reducers.requires]
            [amp.services.router :refer [router]]
            [helix.core :refer [$]]))

(defnc app []
  (let [is-desktop? (use-touch-enabled)]
    ($ MainProvider {:default-state {:current-section "hero"
                                     :current-subsection "start"}}
       ($ router
          (when is-desktop?
            ($ logo-nav))
          ($ donation-nav)
          #_($ side-nav)
          ($ section-transitioner)))))

(defonce root (rdom/createRoot (js/document.getElementById "app")))

(defn start
  []
  (tap> "Starting app")
  ;; Register all gsap plugins
  (.registerPlugin gsap ScrollToPlugin)
  (.registerPlugin gsap ScrollTrigger)
  (.registerPlugin gsap SplitText)

  (.render root ($ app)))

(defn init!
  []
  (start))
