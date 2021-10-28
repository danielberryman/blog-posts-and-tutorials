# HTML Form Basics

## Basic Template & Rules to Follow
```html
<form action="/" method="POST">
    <label for="name">Name:</label>
    <input type="text">
    <button>Submit</button>
</form>
```
- Start with a form tag 
  - Add action and method attributes
- Write inputs and labels
  - Match label for attribute to input id attribute
  - Write visible label in the label's content
  - Add correct type attribute value to inputs
  - Give each input a name attribute for submitting data
- Finish Tasks
  - Download Screen Reader ext on Chrome and see how the screen reader reads your form
  - Remove screen reader from Chrome

## Submit with using the Action attribute
- Give the form an ID
- Using the ID in JS get the element and set an event listener for the submit event type
- Create a FormData object which you populate by getting the element via it's ID
- Use the following to access property values on the form: formData.get('property')

## Slightly less important things you might need to add
- Radio buttons
  - Always define radio buttons inside a fieldset
- Assign default values
  - <input value="">
  - <textarea>Place default value in the content of the tag</textarea>

Base Tag: <form></form>

Attributes
- accept
- accept-charset
- autocapitalize
- autocomplete
- name: needs to be unique among the forms collection if any
- rel: 

Attributes during submission
- action: the url used for form submission
- enctype: used with post requests and it indicates the Mimetype of the form submission
- method: post; get; dialog (when the form is inside a dialog this closes the dialog on submission)
- novalidate: tells browser to not validate the form
- target: a name/keyword for a browsing context in HTML5 / this would be like opening a new tab or something / default is _self which is same browser tab in a browser

## Structure
- Base tag is alwasy <form>
- Never nest a form inside another form
- You can explicitly relate controls outside the form tag to the form using the name attribute on both the form tag and the control tag
- Elements
  - fieldset
    - Used to structure content
    - Sub tags are normal form controls
    - Add the <legend></legend> tag to make the set of element more accessible
    - A screen reader will read the legend before each label element in the fieldset
      - Example:
        - If the legend is 'Fruit size' and the label content is 'Small', 'Medium' then the Screen reader will read 'Fruit size small' and 'Fruit size medium'.
    - If your form is large and you can't spread it across multiple pages using fieldset can improve usability
  - Other elements commonly used with forms to provide structure
    - <ol> and <ul> with inner <li> element wrapping a label/input pair
    - Also, common to use HTML titles and <section> tags to structure forms
      - Sections in a payment form could be the general info, the payment info, and the submit

## Elements necessary for a form

STRUCTURE
- Base <form></form> tag
- fieldset
  - legend

INPUTS
- input
  - types
    - number
    - range
- textarea
- select
  - optgroup
  - option
- datalist
  - option
- meter
- output: used to display a calculated value using the 

META
- label
  - Nice feature of labels connected to form controls is that you can control the form control by clicking the label as well as the form control itself

- Button for submitting the form
  - The button element by default has a type of submit so you don't need it unless you're doing something specific
- input
- label
  - represents a caption for an input
  - Attribute 'for' matches with the input's id attribute
  - A form input can have multiple labels
- select
  - optgroup
  - option
- datalist
  - option
- textarea

## Commit to memory
- Inputs are called form controls
- Input elements are "empty" elements
- Never nest a form element inside another form element
