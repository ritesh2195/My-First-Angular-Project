import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'signup',component:UserFormComponent},
  {path:'login',component:UserLoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'**',redirectTo:'login'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserLoginComponent,
    ForgotPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
