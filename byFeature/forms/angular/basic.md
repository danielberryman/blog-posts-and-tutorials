# Basics of Forms in Angular

## Helpful links:
- 

2 Types:
- Template Driven Forms (similar to AngularJS's ng-model)
- Reactive Forms

## Template Driven Forms
- Import `FormsModule` to @NgModule imports array (not included by default)
- *After importing FormsModule Angular will automatically add the `ngForm` directive to any html form element*
- ngForm Directive
  - Responsible for tracking the state of the form stored in the property `value`
  - Responsible for tracking the overall validity of the form
  - Add template export: `<form #someName="ngForm"></form>`
- ngModel Directive
  - This directive is added to each control: `<input type="text" [(ngModel)]="user.firstName">`
  - Responsible for the value attached to the control after every keystroke
  - Responsible for the validity of the value of the control
  - *ngForm will keep track of each of it's child ngModel directives*
- ngSubmit Directive
  - In the case of a plain HTML form - submit would trigger an HTTP post request
  - ngSubmit makes sure that does happen and that the function defined in the component passed to the directive is called instead
  - You can access the native form submission event by passing $event to the ngSubmit directive function: `<form (ngSubmit)="somefunction(\$event)">`

### Bi-directional Data Binding
- Add `[(ngModel)]="something"` to the control and something must be declared in the component somehow
- This way when you submit you already have the data in the component to work with

### Uni-directional Data Binding
- Add `[ngModel]="something"` to the control and something must be declared in the component somehow
- BUT the data on whatever you defined in the component will not be automatically updated because you're not doing bi-directional binding
- To get the new data you would need to pass `something` to the function passed to `(ngSubmit)="function(something)"`

