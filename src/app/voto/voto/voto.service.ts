import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Voto } from './voto';


const API = environment.apiUrl; 

@Injectable({
    providedIn: 'root'
  })

  
  
export class VotoService {
    constructor(private http:HttpClient){}
  
    getVoto(){
        return this.http.get<Voto[]>(`${API}voto`).pipe(take(1));
    }

    saveVoto(voto : Voto){
      return this.http.post(`${API}voto`,voto).pipe(take(1));
  }
  }