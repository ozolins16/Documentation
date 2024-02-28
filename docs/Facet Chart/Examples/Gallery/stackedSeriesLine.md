---
title: Facet Chart Stacked Series Line Passenger Cars In Use
sidebar_position: 5
---

# Facet Chart - stacked area fill, markers, custom line colors, custom line width, smoothing, one level

Passenger cars in use totals, year 2012
<!-- Image ToDo-->

 ```js
    function success(data){
        t = new FacetChart(
            settings = {
                container: document.getElementById("demo"),
                data:{
                    preloaded: data
                },
                interaction: {resizing:{enabled:false}},
                series: [
                    {id: "s1", name: "2005", type: "line", data: {field: "2005"}, style: {smoothing: true, lineWidth: 0, fillColor: "red"}, stack: "default"}, 
                    {id: "s2", name: "2006", type: "line",  data: {field: "2006"}, style: {fillColor: "limegreen"}, stack: "default"}, 
                    {id: "s3", name: "2007", type: "line",  data: {field: "2007"}, style: {fillColor: "blue", lineColor: "blue"}, stack: "default"}, 
                    {id: "s4", name: "2008", type: "line",  data: {field: "2008"}, style: {smoothing: true, fillColor: "cyan", lineColor: "cyan"}, stack: "default"}, 
                    {id: "s5", name: "2009", type: "line",  data: {field: "2009"}, style: {fillColor: "gray", lineColor: "gray"}, stack: "default"}, 
                    {id: "s6", name: "2010", type: "line",  data: {field: "2010"}, style: {smoothing: true, fillColor: "orange", lineColor: "orange"}, stack: "default"}, 
                    {id: "s7", name: "2011", type: "line",  data: {field: "2011"}, style: {fillColor: "purple", lineColor: "purple"}, stack: "default"}, 
                    {id: "s8", name: "2012", type: "line",  data: {field: "2012"}, style: {fillColor: "yellow", lineColor: "rgb(255,120,0)", lineWidth: 5, smoothing: true, marker: {shape: "romb", width: 7, fillColor: "red"}}, stack: "default"}
                ],
                stacks: {
                    default: {type: "normal"}
                },
                facetAxis:{
                    defaultUnitWidth:8
                }
            }
        );
    }
    // using a custom library to load CSV data
    loadCSVObj("/dvsl/data/facet-chart/pc.csv", null, [
            {type: "string", name: "name"},
            {type: "decimal", name: "2005"},
            {type: "decimal", name: "2006"},
            {type: "decimal", name: "2007"},
            {type: "decimal", name: "2008"},
            {type: "decimal", name: "2009"},
            {type: "decimal", name: "2010"},
            {type: "decimal", name: "2011"},
            {type: "decimal", name: "2012"},
            {type: "string", name: "continent"}
        ], "\t",function(data){
            data = sortResponse(data, "2012", false);
            success(data);
        /* prepare preloaded data */
    });
    ```