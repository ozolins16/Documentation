---
title: Preloaded
sidebar_position: 3
---

# Preloaded data.

```js
    var data = {
        subvalues: [
            {subvalues: [{name: "Safari (in-app) (not set)", value: 549}], name: "Safari (in-app)", value: 549, "id": "Safari (in-app)"},
            {subvalues: [{name: "Mozilla Compatible Agent 5.0", value: 292}, {name: "Mozilla Compatible Agent 4.0", value: 4}], name: "Mozilla Compatible Agent", value: 296, "id": "Mozilla Compatible Agent"},
            {subvalues: [{name: "Playstation 3 (not set)", value: 204}], name: "Playstation 3", value: 204, "id": "Playstation 3"},
            {subvalues: [{name: "YaBrowser 1.5.1106.241", value: 40}, {name: "YaBrowser 1.7.1364.21027", value: 32}, {name: "YaBrowser 1.7.1364.17262", value: 23}, {name: "YaBrowser 1.7.1364.22076", value: 23}, {name: "YaBrowser 1.5.1105.412", value: 18}, {name: "YaBrowser 1.7.1364.15751", value: 15}, {name: "YaBrowser 1.7.1364.22194", value: 15}, {name: "YaBrowser 1.7.1364.13754", value: 8}, {name: "YaBrowser 1.7.1364.12390", value: 5}], name: "YaBrowser", value: 179, "id": "YaBrowser"},
            {subvalues: [{name: "IE with Chrome Frame 8.0", value: 78}, {name: "IE with Chrome Frame 7.0", value: 14}], name: "IE with Chrome Frame", value: 92, "id": "IE with Chrome Frame"},
            {subvalues: [{name: "Amazon Silk 1.0.22.153_10033210", value: 26}, {name: "Amazon Silk 3.1", value: 19}, {name: "Amazon Silk 3.4", value: 16}, {name: "Amazon Silk 2.9", value: 11}, {name: "Amazon Silk 3.0", value: 9}, {name: "Amazon Silk 3.7", value: 3}], name: "Amazon Silk", value: 84, "id": "Amazon Silk"}
        ]
    };
    var f = new FacetChart({
        container: document.getElementById("demo"),
        data: {
            preloaded: data
        },
        series: [
            {data: {field: "value"}}
        ]
    });
    ```