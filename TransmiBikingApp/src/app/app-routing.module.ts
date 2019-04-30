
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:quotemark
import { AuthGuardService } from "./servicio/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule'
  },

  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'form-person',
    loadChildren: './form-person/form-person.module#FormPersonPageModule'
  },
  {
    path: 'terms',
    loadChildren: './terms/terms.module#TermsPageModule'
  },
  {
    path: 'privacy',
    loadChildren: './privacy/privacy.module#PrivacyPageModule'
  },
  {
    path: 'lista-prestamos',
    loadChildren: './lista-prestamos/lista-prestamos.module#ListaPrestamosPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'prestamo',
    loadChildren: './prestamo/prestamo.module#PrestamoPageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  {
    path: 'evento',
    loadChildren: './evento/evento.module#EventoPageModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

