---
title: Labels
sidebar_position: 7
---

# Labels

Labels through ZoomCharts have a common set of style attributes.

- `textStyle = {`: text rendering style, see .
  - `font = "12px Arial"`: font to use, including size, bold, italic.
  - `fillColor = "black"`: text color
- `align`: text align, one of "left", "right" or "center".
- `aspectRatio`: desired aspect ratio of the item. Text will be wrapped into multiple lines to maintain aspect ratio.
- `backgroundStyle = {`: background rendering style.
  - `fillColor = "black"`: item background color
  - `lineColor = null`: item outline color
  - `lineWidth = 1`: item outline width in pixels
- `padding = 0`: padding between item content and item border.
- `borderRadius = 999`: radius of item border in pixels. Similar to CSS border radius property. Zero radius will show a rectangle.
