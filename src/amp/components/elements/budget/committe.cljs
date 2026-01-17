(ns amp.components.elements.budget.committe
  (:require
   [amp.components.elements.captioned-image :refer [captioned-image]]
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; --- copy: committee-only ------------------------------------------------------

(defnc preview
  [{:keys []}]
  (d/div {:class "space-y-3 p-4"}
         (d/p {}
              (d/span {:class "text-slate-300"}
                      "To support the scale of this undertaking, a dedicated ")
              (d/span {:class "font-semibold text-pink-400"} "fundraising committee")
              (d/span {:class "text-slate-300"}
                      " has been formed to guide outreach, steward donor relationships, and advance the fundraising strategy required to deliver an ambitious international project in Venice."))))

(defnc details
  [{:keys []}]
  (d/div {:class "text-xl text-slate-100 p-4 space-y-3"}
         (d/p {}
              (d/span {:class "text-slate-300"}
                      "To support the scale of this undertaking, a dedicated ")
              (d/span {:class "font-semibold text-pink-400"} "fundraising committee")
              (d/span {:class "text-slate-300"}
                      " has been formed to guide outreach, steward donor relationships, and advance the fundraising strategy required to deliver an ambitious international project in Venice."))

         (d/p {:class "text-slate-300"}
              "The committee works in close coordination with Pavilion leadership to expand networks, cultivate institutional and private support, and sustain momentum across the full duration of the Biennale.")

         (d/div {:class "space-y-2"}
                (d/p {:class "text-slate-300"} "The committee is led by:")
                (d/ul {:class "ml-6 list-['-'] marker:text-slate-400 text-slate-100"}
                      (d/li {:class "px-4 italic text-slate-300"} "Archbishop Hovnan Derderian")
                      (d/li {:class "px-4 italic text-slate-300"} "Tony Shafrazi")
                      (d/li {:class "px-4 italic text-slate-300"} "Tina Chakarian")
                      (d/li {:class "px-4 italic text-slate-300"} "Rafi Ourfalian")
                      (d/li {:class "px-4 italic text-slate-300"} "Khachik Khudikyan")
                      (d/li {:class "px-4 italic text-slate-300"} "Andranik Torosyan")
                      (d/li {:class "px-4 italic text-slate-300"} "Aram Alajajian")
                      (d/li {:class "px-4 italic text-slate-300"} "Vik Hovsepian")))

         (d/p {:class "text-slate-300"}
              "The committee plays an active role in introducing prospective supporters, facilitating conversations, and strengthening long-term relationships that extend beyond opening week—ensuring the Pavilion is resourced, accountable, and delivered at the highest standard.")))

;; --- UI: member gallery --------------------------------------------------------

(def committee-members
  [{:name "Archbishop Hovnan Derderian"
    :role "Committee Lead"
    :img-src "https://atd-722658831.imgix.net/committee/hovnan.png"
    :credit "Courtesy of the Committee"}
   {:name "Tony Shafrazi"
    :role "Chief Curator"
    :img-src "https://atd-722658831.imgix.net/committee/tony.png"
    :credit "Courtesy of the Committee"}
   {:name "Tina Chakarian"
    :role "Curator"
    :img-src "https://atd-722658831.imgix.net/committee/tina.png"
    :credit "Courtesy of the Committee"}
   {:name "Zadik Zadikian"
    :role "Artist"
    :img-src "https://atd-722658831.imgix.net/committee/zadik.png"
    :credit "Courtesy of the Committee"}
   {:name "Rafi Ourfalian"
    :role "Committee Member"
    :img-src "https://atd-722658831.imgix.net/committee/rafi.png"
    :credit "Courtesy of the Committee"}
   {:name "Khachik Khudikyan"
    :role "Committee Member"
    :img-src "https://atd-722658831.imgix.net/committee/chris.png"
    :credit "Courtesy of the Committee"}
   {:name "Andranik Torosyan"
    :role "Committee Member"
    :img-src "https://atd-722658831.imgix.net/committee/andy.png"
    :credit "Courtesy of the Committee"}
   {:name "Aram Alajajian"
    :role "Committee Member"
    :img-src "https://atd-722658831.imgix.net/committee/aram.png"
    :credit "Courtesy of the Committee"}
   {:name "Vik Hovsepian"
    :role "Committee Member"
    :credit "Courtesy of the Committee"}])

(defnc committee-member-card
  [{:keys [name role img-src credit]
    :as opts}]
  (d/div {:class "rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-sm"}
         (d/div {:class "p-3"}
                ;; If you prefer to use your existing captioned-image component:
                ($ captioned-image
                   {:img-src img-src}))
         ;; Optional: a text row under the image, if you want stronger hierarchy
         (d/div {:class "px-4 pb-4"}
                (d/div {:class "text-base font-semibold text-slate-100"} name)
                (when role
                  (d/div {:class "text-sm text-slate-300"} role)))))

(defnc committee-gallery
  [{:keys []}]
  (d/div {:class "px-4 mt-6"}
         (d/div {:class "flex items-end justify-between"}
                (d/h3 {:class "text-lg font-semibold text-slate-100"} "Committee Members"))
         (d/div {:class "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}
                (map (fn [{:keys [name role img-src credit]
                           :as opts}]
                       (d/div {:key name}
                              (when img-src
                                ($ committee-member-card {:name name
                                                          :role role
                                                          :img-src img-src
                                                          :credit credit}))))
                     committee-members))))

;; --- section component ---------------------------------------------------------

(defnc committee
  [{:keys [id subtitle title]}]
  (d/section {:id id :class "space-y-4"}
             ($ expandable-text-area-2 {:section-hint subtitle
                                        :title title
                                        :expand-button-label "Read more"
                                        :preview-text preview
                                        :full-text details})
             ($ committee-gallery committee-members)))