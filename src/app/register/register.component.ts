import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(200),
          Validators.email
        ],
      ],
      userName:['',[
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)
    ]],
      password:['',[
        Validators.required,
        Validators.minLength(8),
        PasswordValidator.strong
    ]],
    confirmPassword:['',[
        Validators.required,
        Validators.minLength(8),
        PasswordValidator.strong
    ]]
  
      
    });

    

  };




  ngOnInit(): void {
    this.reactiveForm.valueChanges.subscribe(console.log)
  }



get formControls() {
  return this.reactiveForm.controls;
}

submitReactiveForm() {
  console.log(this.reactiveForm);
}

}




export class PasswordValidator {

  public static strong(control: FormControl): any {
      let hasNumber = /\d/.test(control.value);
      let hasUpper = /[A-Z]/.test(control.value);
      let hasLower = /[a-z]/.test(control.value);
      let hasSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(control.value);
      // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
      const valid = hasNumber && hasUpper && hasLower && !hasSymbol;
      if (!valid) {
          // return what´s not valid
          return { strong: true };
      }
      return null;
  }
}