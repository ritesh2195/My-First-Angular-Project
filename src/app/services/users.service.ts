import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  UserDetails = []

  userExist:boolean = false

  constructor(private http:HttpClient) { }

  addUser(name1:string,emailId:string, date:Date){

    this.UserDetails.push({name:name1, email:emailId, date:date})

  }

  getUserInfo(){

    return [
      {
        email:"rrm21@gmail.com",
        password:"abcdef",
        name:"Ritesh Ranjan Mishra"
      },
      {
        email:"abc@gmail.com",
        password:"abcdef",
        name:"Ranjan"
      }
    ]
  }
}
