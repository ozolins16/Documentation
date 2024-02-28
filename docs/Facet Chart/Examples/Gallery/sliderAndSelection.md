---
title: Facet Chart Together With Slider And Selection
sidebar_position: 7
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
                var slider = document.getElementById("myRange");
                var value = slider.value;

                for (var i = 0; i < item.values.length; i++) {
                    var itemVal = item.values[i];
                    if(ix > value) {

                        itemVal.style.fillColor = "red";
                    }
                }

            }
        }
    });


    function initSlider() {
        var slider = document.getElementById("myRange");
        var output = document.getElementById("output");
        output.innerHTML = slider.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
            updateSlider(this.value, true);
        }
    }

    var lastValue = document.getElementById("myRange").value * 1;
    function updateSlider(value, fromSlider) {
        if(!fromSlider) {
            var slider = document.getElementById("myRange");
            slider.value = value;
        }
        var output = document.getElementById("output");
        output.innerHTML = value;
        lastValue = value;
        t.updateSettings({});

        var a = [10,20,30,40,50,60,70,80,90,100];
        var sel = [];

        for(var i = 0; i < a.length; i++) {
            if(a[i] <= value) {
                sel.push("c"+a[i]);
            }
        }

        t.selection(sel);
    }

    initSlider();


    function randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    ```