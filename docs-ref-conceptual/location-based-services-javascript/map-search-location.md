---
title: How to show search results on the Azure Location Based Services' map | Microsoft Docs
description: Show search results
services: location-based-services
keywords: 

author: dsk-2015
ms.author: shubhaj
ms.date: 03/01/2018
ms.topic: tutorial
ms.service: location-based-services

documentationcenter: ''
manager: timlt
ms.devlang: na
ms.custom: mvc
---

# Show search results on the map

## Overview
This tutorial shows you how to to search for points of interest.

## Understand the code

You can use the Azure Location Based Services' Search Service API to find points of interest on your map. In this case, you will search for "gas stations" in Seattle. The Search Service assigns a latitude and longitude information for each address.

<a id="showSearchResults"></a>

### Show search results

<iframe height='400' scrolling='no' title='Show search results on a map' src='//codepen.io/S-J-M/embed/KQbaeM/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/KQbaeM/'>Show search results on a map</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the preceding code, a request is sent to the search service to get the coordinates of the gas stations, and then pins and popups are added to the map to represent those coordinates. Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) and [Popup](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest) classes and how to [addPins](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPins) and [setPopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_setPopupOptions). 

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To add a pin to the map, you need to use the following classes:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [setCameraBounds](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_setCameraBounds)
    * [addPins](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPins)
    * [setPopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_setPopupOptions)
    * [addEventListener](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addEventListener)
* [Popup](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest)
    * [setPopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_setPopupOptions)
    * [open](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_open)
    * [close](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_close)
* [PopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popupoptions?view=azure-iot-typescript-latest)
* [Point](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/point?view=azure-iot-typescript-latest)
* [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest)
* [PinLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/pinlayeroptions?view=azure-iot-typescript-latest)
* [CameraBoundsOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/cameraboundsoptions?view=azure-iot-typescript-latest)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys).