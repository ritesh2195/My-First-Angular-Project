import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userInfo = []

  @Output() loginInfo = new EventEmitter<string>();

  constructor(private user:UsersService) { }

  ngOnInit(): void {

    this.userInfo = this.user.getUserInfo()
  }

  isUserExist(email:string,password:string){

    let bool:boolean = false

    for(let i=0; i<this.userInfo.length; i++){

      if(this.userInfo[i].email==email && this.userInfo[i].password){

        bool = true

        break

      }

      return bool;
    }
  }

  onSubmit(data:any){

    if(this.isUserExist(data.value.email, data.value.password)){

      this.loginInfo.emit(data.value.name)

    }

    //this.loginInfo.emit({userName:data.value.email, password:data.value.password,isLoggedIn:true})
    
  }

}
