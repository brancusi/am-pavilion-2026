(ns amp.ui.picture
  "Plain responsive images for the design-system components (MediaFigure,
   Gallery, PostCard). The browser picks a width from `srcset` + `sizes` and
   loads lazily, so no JS preloading is needed.

   All image URLs are built here: images live on Cloudflare R2 as fixed WebP
   widths, uploaded with `npm run media`."
  (:require [amp.lib.defnc :refer [defnc]]
            [clojure.string :as str]
            [helix.dom :as d]))

(def media-host
  "Cloudflare R2 bucket `armenia-pavilion-media` (see scripts/media.mjs)."
  "https://media.armenianpavilion.org/")

(def ^:private widths
  "Ready-made WebP widths stored for every image (scripts/media.mjs WIDTHS)."
  [480 800 1200 1600 2400])

(defn image-key
  "Storage key for an image path: no extension, lowercased, other characters
   collapsed to \"-\". Must match imageKey in scripts/media.mjs."
  [path]
  (->> (.split (-> (js/decodeURIComponent path)
                   (.replace (js/RegExp. "\\.[^./]+$") "")
                   (.toLowerCase))
               "/")
       (map #(-> %
                 (.replace (js/RegExp. "[^a-z0-9]+" "g") "-")
                 (.replace (js/RegExp. "^-+|-+$" "g") "")))
       (str/join "/")))

(defn image-url
  "URL of the stored rendition of `src` that is at least `w` pixels wide.
   Images not on the media host (local /images/…) are returned unchanged;
   cropping to an aspect ratio is left to CSS object-fit."
  [src {:keys [w]}]
  (if (str/starts-with? src media-host)
    (let [path (subs src (count media-host))
          rendition (or (first (filter #(>= % w) widths)) (peek widths))]
      (str media-host (image-key path) "-" rendition ".webp"))
    src))

(defn mux-poster
  "Still frame from a Mux playback id, at `time` seconds."
  [playback-id {:keys [w time] :or {w 1600 time 0}}]
  (str "https://image.mux.com/" playback-id "/thumbnail.webp?width=" w "&time=" time))

(defnc picture
  "Responsive <img>. `sizes` is the CSS sizes attribute (defaults to full
   width); `eager?` is for above-the-fold images. `ar` is accepted for
   callers' layout intent; the frame crops with object-fit."
  [{:keys [src alt ar sizes eager? class on-load]}]
  (d/img {:src (image-url src {:w 1200})
          :srcSet (when (str/starts-with? src media-host)
                    (->> widths
                         (map #(str (image-url src {:w %}) " " % "w"))
                         (str/join ", ")))
          :sizes (or sizes "100vw")
          :alt (or alt "")
          :class class
          :loading (if eager? "eager" "lazy")
          :decoding "async"
          ;; Lets CSS fade the image in once it has actually arrived.
          :on-load (fn [e]
                     (.setAttribute (.-currentTarget e) "data-loaded" "")
                     (when on-load (on-load e)))}))
