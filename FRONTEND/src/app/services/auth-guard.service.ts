import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';


@Injectable()

export class AuthGuardService  {
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  
  changeStatus(value:boolean){
    this.loggedIn.next(value);
  }
  
  constructor( private route:Router, private token:TokenService){}



}
