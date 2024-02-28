---
title: Facet Chart Continental Data And Breadcrumb Feature
sidebar_position: 4
---

# Facet chart - continental data + breadcrumb feature

Categorise data based on different fields + breadcrumb feature. Click to explore
Breadcrumb = All data
<!-- Image -->
```js 



    var fc = new FacetChart({
        container: document.getElementById("demo"),
        data: {
            url: "/dvsl/data/pie-chart/continental-data.json",
            autoCategories: ["continent", "country"]
        },
        series: [{ data: { field: "value" } }],
        events: {
            onChartUpdate: function (event, args) {
                var activeItems = fc.getActiveItems();
                var html = "Breadcrumb = <b>All data<b/>";
                for (var i in activeItems) {
                    html += " &gt; <b>" + activeItems[i].label + "</b>";
                }
                document.getElementById("breadcrumb").innerHTML = html;
            }
        }
    });```