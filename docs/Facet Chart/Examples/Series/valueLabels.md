---
title: Value Labels
sidebar_position: 3
---

# Value labels on the chart

<!-- Image ToDo -->
```js
    var t = new FacetChart({
        container: document.getElementById("demo"),
        data: {
            url: "/dvsl/data/pie-chart/browsers.json"
        },
        series: [
            {
                valueLabels: {
                    enabled: true,
                    position: "aboveValue",
                    style: {
                        textStyle: {
                            font: "16pt Arial"
                        },
                        backgroundStyle: {
                            lineColor: "#ccc",
                            lineWidth: 1,
                            fillColor: "rgba(200,200,200,0.5)"
                        },
                        borderRadius: 2
                    },
                    contentsFunction: function (value) { return value.toFixed(0); }
                }
            }
        ]
    });
    ```