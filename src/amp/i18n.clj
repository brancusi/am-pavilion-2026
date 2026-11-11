(ns amp.i18n
  "Macros for amp.i18n: catalogs are JSON files under resources/i18n/<locale>/,
   inlined at compile time with shadow.resource so editing one recompiles the
   namespace that uses it."
  (:require [shadow.resource]))

(def locales ["en" "it" "hy"])

(defmacro defcatalog
  "Register the catalog `domain` (resources/i18n/<locale>/<domain>.json, one
   file per locale) for this namespace's module. Put it at the top of the
   namespace whose code calls (t :<domain>/<key>). Every locale's file must
   exist; `npm run i18n:check` creates missing ones and reports gaps."
  [domain]
  (let [domain (name domain)]
    `(register! ~domain
                (cljs.core/js-obj
                 ~@(mapcat (fn [l] [l `(shadow.resource/inline ~(str "/" l "/" domain ".json"))])
                           locales)))))
