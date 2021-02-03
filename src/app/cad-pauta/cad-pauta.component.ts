import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { PautaService} from '../cad-pauta/cad-pauta/cad-pauta.service'
import { Pauta } from './cad-pauta/cad-pauta';

@Component({
  selector: 'pauta',
  templateUrl: './cad-pauta.component.html',
})
export class PautaComponent  implements OnInit{
  
  pautaForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private pautaService: PautaService,    
    private location: Location
    
    ){}
  ngOnInit(): void {
    this.pautaForm = this.formBuilder.group({
      id:[null],
      pauta:['',Validators.required],
    
    });
  }
  
 submit(){
   if(this.pautaForm.valid){
    const novaPauta = this.pautaForm.getRawValue() as Pauta;
    this.pautaService.savePauta(novaPauta).subscribe(
      success =>{
        this.location.back();
      },
      error =>{
        console.log(error)
      }
    )
   }
 }
  
}