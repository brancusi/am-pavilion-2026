(ns amp.components.sections.contact-section
  (:require
   [amp.components.ui.main-button :refer [main-button]]
   [amp.config]
   [amp.hooks.use-scroll-to :refer [use-scroll-to-id]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc contact-section [{:keys []}]
  (let [scroll-to-id (use-scroll-to-id)]
    (d/footer
     {:class "relative w-full font-mono"}

     ;; ── Divider ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"})

     ;; ── Pull quote ──
     (d/div {:class "py-16 lg:py-24 px-6 flex justify-center"}
            (d/blockquote
             {:class "max-w-3xl text-center"}
             (d/p {:class "text-xl lg:text-2xl italic font-light text-slate-300 leading-relaxed"}
                  "\u201CCulture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power.\u201D")))

     ;; ── Divider ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"})

     ;; ── CTA + Contact grid ──
     (d/div {:class "py-16 lg:py-20 px-6 max-w-5xl mx-auto"}

            ;; Primary CTA
            (d/div {:class "text-center mb-16"}
                   (d/h2 {:class "text-2xl lg:text-3xl font-bold uppercase tracking-wider text-white mb-3"}
                         "Support the Pavilion")
                   (d/p {:class "text-slate-400 text-sm lg:text-base max-w-xl mx-auto mb-8"}
                        "Your contribution directly supports Armenia\u2019s national presentation at the 61st Venice Biennale\u2014a sovereign act of cultural visibility on the world stage.")
                   (d/div {:class "flex justify-center gap-4 flex-wrap"}
                          ($ main-button
                             {:title "Donate Now"
                              :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")})
                          (d/button {:class "font-mono text-[11px] font-bold uppercase tracking-[0.25em]
                                             text-slate-400 hover:text-white
                                             border border-slate-700 hover:border-slate-500
                                             px-6 py-3
                                             transition-colors duration-300 ease-in-out"
                                     :on-click #(scroll-to-id "section-8")}
                                    "Wire Transfer Info \u2192")))

            ;; Three-column info
            (d/div {:class "grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm"}

                   ;; Contact
                   (d/div {:class "space-y-3"}
                          (d/h3 {:class "text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-400/60 mb-4"}
                                "Get in Touch")
                          (d/a {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"
                                :class "block text-slate-300 hover:text-white transition-colors"}
                               "hello@armenianpavilion2026.org")
                          (d/a {:href "tel:+13234041152"
                                :class "block text-slate-300 hover:text-white transition-colors"}
                               "+1 323-404-1152"))

                   ;; Organization
                   (d/div {:class "space-y-3"}
                          (d/h3 {:class "text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-400/60 mb-4"}
                                "501(c)(3) Non-Profit")
                          (d/p {:class "text-slate-300"} "Fallen Angels Inc.")
                          (d/p {:class "text-slate-500"} "EIN: 92-2395513")
                          (d/p {:class "text-slate-500"} "Los Angeles, CA"))

                   ;; Quick links
                   (d/div {:class "space-y-3"}
                          (d/h3 {:class "text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-400/60 mb-4"}
                                "Quick Links")
                          (d/button {:class "block text-slate-300 hover:text-white transition-colors text-left"
                                     :on-click #(scroll-to-id "section-1")}
                                    "Press Release")
                          (d/button {:class "block text-slate-300 hover:text-white transition-colors text-left"
                                     :on-click #(scroll-to-id "section-3")}
                                    "Budget")
                          (d/button {:class "block text-slate-300 hover:text-white transition-colors text-left"
                                     :on-click #(scroll-to-id "section-5")}
                                    "Committee"))))

     ;; ── Bottom bar ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"})

     (d/div {:class "py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto"}
            (d/div {:class "flex items-center gap-4"}
                   (d/img {:src "images/graphics/61_biennale_logo.png"
                           :class "h-6 opacity-40"})
                   (d/span {:class "text-[10px] uppercase tracking-[0.15em] text-slate-600 whitespace-nowrap"}
                           "Armenia Pavilion \u00B7 61st Venice Biennale"))
            (d/div {:class "flex items-center gap-4"}
                   (d/span {:class "text-[10px] text-slate-600"}
                           "\u00A9 2026 AZ Studios Inc.")
                   (d/span {:class "text-[10px] text-slate-800"}
                           (str "v" amp.config/git-hash)))))))