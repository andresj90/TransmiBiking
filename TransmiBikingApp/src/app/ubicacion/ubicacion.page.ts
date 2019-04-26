import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { NavController, Platform } from '@ionic/angular';
import { google } from './google';
import {} from ''

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})

export class UbicacionPage implements OnInit {

  map: any;
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng: any;
  waypoints: any[];

  constructor(private geolocation: Geolocation,
              public navCtrl: NavController,
              private googlemaps: GoogleMaps) {
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

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

    this.geolocationNative();
  }

  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {

      this.loadMap(geposition);
    });
  }

  loadMap(position: Geoposition) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    const panelEle: HTMLElement = document.getElementById('panel');

    // create LatLng object
    this.myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 12
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(panelEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }

  private calculateRoute() {

    this.bounds.extend(this.myLatLng);

    this.waypoints.forEach(waypoint => {
      const point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
      this.bounds.extend(point);
    });

    this.map.fitBounds(this.bounds);

    this.directionsService.route({
      origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      destination: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      waypoints: this.waypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true
    }, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }


}
