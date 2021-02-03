  
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista_Pauta } from './lista-pauta';


const API = environment.apiUrl; 


@Injectable({
  providedIn: 'root'
})


export class ListaPautaService {
  constructor(private http:HttpClient){}

    getAllPauta(id){
     
        return this.http.get<Lista_Pauta[]>(`${API}/pauta/${id}`);
      }

      getAll(): Observable<Lista_Pauta[]>{
        return this.http.get<Lista_Pauta[]>(`${API}/pauta`);
      }

  }

