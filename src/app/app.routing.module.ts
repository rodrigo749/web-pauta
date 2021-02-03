import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { VotoComponent } from './voto/voto.component';
import { HeaderComponent } from './home/header/header.component';
import { PautaComponent } from './cad-pauta/cad-pauta.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
              path: 'voto',
              component: VotoComponent,
            },

            {
                path: 'cad-pauta',
                component: PautaComponent,
              },

            {
                path: 'app-header',
                component: HeaderComponent,
              },
        ]
    }

];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{
    
}