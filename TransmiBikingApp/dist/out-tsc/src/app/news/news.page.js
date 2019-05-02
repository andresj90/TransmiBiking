var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
var NewsPage = /** @class */ (function () {
    /* AngularFireAuth is a service that provides various methods to manipulate the database and the data */
    function NewsPage(afAuth) {
        this.afAuth = afAuth;
    }
    NewsPage.prototype.ngOnInit = function () {
    };
    NewsPage.prototype.logOut = function () {
        this.afAuth.auth.signOut().then(function () {
            console.log('Usted ha salido ');
        });
    };
    NewsPage = __decorate([
        Component({
            selector: 'app-news',
            templateUrl: './news.page.html',
            styleUrls: ['./news.page.scss'],
        }),
        __metadata("design:paramtypes", [AngularFireAuth])
    ], NewsPage);
    return NewsPage;
}());
export { NewsPage };
//# sourceMappingURL=news.page.js.map