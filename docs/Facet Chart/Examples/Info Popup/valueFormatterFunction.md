---
title: Value Formatter Function
sidebar_position: 2
---

# Value formatter function.

<!-- Image ToDo -->
```js
    var chart = new FacetChart({
        container:document.getElementById("demo"),
        data:
        {
            url:"/dvsl/data/facet-chart/US-economy-by-industry.json"
        },
        area: { height: 350 },
        series:[
            {
                name:"Average temperature",
                type:"columns",
                data:{
                    index:1,
                    aggregation:"avg"
                },
                style:{
                    fillColor:"lightgreen"
                }
            }
        ],
        info:{
            valueFormatterFunction: function(val){
                return val.avg + " C";
            }
        }
    });
    ```