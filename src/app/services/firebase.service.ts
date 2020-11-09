import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLogIn = false;
  private currentUser: any;
  constructor(public fbauth: AngularFireAuth, private router: Router) {
    this.currentUser = this.loadCurrentUser();
  }

  SignIn(email: string, password: string) {
    console.log(email, password)
    this.fbauth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLogIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.currentUser = JSON.stringify(res.user.email && res.user.uid);
        this.router.navigate(['/posts'])
      })
  }
  CreateUser(email: string, password: string) {
    this.fbauth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLogIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.currentUser = JSON.stringify(res.user.email && res.user.uid);
        this.router.navigate(['/posts'])
      })
  }
  LogOut() {
    this.fbauth.signOut()
    localStorage.removeItem('user');
    this.router.navigate(['/login'])

  }

  public isAuthenticated(): boolean {
    let currentUser: any = localStorage.getItem('user');
    currentUser = JSON.parse(currentUser);
    if (currentUser === null) {
      return false;
    } else {
      try {
        console.log(currentUser.uid)
        if (!currentUser.uid !== undefined &&
          !currentUser.email !== undefined) {
          return true;
        }
      } catch (ex) {
      }
    }
  }
  private loadCurrentUser(): any {
    let currentUser: any = localStorage.getItem('user');
    if (currentUser !== null) {
      try {
        currentUser = JSON.parse(currentUser);
        if (!currentUser.uid !== undefined) {
          return currentUser;
        }
      } catch (ex) {
      }
    }

    return null;
  }

}
