import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  UserDetails = []

  userExist:boolean = false

  constructor() { }

  addUser(firstName:string, lastName:string, emailId:string){

    this.UserDetails.push({firname:firstName,lastname:lastName, email:emailId})

  }

  getUserInfo(){

    return [
      {
        email:"rrm21@gmail.com",
        password:"abcdef",
        name:"Ritesh"
      },
      {
        email:"abc@gmail.com",
        password:"abcdef",
        name:"Ranjan"
      }
    ]
  }
}
