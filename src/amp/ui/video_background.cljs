(ns amp.ui.video-background
  (:require
   ["@mux/mux-player-react$default" :as MuxPlayer]

   [amp.lib.defnc :refer [defnc]]
   [applied-science.js-interop :as j]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc video-background
  [{:keys [should-play? allow-audio? playback-id]
    :or  {allow-audio? true}}]

  (let [video-ref (hooks/use-ref "video-ref")
        [audio-muted? set-audio-muted!] (hooks/use-state true)
        #_#_[is-playback-ready? set-is-playback-ready!] (hooks/use-state false)

        toggle-audio (hooks/use-callback
                      [video-ref audio-muted?]
                      (fn
                        [_]
                        (set-audio-muted! (not audio-muted?))))

        #_#_canplay-handler (fn []
                              (js/window.alert "Can Play!")
                              (set-is-playback-ready! true))]

    #_(hooks/use-effect
       [video-ref]
       (when @video-ref
         (let [ready-state (j/get @video-ref :readyState)]

           (.addEventListener @video-ref "error" (fn [e]
                                                   (tap> {:error e})
                                                   (js/window.alert "Video Playback Error:" e)))

           ;;  Playback is ready
           (if (= ready-state 4)
             (set-is-playback-ready! true)
             (.addEventListener @video-ref "canplay" canplay-handler)))

         (fn []
           (.removeEventListener @video-ref "canplay" canplay-handler))))

    (hooks/use-effect
     [should-play?]
     (when-let [^js v @video-ref]
       (if should-play?
         ;; play() rejects when a new source interrupts it; that's expected.
         (some-> (.play v) (.catch (fn [_])))
         (when (not (j/get v :paused))
           (.pause v)))))

    #_(hooks/use-effect
       [video-ref]
       (.play @video-ref))


    (d/div {:class "w-full h-full relative overflow-hidden background-video"}
           #_(d/div {:ref video-ref
                     :class "w-full h-full object-cover"}
                    "Hi")
           ($ MuxPlayer
              {:playbackId playback-id
               :ref video-ref
               :class "w-full h-full object-cover"
               :muted audio-muted?
               :loop true
               :playsInline ""
               :autoPlay should-play?
               :streamType "on-demand"
               ;; Several edits have captions burned in; keep Mux's generated
               ;; track available in the menu but hidden by default.
               :defaultHiddenCaptions true
               :preferplayback "mse"})

           (when allow-audio?
             (d/button {:class "ap-iconbtn absolute right-4 bottom-4"
                        :aria-label (if audio-muted? "Turn sound on" "Turn sound off")
                        :aria-pressed (not audio-muted?)
                        :on-click toggle-audio}
                       (d/svg {:viewBox "0 0 16 16" :fill "none" :stroke "currentColor"
                               :stroke-width 1.4 :stroke-linecap "round" :aria-hidden true}
                              (d/path {:d "M2 6h2.5L8 3v10L4.5 10H2z" :fill "currentColor"})
                              (if audio-muted?
                                (d/path {:d "M11 6l4 4M15 6l-4 4"})
                                (d/path {:d "M10.5 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6.5 6.5 0 0 1 0 9"}))))))))

(defnc film-player
  "Full player for films people choose to watch: controls, sound on, and
   Mux's generated captions available (hidden by default) in the menu.
   `fill?` fits the whole frame inside its box (the lightbox) instead of
   cropping to a 16:9 frame."
  [{:keys [playback-id title poster fill?]}]
  ($ MuxPlayer
     {:playbackId playback-id
      :class "w-full h-full block"
      :autoPlay true
      :playsInline true
      :streamType "on-demand"
      :defaultHiddenCaptions true
      :accentColor "#eac54f"
      :poster poster
      :metadata #js {:video_title title}
      :style (if fill?
               #js {"--media-object-fit" "contain" :height "100%" :background "#000"}
               #js {"--media-object-fit" "cover" :aspectRatio "16 / 9"})}))
