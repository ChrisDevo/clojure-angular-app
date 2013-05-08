# Clojure/AngularJS demo app using John Lindquist's egghead.io tutorials

This project is meant to be a simple demonstration of using an AngularJS
front-end and a Clojure back-end, based upon the wonderful tutorials created by
[John Lindquist](http://www.egghead.io/). Thanks, John!

This project was assembled using the
[Compojure](https://github.com/weavejester/compojure) template and the
[angular-seed](https://github.com/angular/angular-seed) template. The
Clojure/Compojure portion was created using `lein new compojure <project name>`.
The AngularJS portion was simply a clone of angular-seed. To get a better
understanding of these, please visit their respective pages.

The html files are located within the `/app` directory. To run them type
`lein ring server` from the command line within the root directory. This will
start a server on `localhost:3000`. From there you can enter the name of any of
the html files found in the `/app` directory. The routing for these requests is
handled from the `handler.clj` file found in the `src/angular_seed/` directory.
The function responsible for the routing is `defroutes`, specifically the
`(route/files "/" {:root "app"})` portion.
