What is the visual formatting model in the browser?|Algo that calculates the boxes and determines the layout of boxes for each element in the render tree to determine the final layout of the page
What are 3 main aspects of a website the visual formatting model uses to format a page?|The box model, position schemes, stacking context
What properties make up the box model?|margin, border, padding, width, height, content)
What's included and excluded from inline-block level elements?|They occupy content space and have no line breaks like inline els but apply the box model like block els
What's true of inline elements?|Content is distributed across lines, no line breaks, no heights or widths, only sets horizontal padding and margin
What true about the width and height of block level elements by default?|They only refer to the content. They don't account for the padding and border
How do you use width and height to set sizes on the combo of content, padding, and border of an element?|box-sizing: border-box
What is stacking context?|A strategy to form layers of elements that may overlap
Name properties that impact stacking context?|z-index, opacity, transform, filter
What is BEM?|Block element modifier, it's a naming convention strategy for CSS classes

--------------

T/F Not every css property on an element needs to have a value.|false
How do you select pseudo-elements of an element?|::after, ::before

--------------

What is this called as a structure? .red { color: red; }|css rule
What are these called? .red, #title|selectors
What is the structure of the curly braces called? .red { color: red; }|declaration block
What are these examples of? color: red; height: 100px;|declarations
Which of these selectors has a higher specificity (answer with 1, 2, or s for same)? .red:hover or .red|s
Which of these selectors has a higher specificity (answer with 1, 2, or s for same)? .red:hover or #nav .red|2
If you don't declare a font size on an element what will the font size be?|The default font-size supplied by the browser
When setting a font size with % the % is relative to...|the parent element's font size
When setting a length with % the % is relative to...|the parent element's width
When setting a font size with em the calculation uses...|the current element's parent's font size
When setting a font size with rem the calculation uses...|the root element's font size
When setting a legnth with em the calculation uses...|the current element's font size

--------------

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