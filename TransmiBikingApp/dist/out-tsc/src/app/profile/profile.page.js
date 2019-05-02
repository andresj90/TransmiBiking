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
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthService } from '../servicio/auth.service';
import { FormPersonService } from '../servicio/form-person.service';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(socialSharing, auth, inf) {
        this.socialSharing = socialSharing;
        this.auth = auth;
        this.inf = inf;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.InformacionUsuario();
    };
    ProfilePage.prototype.shareWitheFriends = function () {
        // Check if sharing via email is supported
        this.socialSharing.canShareViaEmail().then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
        // Share via email
        this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    ProfilePage.prototype.seeMyRides = function () {
        for (var index = 0; index < 20; index++) {
            var ride = "your ride " + (index + 1) + " ";
        }
    };
    ProfilePage.prototype.InformacionUsuario = function () {
        var _this = this;
        this.userInf = {
            nombre: '',
            apellido: '',
            genero: '',
            celular: '',
            edad: ''
        };
        this.inf.ObtenerInformacion().valueChanges().subscribe(function (user) {
            _this.userInf = user;
        });
    };
    ProfilePage = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        __metadata("design:paramtypes", [SocialSharing,
            AuthService,
            FormPersonService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map