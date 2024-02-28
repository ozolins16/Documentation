---
title: Data URL
sidebar_position: 2
---
# Data URL.
```js
        var t = new FacetChart({
            container: document.getElementById("demo"),
            data: {
                url: "/dvsl/data/pie-chart/browsers.json"
            },
            series: [
                { data: { field: "value" } }
            ],
        });
        ```