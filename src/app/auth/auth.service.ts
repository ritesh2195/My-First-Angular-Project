import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn(){

    if(localStorage.getItem('token')=='sdbhusdijdsijsddsujguegyuew'){

      return true;
    }

    else{
      false
    }

  }
}
