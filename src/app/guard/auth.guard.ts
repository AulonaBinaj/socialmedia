import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private fs: FirebaseService) { }


  canActivate(): boolean {
    if (this.fs.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
