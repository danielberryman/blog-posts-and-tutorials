# CSS Concepts

## Three Pillars
1. Responsive Web Design (1 websites that works seamlessly across device size)
2. Maintainable & Scalable Code
3. Web Performance (make it faster and smaller in size)

### Web Performance
- Less HTTP Requests
- Less code
- Compress code
- Use a Preprocessor
- Less images
- Compress images

## How CSS Works
- What happens to CSS when it loads in the browser
  - It loads/parses HTML line by line and builds the DOM
  - Then it loads CSS and begins parsing it
    - Resolving conflicting CSS decalrations via cascade
    - Process final CSS values (percentages for example)
  - CSS is stored in the CSS Object Model
  - The DOM and CSSOM form the render tree
  - Then the website is rendered as the visual formatting model

## CSS Parsing by the Browser
- Step 1: Resolving conflicting CSS decalrations via cascade
  - This is the 'C' is CSS
  - Process of combining stylesheets and resolving conflicts between css rules
  - CSS comes from a few places: author (dev), user (sets default font size of browser), user agent (anchor tag default styling)
  - 3 levels of heirachy
    - Important
      - User !important declarations
      - Author !important declarations
      - Author declarations
      - User declarations
      - Browser default declarations
    - Specificity (If same importance then it moves here)
      - Inline styles
      - IDs
      - Classes, pseudo-classes, attribute
      - Elements, pseudo-elements
      - *It basically makes an array of each of the above specificities and gives them each a # based on what's included in each rule. Then of the conflicting rules whichever rule has the highest number of the array (0,0,0,0) wins. Like (0,1,2,1) would win over (0,0,2,0). Numbers represent the number of that type of selector on the rule
    - Source Order
      - If importance and specifity is the same then the last rule written in the css wins
    - *Best to rely on specificity and not order*
    - *You need to worry about order if you're using 3rd party stylesheets. Include your styles last in the html*
- Step2: Process final CSS values (percentages for example)
  - Process
    - Declared value (before cascade conflict resolution)
    - Cascaded value (conflict resolution)
    - Specified value (would be default but it's superceded by the cascaded value)
    - Computed value (compute the value if needed in relation to parent, viewport, whatever)
    - Used value (value represented in exact pixels using decimal)
    - Actual value (rounded final value represented in pixels always)
  - *All non pixel units will be converted to pixels eventually*
  - *Each element on the page has an initial value for eveyr element that can be declared on it (specificed value stage)*

## Convert Relative Units to Pixels
- %
  - Fonts
    - Font size x% larger/smaller than it's parent element
  - Lengths
    - x% larger/smaller than it's parent elements width
- em
  - Fonts
    - em: use current elements parent as reference (x * parent font size)
    - rem: use root font as reference (x * root font size)
  - Lengths
    - Uses font size of the current element as a reference (x * current element font size)
  *Why use ems? You can use them to build responsiveness into your website such that by controlling the font size you can control lengths of elements*
- vh (viewport height)
- vw (viewport width)

## Inheritance
- First CSS says: is there a cascaded property? If not then it asks: can the value be inherited?
- You can check if a property is inherited by checking the spec for that css property
- The value passed down is the computed value not the declared value
- If there's no specified value then it will be the initial value
- You can use the inherit keyword to force inheritance and also initial to force the initial value