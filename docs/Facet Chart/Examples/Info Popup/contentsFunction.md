---
title: Contents Function
sidebar_position: 1
---

# Contents function.
<!-- Image ToDo -->
```js
    var chart = new FacetChart({
        container: document.getElementById("demo"),
        data: {
            url: "/dvsl/data/facet-chart/US-economy-by-industry.json"
        },
        facetAxis: {
            size: 70
        },
        series: [
            {
                name: "2011",
                data: { field: "2011" }
            },
            {
                name: "2012",
                data: { field: "2012" },
                style: { fillColor: "lightgray" }
            }
        ],
        info: {
            advanced: {
                showHeader: false, // disable the built-in header
                contentsFunction: function (data, activeSeries, range) {
                    var out = '';

                    // get the name of the series that is currently hovered.
                    var seriesName = activeSeries && activeSeries['name'] ? activeSeries['name'] : "";

                    // retrieve the data item that is being hovered.
                    var dataItem = chart.getActiveFacet().items.find(function (o) { return o.index === range[0] });

                    // add the header (since the default was disabled above)
                    var headerTxt = '<small>Custom header for</small> ' + dataItem.data.name + " " + seriesName;
                    out += '<strong style="text-align:right">' + headerTxt + '</strong>';

                    // the data object contains a list of all stacks defined in the configuration.
                    var diff = 0;

                    // if no stacks are used, it will contain a separate stack for each series.
                    for (var stackIndex = 0; stackIndex < data.length; stackIndex++) {
                        var stack = data[stackIndex];

                        // add series "header" if there is more than one series defined in the stack
                        if (stack.name && stack.data.length > 1) {
                            out += '<h3>' + stack.name + '</h3>';
                        }

                        // each stack contains a list of series
                        for (var seriesIndex = 0; seriesIndex < stack.data.length; seriesIndex++) {
                            var series = stack.data[seriesIndex];

                            // use the same color as provided in the series configuration
                            var color = series.config.style.fillColor || series.config.style.lineColor;
                            out += '<tr><td style="';
                            out += 'color: ' + color + ';';

                            // when the user hovers on certain series value on the chart, it will be highlighted in the popup
                            if (activeSeries && series.config.id === activeSeries.id) {
                                out += 'border-color: ' + color + '; font-weight: bold';
                            }

                            // note that while it is easier to set just the inline style, those might not work if the 
                            // page contains Content-Security-Policy headers that disable such styles.
                            // in this case you can use two special attributes that will then be processed by the chart
                            // to set `style.color` and `style.borderColor`.
                            // 
                            // if (color) out += ` data-color=\"${color}\"`;
                            // if (activeSeries && series.config.id === activeSeries.id) out += ` data-selected`;

                            out += '">';
                            out += series.name || stack.name;
                            out += '</td><td>';
                            if (!series.values) {
                                out += 'No data';
                            } else {
                                diff = diff == 0 ? series.values.avg : diff - series.values.avg;
                                out += series.values.avg.toString() + ' $';
                            }
                            out += '</td></tr>';
                        }
                    }

                    // add an extra row that displays the difference
                    out += '<tr><td style="color:#FF7D7D;">Increase in 2012</td><td>' + -Math.floor(diff) + ' $</td></tr>';
                    return '<table cellspacing="0">' + out + '</table>';
                }
            }
        }
    });
    ```