(ns ds
  (:require 
   [datascript.core :as d]
   [clojure.string :as str]))

(def csv-list
  (map #(str/split % #",")
       (str/split-lines (slurp "public/data/geo-mapping.csv"))))

(def header (mapv keyword (first csv-list)))

(def geo-mapping (mapv #(zipmap header %) (rest csv-list)))

(set (map :region_code geo-mapping))
;; => #{"southamerica"
;;      "europe"
;;      "australasia"
;;      "africa"
;;      "northamerica"
;;      " Republic of\""
;;      "asia"
;;      " Province of China\""
;;      " Islamic Republic of\""}

(set (map :country_code geo-mapping))

(def schema 
  "institutions"
  #:insti{:institution {:db/unique :db.unique/identity}
          :country_code {}
          :country_name {}
          :region_code {}
          :region_name {}
          :lat {}
          :lon {}})

(def emtpy-ds (d/empty-db schema))

(def db (d/db-with emtpy-ds geo-mapping))

(defn get-inst-region [region]
  (d/q '[:find ?i ?lat ?lon
         :keys institution lat lon
         :where 
         [?e :region_code region]
         [?e :institution ?i]
         [?e :lat ?lat]
         [?e :lon ?lon]]
       db))

(defn get-inst-country [country] 
  (d/q '[:find ?i ?lat ?lon
         :keys institution lat lon
         :in $ ?country
         :where
         [?e :country_code ?country]
         [?e :institution ?i]
         [?e :lat ?lat]
         [?e :lon ?lon]]
       db country))

(comment 
  (get-inst-country "ch")
  (d/q '[:find ?i ?lat ?lon
         :keys institution lat lon
         :where
         [?e :country_code "sw"]
         [?e :institution ?i]
         [?e :lat ?lat]
         [?e :lon ?lon]]
       db)
  (d/q '[:find ?i ?lat ?lon
         :keys institution lat lon
         :where
         [?e :country_code "ch"]
         [?e :institution ?i]
         [?e :lat ?lat]
         [?e :lon ?lon]]
       db)
  
  )

