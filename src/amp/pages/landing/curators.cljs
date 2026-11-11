(ns amp.pages.landing.curators
  "The pavilion's curators: portrait, name, role and a short biography."
  (:require
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :refer [picture]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defcatalog "landing")

(def curators
  "Name, role and biography are in landing.json (curators.<id>-name,
   curators.role, curators.<id>)."
  [{:id "tony" :img "https://media.armenianpavilion.org/committee/tony.png"}
   {:id "tina" :img "https://media.armenianpavilion.org/committee/tina.png"}])

(defnc curators-section
  [{:keys [id]}]
  (d/section {:id id :class "ap-sec lg:!pb-24"}
             (d/div {:class "ap-wrap"}
                    (d/div {:class "ap-head-row"}
                           (d/div
                            (d/p {:class "ap-label ap-muted m-0 mb-1"} (t :landing/curators.eyebrow))
                            (d/h2 {:class "ap-display-l"} (t :landing/curators.title))))
                    (d/ul {:class "ap-people"}
                          (for [{cid :id img :img} curators
                                :let [name (ts (keyword "landing" (str "curators." cid "-name")))]]
                            (d/li {:key cid :class "ap-person"}
                                  (d/div {:class "ap-person__portrait"}
                                         ($ picture {:src img :alt name
                                                     :sizes "(min-width: 720px) 160px, 112px"}))
                                  (d/div {:class "flex flex-col gap-2"}
                                         (d/h3 {:class "ap-h3 m-0"} name)
                                         (d/p {:class "ap-label ap-muted m-0"} (t :landing/curators.role))
                                         (d/p {:class "ap-body-s m-0 mt-2"} (t (keyword "landing" (str "curators." cid)))))))))))
