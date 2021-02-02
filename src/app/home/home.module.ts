import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { VotoModule } from '../voto/voto/voto.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        VotoModule
    ]
})
export class HomeModule{

}