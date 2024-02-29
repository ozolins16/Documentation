---
title: Facet Chart API
sidebar_position: 3
---

# FacetChart API

## Inheritance hierarchy
This type inherits from [BaseApi](https://google.com).

### Constructors
 - **.ctor**: (settings: [FacetChartSettings](google.com))
    #### *Parameters*
    - **settings**: [FacetChartSettings](google.com)
    #### *Return value*
    - Data type: [FacetChart](google.com)

### Methods
---
- **addData**: (data: [FacetChartDataObjectRoot](google.com), sourceId?: [string](google.com)): [void](google.com)

    > Inherited from: [BaseApi](google.com)

    Adds the given data to whatever data the chart has currently loaded. The chart will automatically be updated to display this new data if it falls within the currently visible bounds.
    #### *Parameters*
    - **data**: [FacetChartDataObjectRoot](google.com)
    - **sourceId**: [string](google.com)

        the ID of the data source that will be updated. The default value is `default`.

    ---
- **addSubchartContainer**: (container: [HTMLElement](google.com)): [void](google.com)
    >Inherited from: [BaseApi](google.com)

    This property is deprected; use settings.parentChart instead.
    #### *Parameters*
    - **container**: [string](google.com) | [HTMLElement](google.com)
    ---
- **back**: (): [this](google.com)
    >Inherited from: [BaseApi](google.com)
    #### *Return Value*
    - Data type: [this](google.com)
    ---
- **clearHistory**: (): [this](google.com)
    >Inherited from: [BaseApi](google.com)
    #### *Return Value*
    - Data type: [this](google.com)
    ---
- **customize**: (name: [string](google.com)): [this](google.com)
    >Inherited from: [BaseApi](google.com)

    Applies one of the built-in themes to the chart. This is an alternative to calling 
    ```updateSettings({ theme: ZoomCharts.FacetChart.themes.dark })```.
    #### *Parameters*
    - **name**: [string](google.com)

        The name of the theme to be applied, must be one of the values defined in the `FacetChart.themes` static property.
    #### *Return Value*
    - Data type: [this](google.com)
---
- **expandSlice**: (slice: [FacetChartItem](google.com), origin?: [string](google.com)): [boolean](google.com)
    #### *Parameters*
    - **slice**: [FacetChartItem](google.com)
    - **origin**: [string](google.com)

    
    #### *Return Value*
    - Data type: [boolean](google.com)
---
- **export**: (type: "png" | "jpg" | "pdf" | "csv" | "xlsx", dimensions?: [BaseExportDimensions](google.com), transparent?: [boolean](google.com), fileName?: [string](google.com)): [void](google.com)
    >Inherited from: [BaseApi](google.com)

    Launches a file download that contains an image or the data of the current state of the chart.

    Note that in some browsers calling this method will send the data to a proxy. When handling sensitive data you should install the proxy on your own server, see `advanced.exportProxyURL` setting.
    #### *parameters*
    - **type**: "png" | "jpg" | "pdf" | "csv" | "xlsx"

        The format in which the data will be exported.

    - **dimensions**: [BaseExportDimensions](google.com)

        Specifies the dimensions for the image formats.

    - **transparent**: [boolean](google.com)
        >Version 1.12.0: default changed to `false`.

        Specifies if the resulting image should have transparent background. This setting is only valid for `png` image format. Default is `false`.

        Note that if `area.style.fillColor` is set, this will have no effect.

    - **fileName**: [string](google.com)

        Specifies the fileName to be used, excluding fileExtension
---

- **exportAsString**: (type: "png" | "jpg" | "pdf" | "csv" | "xlsx", callback: (dataUri: [string](google.com), mimeType: [string](google.com), extension: [string](google.com)) => [void](google.com), dimensions?: [BaseExportDimensions](google.com), transparent?: [boolean](google.com)): [void](google.com)
    >Inherited from: [BaseApi](google.com)

    Saves the current chart state as a data-URI.
    If image type is specified, the URI can be used as the image source in `<img src="">`.

    Note that some output settings might require sending the data to a proxy. When handling sensitive data you should install the proxy on your own server, see `advanced.exportProxyURL` setting.
    #### *Parameters*
    - **type**: "png" | "jpg" | "pdf" | "csv" | "xlsx"

        The format in which the data will be exported.

    - **callback**: (dataUri: [string](google.com), mimeType: [string](google.com), extension: [string](google.com)) => [void](google.com)

        The callback that will be invoked once the result is generated.

        #### *Parameters*
        - **dataUri**: [string](google.com)

        The data-uri that contains the generated image or data file.

        - **mimeType**: [string](google.com)

            The mime type of the generated file.

        - **extension**: [string](google.com)

            The extension of the generated file.

    - **dimensions**: [BaseExportDimensions](google.com)

        Specifies the dimensions for the image formats.

    - **transparent**: [boolean](google.com)

        Specifies if the resulting image should have transparent background. This setting is only valid for `png` image format. Default is `false`.

        Note that if `area.style.fillColor` is set, this will have no effect.
---
- **exportGetDimensions**: (dimensions: [BaseExportDimensions](google.com)): `{` width: [number](google.com); height: [number](google.com); scale: [number](google.com); chartWidth: [number](google.com); chartHeight: [number](google.com); `}`
    >Inherited from: [BaseApi](google.com)
    This property is deprected; use `exportImageGetDimensions` instead

    Returns the dimensions for the image exported with `exportImageAsString`.
    #### *Parameters*

    - **dimensions**: [BaseExportDimensions](google.com)


    #### *Return Value*
    - Data type: [anonymous type](google.com)

        #### *Parameters*
        - **width**: [number](google.com)
        - **height**: [number](google.com)
        - **scale**: [number](google.com)
        - **chartWidth**: [number](google.com)
        - **chartHeight**: [number](google.com)
---
- **exportImageAsString**: (type: "png" | "jpg" | "pdf" | "csv" | "xlsx", dimensions: [BaseExportDimensions](google.com), transparent: [boolean](google.com)): [string](google.com)
    >Inherited from: [BaseApi](google.com)
    This property is deprected; use `exportAsString` instead.

    Saves the current chart state as an image.

    Note that this method does not support custom DPI setting, for that exportAsString method has to be used.
    #### *Parameters*
    - **type**: "png" | "jpg" | "pdf" | "csv" | "xlsx"
    - **dimensions**: [BaseExportDimensions](google.com)
    - **transparent**: [boolean](google.com)


    #### *Return Value*
    - Data type: [string](google.com)
        A base64 encoded data-URI that contains the image data. This URI can be used as the image source in `<img src="">`.
---
- **exportImageGetDimensions**: (dimensions: [BaseExportDimensions](google.com)): `{width: [number](google.com); height: [number](google.com); scale: [number](google.com); chartWidth: [number](google.com); chartHeight: [number](google.com)}`; 

    >Inherited from: [BaseApi](google.com)

    Returns the dimensions for the image exported with `exportImageAsString`.
    #### *Parameters*
    - **dimensions**: [BaseExportDimensions](google.com)


    #### *Return Value*
    - Data type: [anonymous type](google.com)

        #### *Parameters*
        - **width**: [number](google.com)
        - **height**: [number](google.com)
        - **scale**: [number](google.com)
        - **chartWidth**: [number](google.com)
        - **chartHeight**: [number](google.com)
---
- **fullscreen**: (isFullscreen?: [boolean](google.com)): [boolean](google.com)
    >Inherited from: [BaseApi](google.com)
    
    Gets or sets the fullscreen state of the chart.

    #### *Parameters*
    - **isFullscreen**: [boolean](google.com)

        specify `true` or `false` to set the state, omit the value to get the current state.
    #### *Return Value*

    - Data type: [boolean](google.com)