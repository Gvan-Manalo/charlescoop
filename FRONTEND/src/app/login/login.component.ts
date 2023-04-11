import { Component,OnInit, OnDestroy, ViewEncapsulation, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { formState, formState2, formState3, formState4, formState5, slideleft, slideright } from '../animation';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import {BackendService} from '../services/backend.service';
import {TokenService} from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [formState, formState2, formState3, formState4, formState5, slideleft, slideright],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy  {

  isDisplayed: boolean = true;
  toggleDiv(){
    this.isDisplayed = this.isDisplayed? false:true;
  }
  
  visible:boolean = true;
  changetype:boolean = true;
  viewpass(){
    this.visible = !this.visible
    this.changetype = !this.changetype
  }

  cvisible:boolean = true;
  cchangetype:boolean = true;
  cviewpass(){
    this.cvisible = !this.cvisible
    this.cchangetype = !this.cchangetype
  }

  
  submitted:boolean = false;

  constructor(@Inject(DOCUMENT) private _document: any , private backend:BackendService, private token:TokenService){}


  loginForm = new FormGroup({
  
    email : new FormControl("", [Validators.required]),

    password : new FormControl("", [Validators.required]),

  })
  public form = {
    email:null,
    password:null
  }

  getControl(name: any): AbstractControl | null{
    return this.loginForm.get(name)
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
  }

  ngOnInit() {
    this._document.body.classList.add('body');
  }

  ngOnDestroy() {
    this._document.body.classList.add('body');
  }
  public error = null;
  submitLogin(){
    //console.log(this.form);
    return this.backend.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  }
  handleResponse(data:any){
    console.log(data.access_token);
  }
  handleError(error:any){
    this.error = error.error.error;
  }
}
