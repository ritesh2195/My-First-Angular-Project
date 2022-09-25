import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    
  }

  clearLocalSession(){

    localStorage.removeItem('token')
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
