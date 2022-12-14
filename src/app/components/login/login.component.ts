import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailorphone: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    // this.submitted = true;
    if(this.loginForm.valid){
      console.log("valid data", this.loginForm.value);
      console.log("do api call");
      let data = {
        email: this.loginForm.value.emailorphone,
        password: this.loginForm.value.password
      }
      console.log(data, "data")
      this.user.login(data).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token',res.id)
      })
    }
    else {
      console.log("invalid data", this.loginForm.value);
      console.log("no api call");
    }
  }
}
