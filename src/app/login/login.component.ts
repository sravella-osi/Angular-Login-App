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
    private router : Router
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.valid) {
        const user = new User;
        const v_email = this.loginForm.value.email;
        const v_password = this.loginForm.value.password;

        user?.setEmail(v_email);
        user?.setPassword(v_password);
        const valid = this.authService.validateUser(user);
        console.log(user);
        if (valid) {
          this.authService.logInUser(user);
          console.log(this.authService);
          this.router.navigate(['/home']);
        }
      }
    }
  }
}
