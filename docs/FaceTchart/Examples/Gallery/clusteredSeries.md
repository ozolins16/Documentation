---
title: Facet Chart Clustered Series Passenger Cars In Use
sidebar_position: 2
---

# Facet Chart - clustered series, one level

Passenger cars in use totals, year 2012
<!-- image -->
 ```js
        function success(data) {
            t = new FacetChart(
                settings = {
                    container: document.getElementById("demo"),
                    data: {
                        preloaded: data
                    },
                    interaction: { resizing: { enabled: false } },
                    series: [
                        { id: "s1", name: "2005", data: { field: "2005" }, style: { fillColor: "red" } },
                        { id: "s2", name: "2006", data: { field: "2006" }, style: { fillColor: "limegreen" } },
                        { id: "s3", name: "2007", data: { field: "2007" }, style: { fillColor: "blue" } },
                        { id: "s4", name: "2008", data: { field: "2008" }, style: { fillColor: "cyan" } },
                        { id: "s5", name: "2009", data: { field: "2009" }, style: { fillColor: "gray" } },
                        { id: "s6", name: "2010", data: { field: "2010" }, style: { fillColor: "orange" } },
                        { id: "s7", name: "2011", data: { field: "2011" }, style: { fillColor: "purple" } },
                        { id: "s8", name: "2012", data: { field: "2012" }, style: { fillColor: "yellow" } }
                    ],
                    facetAxis: {
                        defaultUnitWidth: 100
                    }
                }
            );
        }
        // using a custom library to load CSV data
        loadCSVObj("/dvsl/data/facet-chart/pc.csv", null, [
                { type: "string", name: "name" },
                { type: "decimal", name: "2005" },
                { type: "decimal", name: "2006" },
                { type: "decimal", name: "2007" },
                { type: "decimal", name: "2008" },
                { type: "decimal", name: "2009" },
                { type: "decimal", name: "2010" },
                { type: "decimal", name: "2011" },
                { type: "decimal", name: "2012" },
                { type: "string", name: "continent" }
        ], "\t", function (data) {
            data = sortResponse(data, "2012", false);
            success(data);
            /* prepare preloaded data */
        });
        ```