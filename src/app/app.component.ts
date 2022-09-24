import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  isUserLoggedIn(){

    if('token' in localStorage){

      return true
    }

    else{

      return false
    }
  }

  title = 'Ritesh Kart';
  
}
