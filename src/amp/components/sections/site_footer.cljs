(ns amp.components.sections.site-footer
  (:require
   [amp.components.ui.main-button :refer [main-button]]
   [amp.config]
   [amp.hooks.use-scroll-to :refer [use-scroll-to-id]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc site-footer [{:keys []}]
  (let [scroll-to-id (use-scroll-to-id)]
    (d/footer
     {:class "relative w-full font-display mt-12"}

     ;; ── Divider ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"})

     ;; ── Pull quote ──
     (d/div {:class "py-16 lg:py-24 px-6 flex justify-center"}
            (d/blockquote
             {:class "max-w-3xl text-center"}
             (d/p {:class (s/cx "text-xl lg:text-2xl italic font-light leading-relaxed" s/text-muted)}
                  "\u201CThe way you do anything is the way you do everything.\u201D")))

     ;; ── Divider ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"})

     ;; ── CTA + Contact grid ──
     (d/div {:class "py-16 lg:py-20 px-6 max-w-5xl mx-auto"}

            ;; Primary CTA
            (d/div {:class "text-center mb-16"}
                   (d/h2 {:class (s/cx "text-2xl lg:text-3xl font-semibold uppercase tracking-wider mb-3" s/text-primary)}
                         "Support the Pavilion")
                   (d/p {:class (s/cx "text-sm lg:text-base max-w-xl mx-auto mb-8" s/text-muted)}
                        "Your contribution directly supports Armenia\u2019s national presentation at the 61st Venice Biennale.")
                   (d/div {:class "flex justify-center"}
                          ($ main-button
                             {:title "Donate Now"
                              :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")})))

            ;; Three-column info
            (d/div {:class "grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm"}

                   ;; Contact
                   (d/div {:class "space-y-3"}
                          (d/h3 {:class (s/cx "text-[10px] font-medium uppercase tracking-[0.2em] mb-4" s/text-accent-50)}
                                "Get in Touch")
                          (d/a {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"
                                :class (s/cx "block transition-colors" s/text-secondary "hover:text-slate-900 dark:hover:text-white")}
                               "hello@armenianpavilion2026.org")
                          (d/a {:href "tel:+13234041152"
                                :class (s/cx "block transition-colors" s/text-secondary "hover:text-slate-900 dark:hover:text-white")}
                               "+1 323-404-1152"))

                   ;; Organization
                   (d/div {:class "space-y-3"}
                          (d/h3 {:class (s/cx "text-[10px] font-medium uppercase tracking-[0.2em] mb-4" s/text-accent-50)}
                                "501(c)(3) Non-Profit")
                          (d/p {:class s/text-secondary} "Fallen Angels Inc.")
                          (d/p {:class s/text-muted} "EIN: 92-2395513")
                          (d/p {:class s/text-muted} "Los Angeles, CA"))

                   ;; Quick links — landing page sections
                   (d/div {:class "space-y-3"}
                          (d/h3 {:class (s/cx "text-[10px] font-medium uppercase tracking-[0.2em] mb-4" s/text-accent-50)}
                                "Quick Links")
                          (d/button {:class (s/cx "block transition-colors text-left" s/text-secondary "hover:text-slate-900 dark:hover:text-white")
                                     :on-click #(scroll-to-id "video")}
                                    "The Film")
                          (d/button {:class (s/cx "block transition-colors text-left" s/text-secondary "hover:text-slate-900 dark:hover:text-white")
                                     :on-click #(scroll-to-id "press-release")}
                                    "Press Release")
                          (d/button {:class (s/cx "block transition-colors text-left" s/text-secondary "hover:text-slate-900 dark:hover:text-white")
                                     :on-click #(scroll-to-id "about-studio")}
                                    "The Studio"))))

     ;; ── Bottom bar ──
     (d/div {:class "w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"})

     (d/div {:class "py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto"}
            (d/div {:class "flex items-center gap-4"}
                   (d/img {:src "images/graphics/61_biennale_logo_line.svg"
                           :class "h-6 opacity-40 invert dark:invert-0"})
                   (d/span {:class (s/cx "text-[10px] uppercase tracking-[0.15em] whitespace-nowrap" s/text-muted)}
                           "Armenia Pavilion \u00B7 61st Venice Biennale"))
            (d/div {:class "flex items-center gap-4"}
                   (d/span {:class (s/cx "text-[10px]" s/text-muted)}
                           "\u00A9 2026 AZ Studios Inc.")
                   (d/span {:class (s/cx "text-[10px]" s/text-ghost)}
                           (str "v" amp.config/git-hash)))))))
