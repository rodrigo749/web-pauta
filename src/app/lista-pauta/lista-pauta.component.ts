import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Lista_Pauta } from './lista-pauta/lista-pauta';
import { ListaPautaService } from './lista-pauta/lista-pauta.service';


@Component({
  selector: 'lista-pauta',
  templateUrl: './lista-pauta.component.html',
})
export class listaPautaComponent implements OnInit {
   listaPauta: Lista_Pauta[] = [];
   pautaForm:FormGroup;
//    listaPauta: Lista_Pauta;
  

constructor(
  private listaPautaService: ListaPautaService,
  private formBuilder: FormBuilder,
  private router: Router,
  private _router:Router,
  private route: ActivatedRoute
 
  ){}

  ngOnInit() {

    this.pesquisaTodos();//Initialisation
    setInterval(() => this.pesquisaTodos(), 25000);
    
    this.pautaForm = this.formBuilder.group({
      pesquisa:[''],
      pesquisarTodos:['']

    })
  }

  pesquisa(){
    
    this.listaPautaService.getAllPauta(this.pautaForm.value.pesquisa)
    .subscribe(result => {this.listaPauta = result; })
  }
  

  pesquisaTodos(){
    this.listaPautaService.getAll().subscribe(result => {this.listaPauta = result;})
  }

  editEquip(id){
    console.log(id)
    this.router.navigate(['/home/vote-pauta', id]  );

  }
}