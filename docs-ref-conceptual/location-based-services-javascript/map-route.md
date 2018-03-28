---
title: How to show directions from A to B with Azure Location Based Services' map | Microsoft Docs
description: Show directions
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

# Show directions from A to B 

## Overview
This tutorial shows you how to show directions from one point to another.

## Understand the code

You can use the Azure Location Based Services' Route Service API, to find the route to your point of interest on the map. The Route Service provides APIs to plan the fastest, shortest, or eco route between two locations, considering the real-time traffic conditions. It also allows users to plan routes in the future by using Azure's extensive historic traffic database and predicting route durations for any day and time. In this tutorial, a route from Seattle to Redmond will be requested from the services and drawn on the map. 

<a id="showRoute"></a>

### Show directions

<iframe height='400' scrolling='no' title='Show directions from A to B on a map' src='//codepen.io/S-J-M/embed/zRyNmP/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/zRyNmP/'>Show directions from A to B on a map</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


In the preceding code, a request is sent to the route service to get the route coordinates. The code then constructs an array of coordinates for line segments of the first route returned. Then lines, pins and popups are added to the map to represent the route. Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) and [Popup](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest) classes and how to [addPins](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPins) and [setPopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_setPopupOptions). 

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To add a pin to the map, you need to use the following classes:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [setCameraBounds](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_setCameraBounds)
    * [addLinestrings](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addLinestrings)
    * [addPins](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPins)
* [LinestringLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/linestringlayeroptions?view=azure-iot-typescript-latest)
* [Point](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/point?view=azure-iot-typescript-latest)
* [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest)
* [PinLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/pinlayeroptions?view=azure-iot-typescript-latest)
* [CameraBoundsOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/cameraboundsoptions?view=azure-iot-typescript-latest)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys).