---
title: Facet Chart Browser Shares
sidebar_position: 1
---

# Legend

Use legend to show or hide some series.
<!-- Image ToDo -->

```js


    var t = new FacetChart({
        container: document.getElementById("demo"),
        data: { url: "/dvsl/data/facet-chart/US-economy-by-industry.json" },
        legend: {
            enabled: true
        },
        series: [
            {
                name: "2010",
                data: { field: "2010" },
                style: { fillColor: "#77c277" }
            },
            {
                name: "2011",
                data: { field: "2011" },
                style: { fillColor: "#59a3c0" }
            },
            {
                name: "2012",
                data: { field: "2012" },
                style: { fillColor: "#aaf" }
            }
        ]
    });
    ```