import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot ,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | Observable<boolean>{
 
    return this.token.loggedIn();
    this.backPage.back();
    
    }
      constructor(private token:TokenService, private backPage:Location) { }
    }