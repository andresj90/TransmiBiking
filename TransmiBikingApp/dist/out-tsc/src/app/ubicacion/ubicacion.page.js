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
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';
import { NavController } from '@ionic/angular';
import { google } from './google';
var UbicacionPage = /** @class */ (function () {
    function UbicacionPage(geolocation, navCtrl, googlemaps) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.googlemaps = googlemaps;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.bounds = null;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.bounds = new google.maps.LatLngBounds();
        this.waypoints = [
            {
                location: { lat: 4.6241329, lng: -74.1768411 },
                stopover: true,
            },
            {
                location: { lat: 4.6247745, lng: -74.1698888 },
                stopover: true,
            },
            {
                location: { lat: 4.6212241, lng: -74.1631081 },
                stopover: true,
            },
            {
                location: { lat: 4.6222508, lng: -74.1667989 },
                stopover: true,
            }
        ];
    }
    UbicacionPage.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    UbicacionPage.prototype.ngAfterViewInit = function () {
        this.geolocationNative();
    };
    UbicacionPage.prototype.geolocationNative = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (geposition) {
            _this.loadMap(geposition);
        });
    };
    UbicacionPage.prototype.loadMap = function (position) {
        var _this = this;
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude, longitude);
        // create a new map by passing HTMLElement
        var mapEle = document.getElementById('map');
        var panelEle = document.getElementById('panel');
        // create LatLng object
        this.myLatLng = { lat: latitude, lng: longitude };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: this.myLatLng,
            zoom: 12
        });
        this.directionsDisplay.setMap(this.map);
        this.directionsDisplay.setPanel(panelEle);
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            mapEle.classList.add('show-map');
            _this.calculateRoute();
        });
    };
    UbicacionPage.prototype.calculateRoute = function () {
        var _this = this;
        this.bounds.extend(this.myLatLng);
        this.waypoints.forEach(function (waypoint) {
            var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
            _this.bounds.extend(point);
        });
        this.map.fitBounds(this.bounds);
        this.directionsService.route({
            origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
            destination: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
            waypoints: this.waypoints,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(response);
                _this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
    };
    UbicacionPage = __decorate([
        Component({
            selector: 'app-ubicacion',
            templateUrl: './ubicacion.page.html',
            styleUrls: ['./ubicacion.page.scss'],
        }),
        __metadata("design:paramtypes", [Geolocation,
            NavController,
            GoogleMaps])
    ], UbicacionPage);
    return UbicacionPage;
}());
export { UbicacionPage };
//# sourceMappingURL=ubicacion.page.js.map