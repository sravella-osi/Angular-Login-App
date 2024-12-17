import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private authService : AuthenticationService,
    private router : Router,
    private user : User
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.valid) {
        const v_email = this.loginForm.value.email;
        const username = this.loginForm.value.username;
        const v_password = this.loginForm.value.password;

        this.user?.setEmail(v_email);
        this.user?.setPassword(v_password);
        console.log(this.authService);
        console.log(this.user);
        const valid = this.authService.validateUser(this.user);
        console.log(this.user);
        if (valid) {
          this.authService.logInUser(this.user);
          console.log(this.authService);
          this.router.navigate(['/home']);
        }
      }
    }
  }
}
