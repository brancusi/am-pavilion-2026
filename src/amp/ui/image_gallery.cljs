(ns amp.ui.image-gallery
  "Media galleries in content sections. Kept as a thin alias of
   amp.ui.fit-gallery so existing pages keep their slide data: images keep
   their own aspect ratio and the optional 3D slide opens on request."
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.ui.fit-gallery :refer [fit-gallery]]
            [helix.core :refer [$]]))

(defnc lazy-image-gallery
  "`slides` as in amp.ui.fit-gallery. `enabled?` (used to drive autoplay in
   the old carousel) is ignored: images load lazily on their own."
  [{:keys [slides]}]
  ($ fit-gallery {:slides slides}))
