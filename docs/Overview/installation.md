---
title: Installation
sidebar_position: 5
---

# Installation

### Include directly from CDN

CDN allows you to quickly get started with ZoomCharts, so that you can get your first chart ready in less than a minute.

```js
<script src="https://cdn.zoomcharts-cloud.com/1/stable/zoomcharts.js"></script>
```

ZoomCharts library will automatically download any dependencies it requires.

Please note that although the CDN is hosted on Microsoft Azure (Verizon Standard CDN) service, we do not guarantee any SLA for its availability.

### Download from CDN

In order to download the library to be hosted on your own servers, please follow the link https://cdn.zoomcharts-cloud.com/1/latest/zoomcharts.zip.

The download contains few quick-start `examples` in the examples folder that may be deleted when deploying the application.

The library expects that the `assets` folder is kept together with `zoomcharts.js`. If you want to move it or you are using JavaScript file bundling, you need to specify `assetsUrlBase` setting in the chart configuration.

**Note! In production environment do not use CDN as the source of library. Keep in mind that such versions such as `latest`, `nightly` or `stable` can change any time. To aviod some unexpected changes you should download your local copy of ZoomCharts. And upgrade to newer version whenever you have tested that on your development environment.**

### CDN version structure

You can download any version since 1.6 from the CDN by using the specific addresses listed below.

- `/1/stable/` - the latest stable v1 version. This is the version that is only updated after all of our own applications have been switched to it. If you reference the CDN directly and want automatic updates we recommend to use this link as it is the least likely to break your application.
- `/1/latest/` - the latest released v1 version. This is updated as soon as a new version is released. If you download a version from the CDN to use with your application, we recommend to use this link.
- `/1/nightly/` - a nightly build for v1. Use it only if you are testing certain issues.
- `/1/x/latest/` - where `x` is the minor version (such as `8` in `1.8.3`) - the latest revision within the specified version. If you reference the CDN directly we recommend to use this shortcut.
- `/1/x/y/` - where `x` and `y` are the minor version and revision numbers (such as `8.3` in `1.8.3`) - this is the direct link to a specific version that is guaranteed not to change.

### Additional files available on CDN

There are multiple files available for each version:

- `zoomcharts.js` - the full version of the library that include all chart types.
- `zoomcharts.zip` - the downloadable archive of the full version.
- `zoomcharts.d.ts` - a TypeScript definition file for the `zoomcharts.js` file.
- `netchart.js` - the version that only includes the NetChart component.
- `netchart.zip` - the downloadable archive of the NetChart version.
- `netchart.d.ts` - a TypeScript definition file for the `netchart.js` file.
- `revision.txt` - a text file that include the version and build information.
- `release.txt` - the release notes for that version and all previous versions.
