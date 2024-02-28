---
title: Side By Side
sidebar_position: 1
---

# Series - side by side
<!-- Image ToDo -->
```js
    var t = new FacetChart({
        container: document.getElementById("demo"),
        data:{
            url:"/dvsl/data/facet-chart/US-economy-by-industry.json"
        },
        facetAxis:{
            size:70
        },
        series:[
            {
                name: "2010",
                data:{field:"2010"},
                style:{fillColor: "#ccf"}
            },
            {
                name: "2011",
                data:{field:"2011"},
                style:{fillColor:"#bbf"}
            },
            {
                name: "2012",
                data:{field:"2012"},
                style:{fillColor:"#aaf"}
            }
        ],
        items: {styleFunction:function (slice, data){slice.label = data.name;}}
    });
```