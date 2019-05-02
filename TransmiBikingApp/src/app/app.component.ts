import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './servicio/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'Home'
    },
    {
      title: 'Get a bike',
      url: '/prestamo',
      icon: 'calendar'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Location',
      url: '/mapa',
      icon: 'walk'
    },
    {
      title: 'Events',
      url: '/evento',
      icon: 'md-calendar'
    }
  ];

  public inicio = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login();
    });
  }
  login() {
    if (AuthService.isAuthorized) {
      AuthService.inicio = true;
    } else {
      AuthService.salir = false;
    }
  }
  onClickLogout() {
    this.auth.logout();
    this.inicio = true;
    this.router.navigate(['/login']);
  }

}
