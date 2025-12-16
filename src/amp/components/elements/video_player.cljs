(ns amp.components.elements.video-player
  (:require
   ["@mux/mux-player-react$default" :as MuxPlayer]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]))

(defnc VideoPlayer
  [{:keys [playback-id]}]
  ($ MuxPlayer
     {:playbackId playback-id
      :class "w-full h-full object-cover"
      :playsInline ""
      :streamType "on-demand"
      :preferplayback "mse"}))
