# Angular Form State CSS Classes

There are 3 pairs of classes angular tracks on form controls:
1. ng-touched and ng-untouched
2. ng-valid and ng-invalid
3. ng-pristine and ng-dirty

## Overall Notes
- All form controls and the overall form start in state `ng-untouched`
- Once the user clicks on a control it gets flipped to `ng-touched` (and the form does too)
- If at least 1 control is invalid the whole form is invalid