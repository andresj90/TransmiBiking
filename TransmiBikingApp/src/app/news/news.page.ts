import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

   /* AngularFireAuth is a service that provides various methods to manipulate the database and the data */ 
  constructor(public afAuth: AngularFireAuth) {

  }

  ngOnInit() {
  }

  logOut() {
    this.afAuth.auth.signOut().then(() => {
       console.log("Usted ha salido");
    });
  }


}
