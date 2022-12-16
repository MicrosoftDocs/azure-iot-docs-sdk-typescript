# CHANGE LOG

## [3.0.0-preview.2](https://www.npmjs.com/package/azure-maps-control/v/3.0.0-preview.2) (December 16, 2022)

### New feature

Add `progressiveLoading` and `progressiveLoadingInitialLayerGroups` to [StyleOptions][StyleOptions] to enable the capability of loading map layers progressively. This feature improves the perceived loading time of the map. For more information, see [2.2.2 release notes](#222-december-15-2022).

The preview is available on [npm](https://www.npmjs.com/package/azure-maps-control/v/3.0.0-preview.2) and CDN.

- Install [azure-maps-control@next][azure-maps-control] to your dependencies:

```shell
npm i azure-maps-control@next
```

- Reference the following CSS and JavaScript in the `<head>` element of an HTML file:

```html
<link href="https://atlas.microsoft.com/sdk/javascript/mapcontrol/3.0.0-preview.2/atlas.min.css" rel="stylesheet" />
<script src="https://atlas.microsoft.com/sdk/javascript/mapcontrol/3.0.0-preview.2/atlas.min.js"></script>
```

### Bug fixes

- Fix an issue that the ordering of user layers wasn't preserved after calling `map.layers.move()`.

- Fix the inability to disable traffic incidents in [TrafficControlOptions][TrafficControlOptions] when `new atlas.control.TrafficControl({incidents: false})` is used.

- Add `.atlas-map` to all css selectors to scope the styles within the map container. The fix prevents the css from accidentally adding unwanted styles to other elements on the page.

## [3.0.0-preview.1](https://www.npmjs.com/package/azure-maps-control/v/3.0.0-preview.1) (November 18, 2022)

- This update is the first preview of the upcoming 3.0.0 release. The underlying [maplibre-gl][maplibre-gl] dependency has been upgraded from `1.14` to `3.0.0-pre.1`, offering improvements in stability and performance. The preview is available on npm.
- Install [azure-maps-control@next][azure-maps-control] to your dependencies:

```shell
npm i azure-maps-control@next
```

### Bug Fixes

- Fix a regression issue that prevents IndoorManager from removing a tileset by using

```js
indoorManager.setOptions({
    tilesetId: undefined
})
```

## [3.0.0-preview.1](https://www.npmjs.com/package/azure-maps-control/v/3.0.0-preview.1) (November 18, 2022)

- This update is the first preview of the upcoming 3.0.0 release. The underlying [maplibre-gl][maplibre-gl] dependency has been upgraded from `1.14` to `3.0.0-pre.1`, offering improvements in stability and performance. The preview is available on npm.
- Install [azure-maps-control@next][azure-maps-control] to your dependencies:

```shell
npm i azure-maps-control@next
```

### Bug Fixes

- Fix a regression issue that prevents IndoorManager from removing a tileset by using

```js
indoorManager.setOptions({
    tilesetId: undefined
})
```

## [2.2.2](https://www.npmjs.com/package/azure-maps-control/v/2.2.2) (December 15, 2022)

### New Features

- Add `progressiveLoading` and `progressiveLoadingInitialLayerGroups` to [StyleOptions][StyleOptions] to enable the capability of loading map layers progressively. This feature improves the perceived loading time of the map.

- `progressiveLoading`
  - Enables progressive loading of map layers.
  - Defaults to `false`.

- `progressiveLoadingInitialLayerGroups`
  - Specifies the layer groups to load first.
  - Defaults to `["base"]`.
  - Possible values are `base`, `transit`, `labels`, `buildings`, and `labels_places`.
  - Other layer groups are deferred such that the initial layer groups can be loaded first.

### Bug Fixes

- Fix an issue that the ordering of user layers wasn't preserved after calling `map.layers.move()`.

- Fix the inability to disable traffic incidents in [TrafficControlOptions][TrafficControlOptions] when `new atlas.control.TrafficControl({incidents: false})` is used.

## [2.2.0](https://www.npmjs.com/package/azure-maps-control/v/2.2.0) (September 19, 2022)

### New Features

- Add `mapConfiguration` option to ServiceOptions that enables the capability to pass Azure Maps Creator Custom Styling's map configurations.

- WebGLLayer support.

- Default styles update: road shield refined world-wide. (default styleDefinitions version updated from `2021-02-21` to `2022-08-05`)

- \[Indoor\] Support selection of multiple indoor facilities within the same style

### Bug fixes

- fix removal of custom map client eventhandlers (minzoomchanged/maxzoomchanged/mapconfigurationchanged)

- fix ZoomControl removal cleanup

[azure-maps-control]: https://www.npmjs.com/package/azure-maps-control
[maplibre-gl]: https://www.npmjs.com/package/maplibre-gl
[StyleOptions]: https://learn.microsoft.com/javascript/api/azure-maps-control/atlas.styleoptions?view=azure-maps-typescript-latest
[TrafficControlOptions]: https://learn.microsoft.com/javascript/api/azure-maps-control/atlas.trafficcontroloptions?view=azure-maps-typescript-latest
