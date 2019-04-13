import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'ubicacion',
    loadChildren: './ubicacion/ubicacion.module#UbicacionPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'form-person',
    loadChildren: './form-person/form-person.module#FormPersonPageModule'
  },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'lista-prestamos', loadChildren: './lista-prestamos/lista-prestamos.module#ListaPrestamosPageModule' }








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
