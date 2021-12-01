# Bootstrap Basics

## Installation

### Angular
- Use CDNs
  - css
  - js
  - jquery
- Install via npm
  - npm install bootstrap jquery
  - Add the references to the angular.json file. Something like:
```javascript
"styles": [
  ...,
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  ...,
  "./node_modules/jquery/dist/jquery.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```