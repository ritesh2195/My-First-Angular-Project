import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAccountComponent } from '../user-account/user-account.component';

export interface CanNavigate{

  canLeave: ()=> boolean

}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<CanNavigate> {
  canDeactivate(component:CanNavigate) {
    if(component.canLeave){

      return component.canLeave()
      
    }
    return true
  }
  
}
