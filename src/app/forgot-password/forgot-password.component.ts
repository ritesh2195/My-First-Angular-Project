import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  users = []

  password:string = ''

  userExist:boolean

  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    this.users = this.userService.getUserInfo()
  }

  isEmailValid(email:string){

    let bool = false

    for(let i=0;i<this.users.length;i++){

      if(this.users[i].email==email){

        bool = true

        break
      }
    }

    return bool

  }

  // getPassword(email:string){

  //   let password:string = ''

  //   for(let i=0; i<this.users.length;i++){

  //     if(this.users[i].email==email){

  //       password = this.users[i].password

  //     }

  //   }
  // }

  onSubmit(form:NgForm){

    if(this.isEmailValid(form.value.email)){

      this.userExist = true

      this.password = 'Your password is abcdef'

    }
    
  }

}
