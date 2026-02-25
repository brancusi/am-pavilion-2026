(ns amp.pages.blog.page
  (:require [amp.lib.defnc :refer [defnc]]
            [amp.styles :as s]
            [helix.dom :as d]))

(defnc blog-view
  [_props]
  (d/div {:class (s/cx "min-h-screen flex flex-col items-center justify-center px-4"
                       s/text-primary)}
         (d/div {:class "max-w-2xl w-full text-center"}
                (d/p {:class (s/cx s/eyebrow s/text-faint "mb-6")}
                     "Journal")
                (d/h1 {:class (s/cx s/heading-display "mb-8")}
                      "Blog")
                (d/p {:class (s/cx s/body-lg s/text-secondary)}
                     "Blog and vlog entries — coming soon."))))
