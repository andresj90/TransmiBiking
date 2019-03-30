import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    private router: Router
  ) {

  }
  ngOnInit() {
  }

  onSubmitAddUser() {
    console.log('estoy aqui');
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        this.router.navigate(['home']);
      }).catch((err) => {
        console.log(err);
      });
  }
  registro() {
    this.router.navigate(['form-person']);
  }
}
