(ns user
  (:require
   [system]
   ["@heroicons/react/24/outline" :as icons]))

(defn tap-icon-names
  []
  (tap> (keys (js->clj icons))))


(system/start-system)


(comment
  (tap-icon-names)
  (tap> 100)
  ;; 
  )