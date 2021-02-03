import { CommonModule } from '@angular/common';
import { TituloModule } from 'src/app/compartilhado/componentes/titulo/titulo.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PautaComponent } from '../cad-pauta.component';
;

@NgModule({
    imports: [
        CommonModule,
        TituloModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    declarations: [
        PautaComponent
    ],
    exports: [
        
    ]
})
export class PautaModule{

}