---
title: Facet Chart Drill Down Passenger Cars In Use
sidebar_position: 4
---
# Facet Chart - drill down, one level
Passenger cars in use totals, year 2012
<!-- Image -->

```js 
    function success(data) {
        t = new FacetChart(
            settings = {
                container: document.getElementById("demo"),
                data: {
                    preloaded: data,
                    autoCategories: ["continent"]
                },
                interaction: { resizing: { enabled: false } },
                series: [
                    { id: "s1", data: { field: "value" } }
                ],
                facetAxis: {
                    defaultUnitWidth: 100
                }
            }
        );
    }
    // using a custom library to load CSV data
    loadCSVObj("/dvsl/data/facet-chart/pc.csv", null, [
            { type: "string", name: "country" },
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

        // valid years - 2005-2012
        var year = 2012;

        for (var i = 0; i < data.subvalues.length; i++) {
            data.subvalues[i].name = data.subvalues[i].country;
            data.subvalues[i].value = data.subvalues[i]["" + year];
        }

        success(data);
    });```