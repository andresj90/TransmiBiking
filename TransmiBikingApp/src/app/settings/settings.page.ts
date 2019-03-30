import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { AuthService } from '../servicio/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  image: String;
  scannedCode = null;
  constructor(
    public alertacontroller: AlertController,
    public camera: Camera,
    public webview: WebView,
    public barcodeScanner: BarcodeScanner,
    private flashlight: Flashlight,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async presentAlertConfirm() {
    const alert = await this.alertacontroller.create({
      header: 'Desea salir',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options).
      then((ImageData) => {
        this.image = this.webview.convertFileSrc(ImageData);
      }, (err) => {
        console.log(err);
      });
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }

  activateFlashlight() {
    this.flashlight.switchOn();
  }

  Onsalir() {
    this.auth.logout().then((res) => {
      this.router.navigate(['login']);
    }).catch((err) => {
      // alerta
    });
  }
}
