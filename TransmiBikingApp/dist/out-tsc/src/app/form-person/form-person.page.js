var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormPersonService } from '../servicio/form-person.service';
import { AuthService } from '../servicio/auth.service';
import { Router } from '@angular/router';
var FormPersonPage = /** @class */ (function () {
    function FormPersonPage(authService, router, auth) {
        this.authService = authService;
        this.router = router;
        this.auth = auth;
        this.CrearInformacionUsuario();
    }
    FormPersonPage.prototype.ngOnInit = function () {
    };
    FormPersonPage.prototype.CrearInformacionUsuario = function () {
        this.informacion = {
            id: '',
            nombre: '',
            apellido: '',
            genero: '',
            celular: '',
            edad: ''
        };
    };
    FormPersonPage.prototype.EnviarDatos = function () {
        var _this = this;
        this.auth.registeruser(this.email, this.password)
            .then(function (res) {
            _this.authService.creardatos(_this.informacion).then(function (ress) {
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    FormPersonPage = __decorate([
        Component({
            selector: 'app-form-person',
            templateUrl: './form-person.page.html',
            styleUrls: ['./form-person.page.scss'],
        }),
        __metadata("design:paramtypes", [FormPersonService,
            Router,
            AuthService])
    ], FormPersonPage);
    return FormPersonPage;
}());
export { FormPersonPage };
//# sourceMappingURL=form-person.page.js.map