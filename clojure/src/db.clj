(ns db
  (:require
   [datahike.api :as d]
   [datahike.migrate :refer [export-db import-db]]
   [clojure.core :refer [slurp]]
   [clojure.data.json :as json]))



;; use the filesystem as storage medium
(def cfg {:store {:backend :file 
                  :path "public/db"}})
#_(def cfg {:store {:backend :mem
                  :id "example"}})

;; create a database at this place, per default configuration we enforce a strict
;; schema and keep all historical data
#_(d/create-database cfg)


(def conn (d/connect cfg))


(def proceedings (json/read-str (slurp "public/data/proceedings.json")
                                :key-fn keyword))

(d/transact conn [{:db/ident :name
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one }
                  {:db/ident :age
                   :db/valueType :db.type/long
                   :db/cardinality :db.cardinality/one }])

;; lets add some data and wait for the transaction
(d/transact conn [{:name  "Alice", :age   20 }
                  {:name  "Bob", :age   30 }
                  {:name  "Charlie", :age   40 }
                  {:age 15 }])

;; search the data
(d/q '[:find ?e ?n ?a
       :where
       [?e :name ?n]
       [?e :age ?a]]
  @conn)

#_(export-db @conn "/tmp/eavt-dump")