(ns amp.pages.landing.curators
  "The pavilion's curators: portrait, name, role and a short biography."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :refer [picture]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def curators
  [{:name "Tony Shafrazi"
    :role "Curator"
    :img  "https://media.armenianpavilion.org/committee/tony.png"
    :bio  "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."}
   {:name "Tina Chakarian"
    :role "Curator"
    :img  "https://media.armenianpavilion.org/committee/tina.png"
    :bio  "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."}])

(defnc curators-section
  [{:keys [id]}]
  (d/section {:id id :class "ap-sec lg:!pb-24"}
             (d/div {:class "ap-wrap"}
                    (d/div {:class "ap-head-row"}
                           (d/div
                            (d/p {:class "ap-label ap-muted m-0 mb-1"} "Armenian Pavilion")
                            (d/h2 {:class "ap-display-l"} "Curators")))
                    (d/ul {:class "ap-people"}
                          (for [{:keys [name role img bio]} curators]
                            (d/li {:key name :class "ap-person"}
                                  (d/div {:class "ap-person__portrait"}
                                         ($ picture {:src img :alt name
                                                     :sizes "(min-width: 720px) 160px, 112px"}))
                                  (d/div {:class "flex flex-col gap-2"}
                                         (d/h3 {:class "ap-h3 m-0"} name)
                                         (d/p {:class "ap-label ap-muted m-0"} role)
                                         (d/p {:class "ap-body-s m-0 mt-2"} bio))))))))
