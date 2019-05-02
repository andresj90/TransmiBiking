var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../servicio/auth.service';
var FormPersonService = /** @class */ (function () {
    function FormPersonService(afAuth, db, auth) {
        this.afAuth = afAuth;
        this.db = db;
        this.auth = auth;
    }
    FormPersonService.prototype.creardatos = function (informacion) {
        return this.db.collection('informacionUsuario').doc(this.auth.getIud()).set(informacion);
    };
    FormPersonService.prototype.UpdateDatos = function (datos) {
        return this.db.collection('informacionusuario').doc(this.auth.getIud()).set(datos);
    };
    FormPersonService.prototype.ObtenerInformacion = function () {
        return this.db.collection('informacionUsuario').doc(this.auth.getIud());
    };
    FormPersonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFireAuth,
            AngularFirestore,
            AuthService])
    ], FormPersonService);
    return FormPersonService;
}());
export { FormPersonService };
//# sourceMappingURL=form-person.service.js.map