# Implement Angular Forms Quickly

## Template or Reactive?
<hr>
- Need a simple form? Choose template.
  - *Caveat is that template form validation cannot be easily unit tested*
- Does your form require complex business logic? Do you want to be able to easily unit test your forms? Do you need to define custom validators? Choose reactive.
- *In a nutshell reactive forms allow you to define the form model programmatically instead of declaratively via the view.*

## Template
<hr>

### Bi-directional or Uni-Directional or None
- Do you need to process the data entered by your user in real time? Choose Bi.
  - `[(ngModel)]=""`
- Do you only need the data entered by your user when they click submit? Choose Uni.
  - `[ngModel]=""`
- Do you not need binding or to set initial values but still want validation and overall form value tracking for submission? Choose none.
  - `<input type="text" ngModel required>`

### Setup the data you're binding to in your component
- Edit form: object you receive from the backend
- Creation form: object to track form across multiple pages
- *Do you need binding to submit the form in Angular?* Because we don't have the ngModel directive normally...

### Setup your controls
- List the controls you need
- For each control:
  - Add a label
  - Add the control

### Validate controls
- For each control:
  - What validations are needed?
  - Add validations
  - Define css for controls:
    - control:ng-touched
    - control:ng-invalid
    - control:ng-dirty
  - Define any elements/messages in html that will be displayed for:
    - control:ng-touched
    - control:ng-invalid
    - control:ng-dirty
  - Define css for elements/messages in html that will be displayed for:
    - control:ng-touched
    - control:ng-invalid
    - control:ng-dirty

### Validate form overall

### Define your

## Reactive
<hr>

