import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  isUserLoggedIn:boolean = false;

  @Output() loginInfo = new EventEmitter<string>();
  userInfo: { email: string; password: string; name: string; }[];

  constructor(private user:UsersService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.userInfo = this.user.getUserInfo()
  }

  isUserExist(email:string, password:string){

    let bool:boolean = false

    for(let i=0; i<this.userInfo.length; i++){

      if(this.userInfo[i].email==email && this.userInfo[i].password==password){

        bool = true

        break

      } 
    }
    return bool;
  }

  onSubmit(data:NgForm){

    if(this.isUserExist(data.value.email, data.value.password)){

      localStorage.setItem('token','sdbhusdijdsijsddsujguegyuew')

      this.router.navigate(['/home'],{relativeTo:this.route})

    }

    else{

      this.isUserLoggedIn = true;

      data.resetForm({

        email:data.value.email
        
      })
    }
    
  }
}
