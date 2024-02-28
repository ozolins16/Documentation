---
title: Facet Chart Stacked Series Passenger Cars In Use
sidebar_position: 6
---
# Facet Chart - clustered and stacked series, one level
Passenger cars in use totals, year 2012
<!-- image -->
 ```js
    function success(data){
        t = new FacetChart(
            {
                container: document.getElementById("demo"),
                data:{
                    preloaded: data
                },
                interaction: {resizing:{enabled:false}},
                series: [
                    {id: "s1", name: "2005", data: {field: "2005"}, stack: "default"}, 
                    {id: "s2", name: "2006", data: {field: "2006"}, stack: "default"}, 
                    {id: "s3", name: "2007", data: {field: "2007"}, stack: "default"}, 
                    {id: "s4", name: "2008", data: {field: "2008"}, stack: "default"}, 
                    {id: "s5", name: "2009", data: {field: "2009"}, stack: "secondary"}, 
                    {id: "s6", name: "2010", data: {field: "2010"}, stack: "secondary"}, 
                    {id: "s7", name: "2011", data: {field: "2011"}, stack: "secondary"}, 
                    {id: "s8", name: "2012", data: {field: "2012"}, stack: "secondary"}
                ],
                stacks: {
                    default: {type: "normal"},
                    secondary: {type: "normal"}
                },
                facetAxis:{
                    defaultUnitWidth:30
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