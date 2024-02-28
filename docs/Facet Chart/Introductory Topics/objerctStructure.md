---
title: Object Structure
sidebar_position: 1
---

# Object structure

The facet chart consists of Facet objects and Item objects. A stack of fact objects is maintained and only topmost item is usually being rendered.. Each facet contains array of items, each individual item represents a single entry in the chart.
The following read-only fields are available. All other fields in the objects are considered internal and subject to change. Each object also has a collection of style fields you can assign to, described in the style section.

### Facet fields
- `id` - facet id
- `data[]` - pie data as received from data source
- `items` - array of currently visible items
- `parentItem` - item in facet up in stack that was drilled down into
- `activeItemId` - drilled down item id - for background facets only
- `offset` - offset in data for visible items
- `count` - number of visible items

### Item fields
- `id` - item id
- `facet` - owner facet object
- `innerFacet` - drilled down facet object - if the item item is expanded
- `index` - index in the data array
- `data` - item data as received from data source
- `values[]` - array of ItemValue objects representing individual values. Each array item corresponds to item in settings.series array.
- `expandable` - if clicking on the item will expand it, true or false
- `selected` - if is selected, true or false
- `active` - if is under the cursor, true or false

### ItemValue fields
- `value` - actual value derived form data

### Api methods
The following chart API methods return chart objects:
- `chart.getActiveFacets()` - returns array of facet objects representing stack of all drilled down facets. - Last being the topmost.
- `chart.getActiveFacet()`- returns active facet.
- `chart.getActiveItems()` - returns array of currently visible items for active facet.