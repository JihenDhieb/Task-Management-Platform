import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import {  NgModule } from '@angular/core';

import { ForgetPasswordComponent } from './Views/forget-password/forget-password.component';
import { SignupComponent } from './Views/signup/signup.component';
import { DashboardHomeComponent } from './Views/dashboard-home/dashboard-home.component';
import { ProfileComponent } from './Views/profile/profile.component';

export const routes: Routes = [
   { path:'login',component:LoginComponent},
   { path:'signup',component:SignupComponent},
   { path:'forget_password',component:ForgetPasswordComponent},
   { path:'dashboard',component:DashboardHomeComponent},
   {path:'profile',component:ProfileComponent},
   {path:"",redirectTo:'/signup',pathMatch:'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}