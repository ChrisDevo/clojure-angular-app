# Clojure/AngularJS demo app
## using John Lindquist's egghead.io tutorials

## Description

This project is a simple demonstration of an AngularJS front-end and a Clojure
back-end, based upon the wonderful tutorials created by
[John Lindquist](http://www.egghead.io/).

Thanks, John!

## How It Was Created

This project was assembled using the
[Compojure](https://github.com/weavejester/compojure) template and the
[angular-seed](https://github.com/angular/angular-seed) template. The
Clojure/Compojure portion was created using the Compojure plugin for
[Leiningen](https://github.com/technomancy/leiningen)
`lein new compojure <project name>`.
The AngularJS portion was simply a clone of angular-seed. To get a better
understanding of these, please visit their respective pages.

## Running It Locally

First, you need the [lein-ring plugin](https://github.com/weavejester/lein-ring).

The html files are located within the `/app` directory. To run them type
`lein ring server` from the command line within the root directory. This will
start a server on `localhost:3000`. From there you can enter the name of any of
the html files found in the `/app` directory. The routing for these requests is
handled from the `handler.clj` file found in the `src/angular_seed/` directory.
The function responsible for the routing is `defroutes`, specifically the
`(route/files "/" {:root "app"})` portion.

The JavaScript files are found in the `app/js` directory.

There are some minor differences between the code provided by John and my own.
They amount to different file locations and some naming differences. This was
done to give each tutorial its own JavaScript and HTML files as well as to work
within the project structure of the angular-seed template.
