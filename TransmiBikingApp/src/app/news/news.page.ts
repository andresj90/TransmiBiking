import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

   /* AngularFireAuth is a service that provides various methods to manipulate the database and the data */ 
  constructor(public afAuth: AngularFireAuth,
  private contacts: Contacts) {

  }
  ngOnInit() {
  }

  logOut() {
    this.afAuth.auth.signOut().then(() => {
       console.log("Usted ha salido");
    });
  }

let contact: Contact = this.contacts.create();

contact.name = new ContactName(null, 'Smith', 'John');
contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
contact.save().then(
  () => console.log('Contact saved!', contact),
  (error: any) => console.error('Error saving contact.', error)
);

}
