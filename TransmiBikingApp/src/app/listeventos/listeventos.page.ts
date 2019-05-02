import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from '../servicio/auth.service';
import { AlertController } from '@ionic/angular';
import { error } from 'util';


@Component({
  selector: 'app-listeventos',
  templateUrl: './listeventos.page.html',
  styleUrls: ['./listeventos.page.scss'],
})
export class ListeventosPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
     this.cargarListaEvenetos();
  }

   cargarListaEvenetos(){
     if (AuthService.isAuthorized) {
       this.db.collection('informacionUsuario').doc(this.authService.getIud()).get().subscribe(user => {
          console.log(user.data().eventos);
       }, error => {

       });
     } else {
       
     }
   }

}
