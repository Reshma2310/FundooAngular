import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z]{2,}$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z]{2,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    // this.submitted = true;
    if (this.registerForm.valid) {
      console.log("valid data", this.registerForm.value);
      console.log("do api call")
      // api calling
      let inputData = {
        firstName: this.registerForm.value.firstname,
        lastName: this.registerForm.value.lastname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        service: "advanced"
      }
      this.user.register(inputData).subscribe((res: any) => {
        console.log(res)
      })
    }
    else {
      console.log("invalid data", this.registerForm.value)
      console.log("no api call")
    }
  }
}
