import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Pauta } from './cad-pauta';


const API = environment.apiUrl; 

@Injectable({
    providedIn: 'root'
  })

  
export class PautaService {
    constructor(private http:HttpClient){}
  
    getPauta(){
        return this.http.get<Pauta[]>(`${API}pauta`).pipe(take(1));
    }

    savePauta(pauta : Pauta){
      return this.http.post(`${API}pauta`,pauta).pipe(take(1));
  }
  }