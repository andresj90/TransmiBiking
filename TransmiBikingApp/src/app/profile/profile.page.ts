import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthService} from '../servicio/auth.service';
import { FormPersonService} from '../servicio/form-person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private userInf: any;
  constructor(private socialSharing: SocialSharing,
    private auth: AuthService,
    public inf: FormPersonService
    ) { }

  ngOnInit() {
    this.InformacionUsuario();
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

  seeMyRides() {
    for (let index = 0; index < 20; index++) {
      const ride = `your ride ${index + 1 } `;
    }
  }

  InformacionUsuario() {
    this.userInf = {
      nombre: '',
      apellido: '',
      genero: '',
      celular: '',
      edad: ''
    };

    this.inf.ObtenerInformacion().valueChanges().subscribe((user) => {
      console.log(this.userInf = user);
    });

  }



}
