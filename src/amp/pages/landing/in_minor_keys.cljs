(ns amp.pages.landing.in-minor-keys
  "In Minor Keys, Koyo Kouoh's curatorial statement for the 61st
   International Art Exhibition, as an article: the opening, then the rest
   (with its quotations) behind Read the full statement, ending with how
   The Studio answers it. The text is in landing.json (imk.*)."
  (:require
   [amp.i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :refer [picture]]
   [amp.ui.read-more :refer [read-more]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defcatalog "landing")

(def ^:private statement
  "After the opening, in order: paragraphs (:p) and quotations (:q), by
   their key in landing.json (imk.<key>; a quotation's attribution is
   imk.<key>-cite)."
  [[:q "q1"]
   [:p "p1"] [:p "p2"] [:p "p3"]
   [:q "q2"]
   [:p "p4"] [:p "p5"] [:p "p6"] [:p "p7"] [:p "p8"] [:p "p9"] [:p "p10"]
   [:q "q3"]
   [:p "p11"] [:p "p12"] [:p "p13"] [:p "p14"] [:p "p15"] [:p "p16"] [:p "p17"]
   [:q "q4"]])

(defn- imk [k] (t (keyword "landing" (str "imk." k))))

(defn- blocks
  "Runs of paragraphs as article bodies; quotations between them, wide."
  [items]
  (->> (partition-by #(= :q (first %)) items)
       (mapcat (fn [run]
                 (if (= :q (ffirst run))
                   (for [[_ k] run
                         :let [text (imk k)]]
                     (d/blockquote {:key k
                                    :class (str "ap-quote ap-wide !my-4"
                                                (when (> (count text) 160) " ap-quote--long"))}
                                   (d/p text)
                                   (d/cite (imk (str k "-cite")))))
                   [(d/div {:key (second (first run)) :class "ap-article__body"}
                           (for [[_ k] run] (d/p {:key k} (imk k))))])))))

(defnc in-minor-keys
  [{:keys [id]}]
  (d/section {:id id :class "ap-article bg-paper-sunk pb-12 lg:pb-24"}
             (d/header {:class "ap-article__head"}
                       (d/p {:class "ap-label ap-muted m-0"} (t :landing/imk.eyebrow))
                       (d/h2 {:class "ap-display-l"} "In Minor Keys")
                       (d/div {:class "ap-author"}
                              (d/div {:class "ap-author__portrait"}
                                     ($ picture {:src "https://media.armenianpavilion.org/portraits/koyo.png"
                                                 :alt (ts :landing/imk.koyo) :sizes "96px"}))
                              (d/div
                               (d/p {:class "ap-h3 m-0"} (t :landing/imk.koyo))
                               (d/p {:class "ap-label ap-muted m-0 mt-1"} (t :landing/imk.role)))))
             (d/div {:class "ap-article__body"}
                    (d/p {:class "ap-breath"}
                         (for [k ["breath-1" "breath-2" "breath-3" "breath-4"]]
                           (d/span {:key k} (str "[" (imk k) "]"))))
                    (d/p {:class "ap-dropcap"} (t :landing/imk.opening)))
             ($ read-more {:label (t :landing/imk.more)}
                (blocks statement)
                (d/div {:class "ap-article__body"}
                       (d/h2 "The Studio — In Minor Keys")
                       (for [k ["s1" "s2" "s3" "s4" "s5" "s6"]]
                         (d/p {:key k} (imk k)))))))
