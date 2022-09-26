import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @ViewChild('userDetails') form:NgForm 

  editButton:boolean = true;

  userDetails = {}

  name:string = ''

  email:string = ''

  phone:number= 1234567890

  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    this.name = this.userService.getUserInfo()[0].name

    this.email = this.userService.getUserInfo()[0].email
  }

  // userForm = new FormGroup({
  //   name:new FormControl(this.userDetails[0].name),
  //   email : new FormControl(this.userDetails[0].email)
  // })

  onSubmit(data:NgForm){

    this.editButton = true

  }

  onClickEdit(){

    this.editButton = false;
  }

  OnCancel(data:NgForm){

    this.editButton = true

    data.resetForm({
      name:this.name,
      email:this.email,
      phone:this.phone
    })

  }

}
