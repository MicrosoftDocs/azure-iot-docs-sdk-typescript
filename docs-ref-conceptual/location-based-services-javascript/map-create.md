---
title: How to create Azure Location Based Services' map | Microsoft Docs
description: Create a map
services: location-based-services
keywords: 
author: dsk-2015
ms.author: shubhaj
ms.date: 02/22/2018
ms.topic: tutorial
ms.service: location-based-services

documentationcenter: ''
manager: timlt
ms.devlang: na
ms.custom: mvc
---

# Create a map

## Overview
This tutorial shows you how to create a map.  

## Understand the code

There are two ways you can construct a map. You can set the camera of the map by specifying the center point and zoom level. Or you can set the camera bounds of the map by specifying the southwest bounding point and the northeast bounding point. 

<a id="setCameraOptions"></a>

### Setting the camera

<iframe height='400' scrolling='no' title='Create a map via CameraOptions' src='//codepen.io/S-J-M/embed/qxKBMN/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/qxKBMN/'>Create a map via CameraOptions</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the preceding code, the map is constructed by setting the center point and zoom level. Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) class and how to set the [CameraOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/cameraoptions?view=azure-iot-typescript-latest). 

<a id="setCameraBoundsOptions"></a>

### Setting the camera bounds

<iframe height='400' scrolling='no' title='Create a map via CameraBoundsOptions' src='//codepen.io/S-J-M/embed/ZrRbPg/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/S-J-M/pen/ZrRbPg/'>Create a map via CameraBoundsOptions</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the preceding code, the map is constructed via setting the southwest bounding point and the northeast bounding point. Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) class and how to set the [CameraBoundsOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/cameraboundsoptions?view=azure-iot-typescript-latest) using [setCameraBounds](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_setCameraBounds). 

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To create a map, you need to use the following classes/methods:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [setCameraBounds](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_setCameraBounds)
* [CameraOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/cameraoptions?view=azure-iot-typescript-latest)
* [CameraBoundsOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/cameraboundsoptions?view=azure-iot-typescript-latest)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys). 