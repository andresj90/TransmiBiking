import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from '../servicio/auth.service';
import { AlertController } from '@ionic/angular';
import { error } from 'util';
import { reject } from 'q';


@Component({
  selector: 'app-listeventos',
  templateUrl: './listeventos.page.html',
  styleUrls: ['./listeventos.page.scss'],
})
export class ListeventosPage implements OnInit {

  eventos: any;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) { }

  async cargarListaEventos() {
    if (AuthService.isAuthorized) {
      this.db.collection('informacionUsuario').doc(this.authService.getIud()).get().subscribe(snapshot => {
        this.eventos = snapshot.data().eventos.map(element => {
          return element;
        });
      }, error => {
        this.presentAlert(error);
      });
    }
  }

  async ngOnInit() {
    this.cargarListaEventos().then();
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

}
