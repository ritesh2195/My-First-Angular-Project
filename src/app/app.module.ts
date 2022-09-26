import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { DeactivateGuard } from './guard/deactivate.guard';
import { LoginGuard } from './auth/login.guard';
import { UserAccountComponent } from './user-account/user-account.component';

const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'signup',component:UserFormComponent, canActivate:[LoginGuard]},
  {path:'login',component:UserLoginComponent,canActivate:[LoginGuard]},
  {path:'forgot',component:ForgotPasswordComponent,canActivate:[LoginGuard]},
  {path:'account',component:UserAccountComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:'login'},
]

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserLoginComponent,
    ForgotPasswordComponent,
    HomeComponent,
    UserAccountComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [UsersService, AuthGuard,DeactivateGuard,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
