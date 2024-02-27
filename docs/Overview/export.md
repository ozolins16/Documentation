---
title: Export
sidebar_position: 4
---

# Export

ZoomCharts SDK comes with a native built-in export feature to export the chart into JPEG, PNG or PDF format. Most charts can also export the data in CSV and XLSX (Excel) formats.

Export can be done in multiple ways:

- By pressing export button in the toolbar ([learn how to enable/disable export button in toolbar](google.com)).
- Making an API call to export the image in the desired format, see `export()`.
- Retrieving a data-URI with the exported image that can be then used as needed, see `exportAsString()`.

### Proxy Server

Most modern browsers support downloading the exported image directly in the browser. One notable exception is Safari (see [Can I use - download attribute](google.com), however note that IE10/ 11 are supported by other means). Another special case is Chrome browser that only supports it for files that are 2MB and smaller.

To support the exception browsers you will need an export proxy server. The chart is preconfigured to our hosted service at https://echo.zoomcharts-cloud.com/ however you can host the service on your own server.

The source code of the proxy service is available on GitHub:

- PHP: https://github.com/zoomcharts/proxy-export-php
- .NET: https://github.com/zoomcharts/proxy-export-dotnet

The export service URL has to be specified in the chart settings.

### Exporting GeoChart with tiles.

With current implementation unfortunately it is not possible to export GeoChart with drawn tiles as they are provided by [Leaflet](https://leafletjs.com/).

The workaround is to use 3rd party javascript library such as [html2canvas](https://html2canvas.hertzen.com/)
