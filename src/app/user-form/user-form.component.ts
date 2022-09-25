import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  UserDetails = []

  //userExist:boolean = false

  constructor(private router:Router, private userService:UsersService) { }

  ngOnInit(): void {

    this.UserDetails = this.userService.UserDetails
  }

  isUserExist(email:string){

    let bool:boolean=false;

    for(let i = 0; i<this.UserDetails.length; i++){

      if(this.UserDetails[i].email==email){

        bool=true

        break;
      }


    }

    return bool;

  }

  onSubmit(data:NgForm){

    if(this.UserDetails.length>0){

    if(!this.isUserExist(data.value.email)){

      this.userService.addUser(data.value.name,data.value.email, data.value.date)

      this.router.navigate(['/home'])

    }

    else{

      alert('This email id is associated with another user, please enter new email id')

    }
  }

    else{

      this.UserDetails.push(data.value)

      this.router.navigate(['/home'])
    }

    console.log(this.UserDetails)
  }

}
