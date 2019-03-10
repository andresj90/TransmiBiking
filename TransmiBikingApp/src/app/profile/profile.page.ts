import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {
    name: 'Anatolio',
    lastName: 'Rios',
    userName: 'toliori22',
    loans: 7,
    lastLoan: new Date(2019, 2, 11),
    profilePic: '/assets/icon/man.svg'
  }

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

  shareWitheFriends() {
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
}
