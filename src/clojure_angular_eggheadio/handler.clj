(ns clojure-angular-eggheadio.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (route/files "/" {:root "app"})
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
