import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EmailValidator, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ui-login',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './ui-login.component.html',
  styleUrl: './ui-login.component.css'
})
export class UiLoginComponent implements OnInit {

  loginForm: any;
  hidePassword: boolean = true;
  userErrors = '';
  passwordErrorsText = '';

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      user: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
      
  }

  onSubmit(valorFormulario: any) {
    if (this.loginForm.get('user').errors) {
      const emailError = this.loginForm.get('user').errors
      if (emailError.required) {
        this.userErrors = 'You must enter an email address'
      } else if (emailError.email) {
        this.userErrors = 'You must enter an valid email address'
      }
    }

    if (this.loginForm.get('password').errors) {
      const passwordError = this.loginForm.get('password').errors
      if (passwordError.required) {
        this.passwordErrorsText = 'You must enter a password'
      }
    }
  }
}
