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
import { PrestamoService } from '../servicio/prestamo.service';
var ListaPrestamosPage = /** @class */ (function () {
    function ListaPrestamosPage(prestamoAuth) {
        this.prestamoAuth = prestamoAuth;
        this.stations = ['Cesar', 'B', 'C', 'D', 'Diana'];
        this.hours = [2, 3, 4, 5, 6, 7, 8, 9];
        this.prestamo = [];
    }
    ListaPrestamosPage.prototype.ngOnInit = function () {
        this.MostrarColumnas();
    };
    ListaPrestamosPage.prototype.MostrarColumnas = function () {
        this.colum = [
            { header: 'Numero' },
            { header: 'Fecha' },
            { header: 'Origin' },
            { header: 'bikeType' }
        ];
    };
    ListaPrestamosPage.prototype.MostrarPrestamo = function (id) {
        // trae todos los comentarios
        //    this.prestamoAuth.ObtenerPrestamo(id).subscribe((prestamo) => {
        //      this.prestamo = [];
        //      prestamo.forEach((prestamodata: any) => {
        //        this.prestamo.push({
        //          id: prestamodata.payload.doc.id,
        //          data: prestamodata.payload.doc.data()
        //        });
        //      });
        //    });
    };
    ListaPrestamosPage = __decorate([
        Component({
            selector: 'app-lista-prestamos',
            templateUrl: './lista-prestamos.page.html',
            styleUrls: ['./lista-prestamos.page.scss'],
        }),
        __metadata("design:paramtypes", [PrestamoService])
    ], ListaPrestamosPage);
    return ListaPrestamosPage;
}());
export { ListaPrestamosPage };
//# sourceMappingURL=lista-prestamos.page.js.map