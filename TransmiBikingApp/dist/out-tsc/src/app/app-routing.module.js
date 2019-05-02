var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
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
    { path: 'lista-prestamos', loadChildren: './lista-prestamos/lista-prestamos.module#ListaPrestamosPageModule' },
    { path: 'prestamo', loadChildren: './prestamo/prestamo.module#PrestamoPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map