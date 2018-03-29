---
title: How to show traffic on the Azure Location Based Services' map | Microsoft Docs
description: Show traffic
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

# Show traffic on the map

## Overview
This tutorial shows you how to show traffic information on the map.

## Understand the code

Create a map and then use the Map Control SDK to show the traffic information.

<a id="showRoute"></a>

### Show traffic information

<iframe height='400' scrolling='no' title='Show traffic on a map' src='//codepen.io/S-J-M/embed/WMLRPw/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/WMLRPw/'>Show traffic on a map</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) class and how to [setTraffic](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_setTraffic) using the [TrafficOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/trafficoptions?view=azure-iot-typescript-latest).

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To add a pin to the map, you need to use the following classes:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [setTraffic](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_setTraffic)
* [TrafficOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/trafficoptions?view=azure-iot-typescript-latest)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys).