import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  hide: boolean = true;
  message: boolean = false

  constructor(private fb: FormBuilder, private as: FirebaseService, private router: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.signupForm = this.fb.group({
      'email': new FormControl('', [Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
    })
  }

  onSubmit() {
    let email = this.signupForm.controls['email'].value;
    let password = this.signupForm.controls['password'].value;
    this.as.CreateUser(email, password)
  }


  gotosignin() {
    this.router.navigate(['/login'])
  }
}
