import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  registrationForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private authService : AuthenticationService,
    private router : Router
  ) {
    this.registrationForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      }
      , { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: FormGroup): any {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      return group.get('confirmPassword')?.setErrors(null);
    } else {
      return group.get('confirmPassword')?.setErrors({ passwordMismatch : true });
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      if (this.registrationForm.valid) {
        const user = new User;
        const v_email = this.registrationForm.value.email;
        const username = this.registrationForm.value.username;
        const v_password = this.registrationForm.value.password;
        user?.setEmail(v_email);
        user?.setPassword(v_password);
        user?.setUsername(username);

        this.authService.registerUser(user);
        console.log(this.authService);
        this.registrationForm.reset();
      }
    }
  }
}
