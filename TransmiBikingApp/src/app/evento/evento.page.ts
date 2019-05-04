import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../servicio/evento.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from '../servicio/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  eventos: any;

  constructor(
    private evento: EventoService,
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {

  }

  obtenerColeccionEvento() {
    this.db.collection('eventos').get().subscribe(snapshot => {
      this.eventos = snapshot.docs.map(doc => {
        if (doc != null) {
          console.log(doc.data());
          return doc;
        }
      });
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.obtenerColeccionEvento();
  }

  suscribirUsuarioAEvento(data) {
    if (AuthService.isAuthorized) {
      this.db.collection('informacionUsuario').doc(this.authService.getIud()).update(
        { eventos: firebase.firestore.FieldValue.arrayUnion(data.data()) }
      ).then(() => {
        this.presentAlert('Inscripción al evento completada');
      }).catch((err) => {
        console.log(err);
      });
    } else {
      this.presentAlertConfirm();
    }
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Suscripción',
      subHeader: 'Completa',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'No se ha identificado un usuario, inicia sesión o registrate para suscribirte al evento',
      buttons: [
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
