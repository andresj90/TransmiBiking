import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})

export class UbicacionPage implements OnInit {

  constructor(private geolocation: Geolocation,
    private googlemaps: GoogleMaps) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.geolocationNative();
  }

  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {

      this.loadMap(geposition);
    })
  }

  loadMap(posicion) {

    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = GoogleMaps.create(element);

    let latlng = new LatLng(posicion.coords.latitude, posicion.coords.longitude);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {

      let posicion: CameraPosition<LatLng> = {
        target: latlng,
        zoom: 15,
        tilt: 30
      };
      map.moveCamera(posicion);

      let markeroptions: MarkerOptions = {
        position: latlng,
        title: 'Aqui Estoy!'
      };

      let marker = map.addMarker(markeroptions).then((marker: Marker) => {

        marker.showInfoWindow();

      });
    });
  }
}
