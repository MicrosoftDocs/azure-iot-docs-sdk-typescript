---
title: How to add a pin to Azure Location Based Services' map | Microsoft Docs
description: Add a pin
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

# Add pins on the map

## Overview
This tutorial shows you how to add a pin on a map.  

## Understand the code

Create a point feature and then add it as a pin to the map.

<a id="addAPin"></a>

### Add a customized pin

<iframe height='400' scrolling='no' title='Add a pin to a map' src='//codepen.io/S-J-M/embed/ZrVpEa/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/ZrVpEa/'>Add a pin to a map</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the preceding code, the pin is constructed by creating a pin feature and then adding it to the map. Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest), [Point](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/point?view=azure-iot-typescript-latest), and [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest) classes and how to [addPins](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPins) using the [PinLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/pinlayeroptions?view=azure-iot-typescript-latest). 

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To add a pin to the map, you need to use the following classes:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [addPins](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPins)
* [Point](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/point?view=azure-iot-typescript-latest)
* [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest)
* [PinLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/pinlayeroptions?view=azure-iot-typescript-latest)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys). 