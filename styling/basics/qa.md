What property can you use to create a different shape from an existing element?|clip-path
How can you center an element in the browser window using position and transform?|Set position to absolute, top/left to 50%, transform to translate(-50%,-50%)
When using the translate value with property transform what do translates args refer to?|The element itself
How can create text that has a border and no fill color?|Use the <text> tag and set the color to transparent, and add -web-kit-stroke-color and -web-kit-stroke-width
What is WebKit?|It's a web engine for rendering a DOM. It's 2 main parts are the WebCore which is the html, css, dom and the JavaScriptCore (js vm) used in Safari where as Chrome opts to use WebCore and it's V8 JS Engine
Why is it often a good idea to wrap an <img/> tag in a div?|Because img is an inline element so you would normally style the div element and let the img sit inside it
What can you do to reset styles across browsers?|Use normalize or set margin and padding to 0 using the global selector * { }
How many browser properties should you animate at any given time?|At max 2
What property allows you to get really specific with the timing of animations?|animation-timing-function
What property and value helps with the small shake you can sometimes see with animations?|backface-visibility: hidden
When you have lots of btns in your app that have mostly the same properties and values but for example have different colors how can you set up the CSS to be dry?|Use a seaprate class for the colors