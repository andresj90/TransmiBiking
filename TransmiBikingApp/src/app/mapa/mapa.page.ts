import { Component} from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {

  map: any;

  constructor(
    public geolocation: Geolocation
  ) {
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit () {
    this.geolocationNative();
  }
  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {
      console.log(geposition);
      this.loadMap(geposition);
    });
  }

  loadMap(posicion) {

    const element: HTMLElement = document.getElementById('map');

    const map: GoogleMap = GoogleMaps.create(element);

    const latlng = new LatLng(posicion.coords.latitude, posicion.coords.longitude);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // tslint:disable-next-line:no-shadowed-variable
      const posicion: CameraPosition<LatLng> = {
        target: latlng,
        zoom: 15,
        tilt: 30
      };
      map.moveCamera(posicion);

      const markeroptions: MarkerOptions = {
        position: latlng,
        title: 'Aqui Estoy!'
      };

      // tslint:disable-next-line:no-shadowed-variable
      const marker = map.addMarker(markeroptions).then((marker: Marker) => {

        marker.showInfoWindow();

      });
    });
  }
}
