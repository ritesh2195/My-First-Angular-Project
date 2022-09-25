import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<HomeComponent> {
  canDeactivate(component:HomeComponent) {
    return true;
  }
  
}
