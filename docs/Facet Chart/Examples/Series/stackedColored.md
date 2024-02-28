---
title: Stacked Colored
sidebar_position: 2
---

# Series - stacked colors.
<!-- Image ToDo -->
```js
    var t = new FacetChart({
        container: document.getElementById("demo"),
        data: {
            url: "/dvsl/data/facet-chart/US-economy-by-industry.json"
        },
        facetAxis: {
            size: 70
        },
        stacks: {
            "s1": {
                type: "normal",
                separateNegativeValues: false
            }
        },
        series: [
            {
                name: "2011",
                data: { field: "2011" },
                style: { fillColor: "lightgray" },
                stack: "s1"
            },
            {
                name: "increase in 2012",
                id: "change",
                data: { valueFunction: function (data) { return parseFloat(data["2012"]) - parseFloat(data["2011"]); } },
                stack: "s1"
            }
        ],
        items: {
            styleFunction: function (item, data) {
                item.label = data.name;

                for (var i = 0; i < item.values.length; i++) {
                    var itemVal = item.values[i];

                    if (itemVal.seriesId !== "change")
                        continue;

                    if (itemVal.value < 0) {
                        itemVal.style.fillColor = "red";
                    } else {
                        itemVal.style.fillColor = "green";
                    }
                }
            }
        }
    });
```