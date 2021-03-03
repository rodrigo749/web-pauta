  
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { VotoService } from './voto/voto.service';
import { Voto } from './voto/voto';
import { Lista_Pauta } from '../lista-pauta/lista-pauta/lista-pauta';
import { PautaService } from '../cad-pauta/cad-pauta/cad-pauta.service';
import { Pauta } from '../cad-pauta/cad-pauta/cad-pauta';

@Component({
  selector: 'voto',
  templateUrl: './voto.component.html',
})
export class VotoComponent  implements OnInit{
  
  votoForm: FormGroup;
  pautas: Pauta[];

  constructor(
    private formBuilder:FormBuilder, 
    private votoService:VotoService,
    private location: Location,
    private pautaService:PautaService


    
    ){}
  ngOnInit(): void {

    this.pautaService.getPauta()
    .subscribe(pautas => {this.pautas = pautas})

    this.votoForm = this.formBuilder.group({
      id:[null],
      id_pauta:[''],
      voto:['',Validators.required],
      
    
    });
  }
  
 submit(){
   if(this.votoForm.valid){
    const novoVoto = this.votoForm.getRawValue() as Voto;
    this.votoService.saveVoto(novoVoto).subscribe(
      success =>{
        alert('Voto cadastrado com sucesso')
        this.location.back();
      },
      error =>{
        console.log(error)
      }
    )
   }
 }
  
}