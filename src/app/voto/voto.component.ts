import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { VotoService } from './voto/voto.service';
import { Voto } from './voto/voto';


@Component({
  selector: 'voto',
  templateUrl: './voto.component.html',
})
export class VotoComponent  implements OnInit{
  
  votoForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private votoService:VotoService,
    private location: Location
    
    ){}
  ngOnInit(): void {
    this.votoForm = this.formBuilder.group({
      id:[null],
      voto:['',Validators.required],
    
    });
  }
  
 submit(){
   if(this.votoForm.valid){
    const novoVoto = this.votoForm.getRawValue() as Voto;
    this.votoService.saveVoto(novoVoto).subscribe(
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