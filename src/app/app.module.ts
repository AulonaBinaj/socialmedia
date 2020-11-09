import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { FirebaseService } from './services/firebase.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { SignUpComponent } from './components/signup/signup.component';
import { PostsService } from './services/posts.services';
import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDC4MhqScXVAJ6UFurcC420BCDdsdj7wQo",
      authDomain: "socialmedia-443c6.firebaseapp.com",
      databaseURL: "https://socialmedia-443c6.firebaseio.com",
      projectId: "socialmedia-443c6",
      storageBucket: "socialmedia-443c6.appspot.com",
      messagingSenderId: "102980214121",
      appId: "1:102980214121:web:cd361c2c48dcb337fbb1f8"
    }),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule
  ],
  providers: [FirebaseService, PostsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
