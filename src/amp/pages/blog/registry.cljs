(ns amp.pages.blog.registry
  "Post registry — maps slug strings to post metadata and render components.
   To add a new post:
   1. Create a namespace under amp.pages.blog.posts.*
   2. Export a `post-content` defnc component.
   3. Add its listing to amp.data.journal/posts.
   4. Require the namespace here and add it to `components`."
  (:require
   [amp.data.journal :as journal]
   [amp.pages.blog.posts.pavilion-construction-begins :as post-1]
   [amp.pages.blog.posts.blue-yellow-maquette :as post-byby]
   [amp.pages.blog.posts.carried-by-hand :as post-carried]
   [amp.pages.blog.posts.venice-arrival :as post-2]
   [amp.pages.blog.posts.the-studio-play-balance :as post-studio]))

(def ^:private components
  {"carried-by-hand"         post-carried/post-content
   "the-studio-play-balance" post-studio/post-content
   "blue-yellow-maquette"    post-byby/post-content})

(def posts
  "Journal listings joined with their render component. Newest first.
   Each entry: {:slug :title :date :summary :cover-image :kind :component}"
  (mapv #(assoc % :component (components (:slug %))) journal/posts))

(def posts-by-slug
  "Lookup map: slug string → post map."
  (into {} (map (juxt :slug identity) posts)))

