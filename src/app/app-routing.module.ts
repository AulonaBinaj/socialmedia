import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignUpComponent } from './components/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';


const APP_ROUTES: Routes =

  [{
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },

  { path: '', redirectTo: 'posts', pathMatch: 'full' }
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);