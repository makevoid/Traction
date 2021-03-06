# Traction
#### EV Dashboard Development Framework

Traction is a hybrid mobile framework for building rich human machine interfaces (ie. dashboards) for different types of electric vehicles, from e-bikes and e-skateboards to electric motorcycles and cars. It began as a simple dashboard app for the Vesc BLDC controller by Benjamin Vedder (https://github.com/vedderb/bldc) and migrated towards a platform for building custom GUIs that connect to different motor controllers. 

Traction draws upon the ReactJS framework to provide an architecture that encourages the use of self-contained and fully styled, reusable components. These include speedometers, temperature gauges, trip odometers, battery indicators, watt meters, etc. K.I.S.S. principles and zen philosophy is the underlying emphasis. To achieve this, Traction exclusively relies on HTML5/CSS/Javascript and uses minimal native platform code. 

## Core technologies used

* Cordova - access to mobile device hardware 
* ReactJS - front-end framework and JSX templating engine
* Radium - inline js styles for React components
* React-Bootstrap - Bootstrap styled React component library
* WebPack - asset compiler/bundler and development server
* Protobuf - language/platform neutral protocol for serializing data

## Development environment

* Chrome Canary Browser + DevTools - debugging, DOM inspection and editing
* Sublime Text 3 + various plugins - main IDE, code editor
* Cmder - split-pane command terminal windows

## Supported motor controllers

* Vesc - http://vedder.se/2015/01/vesc-open-source-esc/
* Mobipus (soon) - http://mobipus.com/

## User interfaces available

* Easy Slider - simple responsive layout that works with very small devices 
* Sub Mission - tribute to the Mission-R motorcycle which has now gone under

## Screen shots

__Easy Slider__

![screen shot1](https://raw.githubusercontent.com/bchiu/Traction/master/docs/images/easy-slider-screen1.png)

![screen shot2](https://raw.githubusercontent.com/bchiu/Traction/master/docs/images/easy-slider-screen2.png)

__Sub Mission (preview)__

![screen shot1](https://raw.githubusercontent.com/bchiu/Traction/master/docs/images/sub-mission-screen.gif)

# License

[The MIT License (MIT)](./license.md)

Copyright (c) 2015 Ben Chiu
