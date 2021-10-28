# Reactive Forms Helper
<hr>

## Import ReactiveFormsModule
- Add `ReactiveFormsModule` to imports array in @NgModule

## FormGroup/Control Definition in Component
- Add your form element
- Add `formGroup` directive: <form [formGroup]="form"></form>
  - *FormGroup is the reactive form's way of tracking State and Validity of the overall value of the form. The FormGroup is setup in the component.*
- In the component:
  - Import FormBuilder, FormGroup, FormControl, and Validators from @angular/forms:
    - `import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';`
  -  Add a FormBuilder object to the params in the constructor:
    - `constrcutor(fb: FormBuilder) { }`
  - Define the `form` variable (matching html formGroup directive name) as a new FormGroup object using the fb:
    - `form = fb.group({ ... })`
  
## Controls
- List the controls you need
- Component:
  - Within the fb.group object define key value pairs of string (property) and array (value):
    - Property is the name of the control in the group
    - Array notation: first element is the initial value of the control, the following elements are the controls validators
- HTML view:
  - Add a label
  - Add the control
    - Set type
    - Add `formControlName="property name in component def"`

## Validate controls
- For each control:
  - What validations are needed?
  - Add validations to component
  - Define css for controls:
  - Define any elements/messages in html that will be displayed for:
  - Define css for elements/messages in html that will be displayed for:
  - Using disabled and hidden html directives

## Validate form overall

## Define your Submit function

### Reactive Observable-based API 
- Why are reactive forms called reactive? *Because both the form controls and the form itself provide an Observable-based API meaning you can think of the form as a continuous stream of values and use RxJs operators on.*
- Subscribe to the following observable: `this.form.valueChanges`
- Ex: `this.form.valueChanges.subscribe((value) => { do something })`

## Updating values
- Update APIs on the reactive form
  - Update the full form: `this.form.setValue({ pass entire form object - meaning all properties/values });`
  - Update several or 1 value: `this.form.patchValue({ key/value pairs });`

## Reset a from
- `this.form.reset();`

## Use case: Pre-save the form in the background

## Use case: Undo/redo connected to desktop os system