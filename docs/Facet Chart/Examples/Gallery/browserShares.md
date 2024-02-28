---
title: Facet Chart Browser Shares
sidebar_position: 1
---

# Facet chart - browser shares, hierarchical structure

Browser shares (sample data). Click to explore
<!-- Image -->

 ```js
        pc = new FacetChart({
            container: document.getElementById("demo"),
            data: { url: "/dvsl/data/pie-chart/browsers.json" },
            series: [
                {
                    data: { field: "value" },
                    style: { fillColor: "#09c", depthBrightness: 0.6, shadowColor: "rgba(0,0,0,0.5)" }
                }
            ],
            facetAxis: {
                defaultUnitWidth: 100
            }
        });
        ```