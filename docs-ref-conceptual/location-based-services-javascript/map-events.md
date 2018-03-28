---
title: How to use Azure Location Based Services' map events | Microsoft Docs
description: Map events
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

# Interacting with the map – mouse events 

## Overview
This tutorial shows you how to make the map interactive by adding mouse events.

## Understand the code

Create a map and then add event listeners for various mouse events.

<a id="showRoute"></a>

### Add mouse events

<iframe height='400' scrolling='no' title='Interacting with the map – mouse events' src='//codepen.io/S-J-M/embed/bLZEWd/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/bLZEWd/'>Interacting with the map – mouse events</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) class and how to [addEventListener](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addEventListener).

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To add a pin to the map, you need to use the following classes:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [addEventListener](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addEventListener)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys).