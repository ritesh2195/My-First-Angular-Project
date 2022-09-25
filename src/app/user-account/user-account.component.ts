import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  editButton:boolean = true;

  userDetails = []

  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    this.userDetails = this.userService.getUserInfo()
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

  OnCancel(){

    this.editButton = true
  }

}
