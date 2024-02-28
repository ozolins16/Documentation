---
title: Data function
sidebar_position: 1
---

# Data function.

<!-- Image ToDo-->
 ```js
        var f = new FacetChart({
            container: document.getElementById("demo"),
            data: {
                dataFunction: function (id, offset, limit, success, fail) {
                    var data = {
                        id: id,
                        subvalues: null
                    };

                    if (!id) {
                        data.subvalues = [{
                            id: "IE",
                            name: "Internet Explorer",
                            value: 200
                        }, {
                            id: "FF",
                            name: "Firefox",
                            value: 150
                        }];
                    } else if (id === "IE") {
                        data.subvalues = [{
                            id: "IE1",
                            name: "IE9",
                            value: 150,
                            extra: { expandable: false }
                        }, {
                            id: "IE2",
                            name: "IE10",
                            value: 50,
                            extra: { expandable: false }
                        }];
                    } else if (id === "FF") {
                        data.subvalues = [{
                            id: "FF1",
                            name: "FF20",
                            value: 90,
                            extra: { expandable: false }
                        }, {
                            id: "FF2",
                            name: "FF40",
                            value: 60,
                            extra: { expandable: false }
                        }];
                    } else {
                        alert("Invalid ID: " + id);
                    }

                    success(data);
                }
            },
            items: {
                styleFunction: function (item) {
                    // workaround for the inability to set expandable:false in the data.
                    // 
                    // note that the alternative is to omit the `id` property for the non-expandable items.
                    if (item.data.extra)
                        item.expandable = item.data.extra.expandable;
                }
            },
            series: [{
                data: {
                    field: "value"
                }
            }]
        });
        ```