---
title: Facet Chart Wifi Like Visualization
sidebar_position: 8
---

# Facet chart - WiFi like visualization
Example on how to dynamically change style for individual chart columns.
 <!-- image -->
```js
    //define values so that chart would look like WiFi visualization:
    var data = {
        subvalues: [
            {name: "10%", value: 10, "id": "c10"},
            {name: "20%", value: 20, "id": "c20"},
            {name: "30%", value: 30, "id": "c30"},
            {name: "40%", value: 40, "id": "c40"},
            {name: "50%", value: 50, "id": "c50"},
            {name: "60%", value: 60, "id": "c60"},
            {name: "70%", value: 70, "id": "c70"},
            {name: "80%", value: 80, "id": "c80"},
            {name: "90%", value: 90, "id": "c90"},
            {name: "100%", value: 100, "id": "c100"}
        ]
    };
    var t = new FacetChart({
        container: document.getElementById("demo"),
        data: {
            preloaded: data
        },
        series: [
            {
                type:"columns",
                style: {
                    fillColor: "green"
                },
                data: {field: "value"}}
        ],
        items: {
            styleFunction: function (item, data) {
                var ix = parseInt(item.id.replace("c", ""));
                for (var i = 0; i < item.values.length; i++) {
                    var itemVal = item.values[i];
                    if(ix > value) {
                        itemVal.style.fillColor = "red";
                    }
                }
            }
        }
    });

    //set default / starting value
    var value = 50;
    var lastValue = value;

    function randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    setInterval(function() {
        //next value calculation:
        var p = randomIntFromInterval(0,1) == 1 ? 1 : -1;
        var mx = 25;
        var min = Math.max(lastValue - (mx * p), 0);
        var max = Math.min(lastValue + (mx * p), 100);

        value = randomIntFromInterval(min,max);
       
        //update chart:
        t.updateSettings({});
        lastValue = value;
    }, 220);```