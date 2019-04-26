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
var PrestamoService = /** @class */ (function () {
    function PrestamoService(afAuth, db, auth) {
        this.afAuth = afAuth;
        this.db = db;
        this.auth = auth;
    }
    PrestamoService.prototype.createPrestamo = function (data) {
        // trae iud de usuario login console.log(this.getIud());
        return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').add(data);
    };
    PrestamoService.prototype.ObtenerPrestamos = function () {
        return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').snapshotChanges();
    };
    PrestamoService.prototype.ActualizarPrestamo = function (id, data) {
        return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').doc(id).set(data);
    };
    PrestamoService.prototype.ObtenerPrestamo = function (id) {
        return this.db.collection('informacionUsuario').doc(this.auth.getIud()).collection('ListprestamoBici').doc(id).snapshotChanges();
    };
    PrestamoService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFireAuth,
            AngularFirestore,
            AuthService])
    ], PrestamoService);
    return PrestamoService;
}());
export { PrestamoService };
//# sourceMappingURL=prestamo.service.js.map