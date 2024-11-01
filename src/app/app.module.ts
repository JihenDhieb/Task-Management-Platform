// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';

import { ForgetPasswordComponent } from './Views/forget-password/forget-password.component';

import { AppRoutingModule } from './app.routes';
import { SignupComponent } from './Views/signup/signup.component';
import { DashboardHomeComponent } from './Views/dashboard-home/dashboard-home.component';
import { ProfileComponent } from './Views/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
LoginComponent,
SignupComponent,ForgetPasswordComponent,DashboardHomeComponent,ProfileComponent

  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
