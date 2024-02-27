---
title: Overview
sidebar_position: 1
---

# Charts overview

### Installation

Please see [installation section](google.com) on the various ways to install ZoomCharts.

### Adding a chart

With the library file included in your web page, you can now create your first chart.

To do so, locate the HTML element that will contain the chart. Make sure it can be referenced easily - assigning id property will do the best.

```js
<div id="chartContainer" style="width:300px;height:300px"></div>
```

And use the following code to create a Time Chart (same code for Net Chart, Pie Chart, Facet Chart, Geo Chart) object:

```js
chart = new TimeChart({
  container: document.getElementById("chartContainer"),
});
```

### Customizing the chart

When you initialize your chart you have to pass a settings object to it. The settings object contains all the configurable options that influence the look and feel of the chart.

Minimum required settings:

- container - the HTML element to create chart into.
- data - url or function or static data. See individual chart documentation on details.

You can alter the options after the chart is initialized, by calling `chart.updateSettings(changes)`. Specify only the options that you want to change. For example: `chart.updateSettings({area: { height:250, width:400 }}); ` would change the height and width of the chart on the fly.

ZoomCharts use a javascript object structure to define the settings. The settings object contains named properties. Each setting value can be either:

- `string - "good"`
- `number - 52`
- `boolean - true|false`
- `another object - {x:3, y:6, z:"good"}`
- `an array - [1,2,3,4]`
- `null`

### Performance

ZoomCharts are designed to deliver the best interactivity. We aim to deliver 60 FPS on desktop machines and minimum of 15 FPS on mobile devices.
Performance is also affected by the selected theme. Simpler themes can improve the performance of your chart.

### Assets

If you decide to move the assets folder to a non-default location, make sure to pass a proper `assetsUrlBase` setting, when initializing your chart.
