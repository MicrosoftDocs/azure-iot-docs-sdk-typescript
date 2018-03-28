---
title: How to get information from an Azure Location Based Services' map coordinate | Microsoft Docs
description: Get information from a coordinate
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

# Get information from a coordinate

## Overview
This tutorial shows you how to show popups with information from a coordinate on a map.  

## Understand the code

Add an event listener to the map that shows a popup when a particular location is clicked.

<a id="showInformation"></a>

### Show coordinate information

<iframe height='400' scrolling='no' title='Get information from a coordinate' src='//codepen.io/S-J-M/embed/ddXzoB/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/ddXzoB/'>Get information from a coordinate</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the preceding code, the popup is constructed by adding event listeners that create popup elements to the map by requesting the reverse geocode information from Azure Location Based Services REST API. Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) and [Popup](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest) classes and how to [setPopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_setPopupOptions) using the [PopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popupoptions?view=azure-iot-typescript-latestt). 

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To add a pin to the map, you need to use the following classes:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [addEventListener](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addEventListener)
    * [getCanvasContainer](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_getCanvasContainer)
* [Popup](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest)
    * [setPopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_setPopupOptions)
    * [open](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_open)
    * [close](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popup?view=azure-iot-typescript-latest#location_based_services_javascript_Popup_close)
* [PopupOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/popupoptions?view=azure-iot-typescript-latest)
* [Point](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/point?view=azure-iot-typescript-latest)
* [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest)
* [PinLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/pinlayeroptions?view=azure-iot-typescript-latest)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys). 