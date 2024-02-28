---
title: Architecture
sidebar_position: 2
---

# Overall architecture

ZoomCharts has been built with the idea of visualizing large amounts of data. To do so the internal architecture consists of two layers:

- Data cache that stores all the data. It has very little overhead and can accommodate millions of objects easily (limited by browser memory).
- Display layer. It selects what objects to display from the cache. Usually this ranges from few hundreds up to few thousands.

### Data cache

The data cache stores and requests the data that the chart needs. It can work in two modes:

- full data - all data is added to the chart using `chart.addData`, `chart.replaceData` or set into configuration using `settings.data.preloaded`.
- incremental data - a data callback function or URL is provided. The chart dynamically loads more data as user navigates the chart.

### Display layer

Display layer handles all the interaction with the user and renders data. All Charts use a common pipeline to render data. Here is an overview.

<!-- photo -->

### Pending changes

Chart API calls only update configuration. An animation frame is requested and all computationally intensive changes are postponed until rendering of next frame. This approach minimizes computation overhead when performing multiple changes in the chart.
It's possible to force evaluation of all changes by calling `chart.paintNow()`.

### Filters

Filter is a javascript function that is called for each object to determine if it has to be shown or not.
These are only available on certain chart types.

### Building objects

For each visible data item a chart object is created.

The object building is incremental - only the minimum necessary changes are made to transition from previous state.

See the documention on each chart type on what objects are created for each particular chart.

### Style computation

Style determines each object's color, label and other visual features.

Style computation is a flexible system that allows defining both a general look and feel and customizing style for each object individually.

There are several ways how to define the style:

- initial style is applied from chart settings
- data can contain `style` attribute
- JavaScript style function can be called on each chart object

See the documentation on each chart type on what style attributes are available for each chart object and how how to specify them.

### Compute coordinates

When object final style is known, chart layout takes place. The layout usually is implemented with transition animations to ensure visual continuity.

### Painting

Finally the chart is painted on HTML5 canvas.
