import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { VotoModule } from '../voto/voto/voto.module';
import { RouterModule } from '@angular/router';
import { TituloModule } from '../compartilhado/componentes/titulo/titulo.module';
import { HeaderComponent } from './header/header.component';
import { PautaModule } from '../cad-pauta/cad-pauta/cad-pauta.module';
import { listaPautaModule } from '../lista-pauta/lista-pauta/lista-pauta.module';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule, 
        TituloModule,
        PautaModule,
        listaPautaModule,
        
    ],

    exports: [
        HeaderComponent
    ]
})
export class HomeModule{

}