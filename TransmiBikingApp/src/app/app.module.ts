import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { NgxQRCodeModule} from 'ngx-qrcode2';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { LoginPage } from './login/login.page';
import {AngularFireAuthModule} from 'angularfire2/auth';
@NgModule({
  declarations: [AppComponent, LoginPage],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    DatePicker,
    Camera,
    WebView,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
