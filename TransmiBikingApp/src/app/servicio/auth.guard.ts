import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
        ) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!AuthService.isAuthorized) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}