import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-some-component',
    templateUrl: './some-component.component.html',
    styleUrls: ['./some-component.component.css']
})
export class SomeComponent implements OnInit {
    form = this.fb.group({});

    // Simple Form with Individual Controls
    // ************************************
    form = this.fb.group({
        'name': this.fb.control('initial value', [ Validators.required ]),
        'age': this.fb.control(30, [ Validators.max(125) ]),
    });
    // ************************************ END

    // Form Array example (storing a individual controls)
    // ******************
    form = this.fb.group({
        arrayOfControls: this.fb.array([]);
    });
    addToArray(something) {
        this.arrayOfControls.push(
            this.fb.control('initialValue', [Validators.required])
        );
    }
    get arrayOfControls(): FormArray {
        return <FormArray>this.form.get('arrayOfControls');
    }
    // Use this method in the view when interating through the array to access built-in validation properties (.valid, .touched, etc)
    pointAt(index) {
        return (<FormArray>this.form.get('arrayOfControls')).at(index);
    }
    // ****************** END

    constructor(
        private fb:FormBuilder
    ) { }

    ngOnInit() { }

    submitFn() {
        // do something...
    }

    // Example of how to implement a customer validator with input
    // ***********************************************************
    // percentRangeValidator(image: ImageResizeDTO): ValidatorFn {
    //   return (control: AbstractControl): { [key: string]: boolean } | null => {
    //       if (control.value !== undefined && (isNaN(control.value) || control.value < this.getPercentMin(image) || control.value > 100)) {
    //           return { 'ageRange': true };
    //       }
    //       return null;
    //   };
    // }
    // *********************************************************** END

}