# Changelog

## 0.9.2

* cleanup after source_includes changes

## 0.9.1

* fix source_includes breaking search

## 0.9.0

* snapshot management
    * create and remove snapshot repositories
    * take and restore snapshots for all/specific indices
* updates dependencies (vue 2.6, vuetify 1.5)

## 0.8.0

* adds api-browser component
* better handling of network errors
* only search still existing indices
* removes reconnect input in toolbar
* adds/fixes some specs
* updates dependencies

## 0.7.1

* fix css issue

## 0.7.0

* added node overview
* added management options for indices
* adds timer setting to reload buttons for interval querying
* can always connect to cluster without testing

## 0.6.0

* fix css for table settings button
* fix chrome extension build script
* adds cerebro to readme

## 0.5.0

* adds logo
* adds e2e specs

## 0.4.0

* can use authorized clusters (via `username:password@host` syntax)
* can toggle table columns during search
* switch from karma to jest specs

## 0.3.0

* switch to port 8080 in development builds and docker container
* fixes some responsiveness errors
* adds ability to create indices
* adds setting to enable/disable sticky table headers
* internal refactorings to match vue style guide
* adds utility to create some test data

## 0.2.3

* switch to vue-cli-3
* refactor resizing code editors

## 0.2.2

* fix fixed table headers

## 0.2.1

* use a different lib to stringify params

## 0.2.0

* adds options to hide `_index` and `_score` columns on search page
* autoscroll page when resizing editors
* correctly build request on query page when using GET and params together
* internal state refactorings


## 0.1.8

* fix broken build

## 0.1.7

* better table resizing
* fix bug where sourceIncludes option was deleted automatically
* small performance improvement

## 0.1.6

* fix column name filter on search page

## 0.1.5

* text changes
* fix bug when reloading indices on search
* use node 10 for docker image
* adds more specs
* updates dependencies

## 0.1.4

* fixes grid sizes
* makes table headers sticky and tables scrollable
* adds filters for source includes and size on search view
* save table pagination and sort settings in store
* updates dependencies

## 0.1.3

* can connect via ctrl+enter during initial setup
* rewrote query page - you can now directly fetch your cluster
* can resize code editors
* some internal changes to be more compliant to vue best practices

## 0.1.2

* adds some basic specs
* changes urls to point to elasticvue.com
* load editor component async

## 0.1.1

* fix github dependency in package.json because docker image did not build

## 0.1.0

* updates dependencies
* fixed some bugs regarding fuzzy matching
* add better editor to view query results (ace)

## 0.0.3

* updates dependencies
* show version in footer
* renamed "browse" to "search"
* enabled fuzzy matching for all filters (tables and selects)
* reworked connection workflow

## 0.0.2

* Adds tooltip to reset button
* Adds more information on 403 errors

## 0.0.1

* initial release
