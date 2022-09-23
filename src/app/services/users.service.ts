import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  UserDetails = []

  userExist:boolean = false

  constructor(private http:HttpClient) { }

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
