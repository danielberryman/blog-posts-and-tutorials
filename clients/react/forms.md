# Forms

### Tags
- Use base `<form></form>` tag

### event.target.value
- When a handler function is passed to an event listener on a form element use event object passed to it to obtain the value given by the user

### Submitting a form
- If a button with type="submit" is clicked inside a form tag  the form will emit an event for us. The "submit" event
- Steps
  1. Add a `<button type="submit"></button>` 
  2. Add the onSubmit attribute on your form tag
  3. Define the function that it will point to
  4. Create an object in the function and save values to your api or wherever

### Prevent the browser from reloading on form submit
- Whenever a form is submitted the browser will automatically send a server request for you. You want to disable this or the page will reload on submit
- Disable this default behavior call a `preventDefault()` on the event object
  ```javascript
  const submitHandler = (event) => {
      event.preventDefault();
      ...
  }
  ```
