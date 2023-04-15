import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor() { }
  handle(name:any){
    this.set(name);
  }
  set(name:any){
    return sessionStorage.setItem('name',name);
  }
  get(){
    return sessionStorage.getItem('name');
  }
  remove(){
    return sessionStorage.removeItem('name'),
   localStorage.removeItem('email');

  }
  
}
