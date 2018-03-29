---
title: How to add a shape to Azure Location Based Services' map | Microsoft Docs
description: Add a shape on a map
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

# Add a shape on a map

## Overview
This tutorial shows you how to add different kinds of shapes to a map.  

## Understand the code

Three types of shapes you can add to a map are demonstrated here: line, circle, and rectangle.

<a id="addALine"></a>

### Add a line

<iframe height='400' scrolling='no' title='Add a line to a map' src='//codepen.io/S-J-M/embed/yvGVzr/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/yvGVzr/'>Add a line to a map</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest) and [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest) classes and how to [addLinestrings](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addLinestrings) using the [LinestringLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/linestringlayeroptions?view=azure-iot-typescript-latest). 

<a id="addACircle"></a>

### Add a circle

<iframe height='400' scrolling='no' title='Add a circle to a map' src='//codepen.io/S-J-M/embed/jZJPjQ/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/jZJPjQ/'>Add a circle to a map</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest), [Point](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/point?view=azure-iot-typescript-latest), and [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest) classes and how to [addCircles](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addCircles). 


<a id="addARectangle"></a>

### Add a rectangle

<iframe height='400' scrolling='no' title='Add a rectangle to a map' src='//codepen.io/S-J-M/embed/RQRZww/?height=400&theme-id=dark&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; margin-top: 20px; margin-bottom: 20px'>See the Pen <a href='https://codepen.io/S-J-M/pen/RQRZww/'>Add a rectangle to a map</a> by Azure Maps (<a href='https://codepen.io/S-J-M'>@S-J-M</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Learn more about the [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest), [Polygon](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/polygon?view=azure-iot-typescript-latest), and [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest) classes and how to [addPolygons](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPolygons).  

## Try out the code 

Take a look at the preceding sample code. You can edit the JavaScript code on the JS tab on the left and see the map view changes on the Result tab on the right. Alternatively, you can click on the "Edit/Fork on CodePen" button and edit the code on CodePen. 

<a id="relatedReference"></a>

## Related reference

To create a map, you need to use the following classes/methods:
* [Map](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest)
    * [addLinestrings](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addLinestrings)
    * [addCircles](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addCircles)
    * [addPolygons](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/map?view=azure-iot-typescript-latest#location_based_services_javascript_Map_addPolygons)
* [LinestringLayerOptions](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/linestringlayeroptions?view=azure-iot-typescript-latest)
* [Point](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/point?view=azure-iot-typescript-latest)
* [Polygon](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/polygon?view=azure-iot-typescript-latest)
* [Feature](https://docs.microsoft.com/en-us/javascript/api/location-based-services-javascript/feature?view=azure-iot-typescript-latest)

## Next steps 

To use Azure Location Based Services, you must create an Azure account. Learn more about how to create an account and get your API key [here](https://docs.microsoft.com/en-us/azure/location-based-services/how-to-manage-account-keys). 