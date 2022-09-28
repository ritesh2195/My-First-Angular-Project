import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  userForm:FormGroup;

  editButton:boolean = true;

  phone:number = 1234567

  userDetails = {}

  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      'name':new FormControl(this.userService.getUserInfo()[0].name),
      'email' : new FormControl(this.userService.getUserInfo()[0].email),
      'phone':new FormControl(this.phone)
    })

  }

  onSubmit(){

    this.editButton = true

    console.log(this.userForm)

  }

  onClickEdit(){

    this.editButton = false;
  }

  OnCancel(data:NgForm){

    this.editButton = true
  }

}
