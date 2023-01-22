import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private router: Router) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('(?=.*[A-Z]).{6,20}')]),
    });
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  onSubmit() {
    if (this.form.valid) {
      alert("You are registered now! you will be redirected in order to login");
      this.router.navigate(['login']);
    } else {
      if (!this.form.controls['email'].valid) {
        alert("Please enter a valid email address.")
      }
      if (!this.form.controls['password'].valid) {
        alert("Password must be between 6-20 characters and contain at least one uppercase letter.")
      }
    }
  }
}