import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }
  register(data:any){
    return this.http.post('http://127.0.0.1:8000/api/register', data);
  }
  submitLogin(data:any){
    return this.http.get('http://127.0.0.1:8000/api/login', data);
  }
  
}

