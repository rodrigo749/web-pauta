import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

const API = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(
        private http: HttpClient,
        private userService: UserService
      ) { }
    
      authenticate(cpf: string){
        return this.http
          .post(API + 'logon', {"cpf":cpf}, { observe: 'response'}) //coloque a rota de login da sua api
          .pipe(tap(res => {
            const authToken = res.headers.get('x-access-token');
            this.userService.setToken(authToken);
            console.log(`CPF ${cpf} autenticado com o token ${authToken}`);
          })
        );
      }
}