import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CanNavigate } from '../guard/deactivate.guard';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit, CanNavigate {

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

  canLeave(): boolean {

    if(!this.editButton){

      return confirm('You have unsaved changes, do you want to navigate');
    }

    return true;

  }

  onSubmit(){

    this.editButton = true

    console.log(this.userForm)

  }

  onClickEdit(){

    this.editButton = false;
  }

  OnCancel(){

    this.editButton = true

    this.userForm.reset({
     
      'name':this.userService.getUserInfo()[0].name,
      'email':this.userService.getUserInfo()[0].email,
      'phone':this.phone

    })
  }

}
