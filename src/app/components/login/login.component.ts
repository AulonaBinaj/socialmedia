import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  loginForm: FormGroup;
  hide : boolean= true;
  message: boolean = false

  constructor( private fb: FormBuilder, private as: FirebaseService,  private router: Router ) {
    this.initForm();   
  }

  ngOnInit() {
  }

  initForm() {
    this.loginForm = this.fb.group({
      'email': new FormControl('', [Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
    })
  }

  onSubmit() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    this.as.SignIn(email,password)
   }

   gotosignup(){
    this.router.navigate(['/signup'])
   }

}
