(ns amp.components.icons
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]))

(defnc ChevronRightIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m8.25 4.5 7.5 7.5-7.5 7.5"})))

(defnc SpeakerWaveIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"})))

(defnc SpeakerXMarkIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"})))



(defnc ArrowUpRightIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"})))


(defnc ArrowRightIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})))

(defnc ArrowTurnRightUp
  [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class "size-6"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"})))