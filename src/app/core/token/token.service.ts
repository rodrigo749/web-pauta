import { Injectable } from '@angular/core';

// informe a key que será salva no localhost
const KEY = 'authTokenPlanoTerapeutico';

@Injectable({providedIn: 'root'})
export class TokenService{
    hasToken(){
        return !!this.getToken(); //!! é utilizado para converter valores em booleanos
    }

    setToken(token){
        window.localStorage.setItem(KEY, token);
    }

    getToken(){
        return window.localStorage.getItem(KEY);
    }

    removeToken(){
        return window.localStorage.removeItem(KEY);
    }
}