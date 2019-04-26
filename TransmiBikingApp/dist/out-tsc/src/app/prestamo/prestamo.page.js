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
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PrestamoService } from '../servicio/prestamo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DatePicker } from '@ionic-native/date-picker/ngx';
var PrestamoPage = /** @class */ (function () {
    function PrestamoPage(nativeStorage, auth, flashMensaje, datePicker) {
        this.nativeStorage = nativeStorage;
        this.auth = auth;
        this.flashMensaje = flashMensaje;
        this.datePicker = datePicker;
        this.DatosReserva();
    }
    PrestamoPage.prototype.ngOnInit = function () {
    };
    PrestamoPage.prototype.DatosReserva = function () {
        this.data = {
            fecha: '',
            dateReservation: '',
            origin: '',
            bikeType: ''
        };
    };
    PrestamoPage.prototype.crearReserva = function () {
        this.auth.createPrestamo(this.data).then(function () {
        }, function (error) {
            // alerta
        });
    };
    PrestamoPage.prototype.Calendario = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    PrestamoPage = __decorate([
        Component({
            selector: 'app-prestamo',
            templateUrl: './prestamo.page.html',
            styleUrls: ['./prestamo.page.scss'],
        }),
        __metadata("design:paramtypes", [NativeStorage,
            PrestamoService,
            FlashMessagesService,
            DatePicker])
    ], PrestamoPage);
    return PrestamoPage;
}());
export { PrestamoPage };
//# sourceMappingURL=prestamo.page.js.map