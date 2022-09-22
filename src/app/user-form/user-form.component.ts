import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  UserDetails = []

  userExist:boolean = false

  constructor() { }

  ngOnInit(): void {
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

  onSubmit(data){

    if(this.UserDetails.length>0){

    if(!this.isUserExist(data.value.email)){

      this.UserDetails.push(data.value)

    }

    else{

      this.userExist = true

    }
  }

    else{

      this.UserDetails.push(data.value)
    }

    console.log(this.UserDetails)
  }

}
