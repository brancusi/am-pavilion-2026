(ns amp.hooks.use-scroll-to
  (:require
   [amp.utils.gsap :as gsap]

   ["gsap/ScrollToPlugin" :refer [ScrollToPlugin]]
   [helix.hooks :as hooks]))

(defn use-scroll-to
  "A React/Helix hook that returns helpers for GSAP-powered smooth scrolling.

  Returns:
  A map with:
  - :scroll-to-id  (fn [id & [duration]])
      Scrolls the main window to an element with the given DOM id.
      - id       - String DOM id (without the '#')
      - duration - Optional GSAP duration in seconds (default 1)

  - :scroll-to-ref (fn [ref & [duration]])
      Scrolls the main window to a DOM node stored in a Helix/React ref.
      - ref      - A ref created with (hooks/use-ref nil), containing a DOM node
      - duration - Optional GSAP duration in seconds (default 1)

  Example:
  (defnc nav []
    (let [{:keys [scroll-to-id]} (use-scroll-to)]
      ($ :nav
         ($ :button {:on-click #(scroll-to-id \"section1\")} \"Section 1\"))))

  (defnc page []
    (let [section-ref (hooks/use-ref nil)
          {:keys [scroll-to-ref]} (use-scroll-to)]
      ($ :<>
         ($ :button {:on-click #(scroll-to-ref section-ref)} \"Go to section\")
         ($ :section {:id \"section1\" :ref section-ref} \"Content\"))))"
  []

  (let [scroll-to-id (hooks/use-callback
                      :auto-deps
                      (fn [id & [duration]]
                        (let [id (if (.startsWith id "#")
                                   id
                                   (str "#" id))]
                          (gsap/window-to
                           {:duration (or duration 0.35)
                            :scrollTo {:y id
                                       :autoKill true}
                            :ease "power2.inOut"}))))]
    {:scroll-to-id scroll-to-id}))


(comment

  (gsap/window-to

   {:duration 1
    :scrollTo {:y "#about-tech"}
    :ease "power2.inOut"})

  ;;Keep from folding
  )
