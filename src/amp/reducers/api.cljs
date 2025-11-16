(ns amp.reducers.api)

(defmulti main-reducer
  (fn [_ action] (first action)))