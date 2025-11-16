(ns amp.hooks.use-main-reducer
  (:require [helix.hooks :as hooks]
            [amp.reducers.api :refer [main-reducer]]))

(defn use-main-reducer
  [default-state]
  (let [[state dispatch!] (hooks/use-reducer main-reducer default-state)]
    [state dispatch!]))