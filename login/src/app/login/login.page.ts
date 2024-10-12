import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    // Crear el formulario con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login exitoso con:', email, password);
      
      // Limpiar los campos después del login
      this.loginForm.reset();
      
      // Redirigir al componente 'vista' después del login
      this.router.navigateByUrl('/vista');
    } else {
      console.log('Formulario no válido');
    }
  }

  goToRegister() {
    // Lógica para redirigir a la página de registro
    console.log('Redirigiendo a la página de registro');
  }
}
