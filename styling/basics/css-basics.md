# CSS Basics

## Basic Setup

### Normalize or not?
HTML Boilerplate ships with something called normalize.css which helps to work across different browsers. Some are seeing less of a need for this so another option is do a global reset of styles:
```css
* {
  margin: 0;
  padding: 0; /* By default browsers apply some padding or margin on elements */
  box-sizing: border-box; /* This changes the box model so the margins or paddings are not added to the total height and width */
}
```

### Fonts
- Always specify default font settings on the body because doing this utilizes the power of inheritance
- Properties
  - Font family
  - Font weight
  - Font size (16)
  - Line height

### Background Image
- Property: background-image: url(../path/to/file.jpg);

### Using and positioning the <img /> tag
- <img /> is an inline element so it's best practice to enclose the element in a div and then position the div