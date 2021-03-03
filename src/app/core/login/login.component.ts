import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent{
    
    loginForm: FormGroup; //diretiva para controle do formulário
    @Input() loginError: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
        login: ['', Validators.required],
        });
    }

    login(){
        const login = this.loginForm.get('login').value;


        this.authService
        .authenticate(login)
        .subscribe(
            () => this.router.navigate(['home/voto']), //informe a rota que irá abrir após o login 
            err => {
            console.log(err);
            this.loginError = true;
            }
        );
    }
}