import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailorphone: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    this.submitted = true;
  }
}
