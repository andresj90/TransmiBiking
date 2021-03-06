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
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { LoginPage } from './login/login.page';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './servicio/auth.service';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';

// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

// services
// tslint:disable-next-line:quotemark
import {  AuthGuardService  } from "./servicio/auth.guard";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {CarouselModule} from 'primeng/carousel';
import { ValidationService } from './servicio/validation.service';
import { EventoService } from './servicio/evento.service';
import { OrderListModule } from 'primeng/orderlist';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    FormsModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    NgbModule.forRoot(),
    TableModule,
    CarouselModule,
    PanelModule,
    DialogModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    OrderListModule,
    TableModule
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
    AuthService,
    FlashMessagesService,
    AngularFirestore,
    AuthGuardService,
    ValidationService,
    EventoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
