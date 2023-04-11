import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { slideleft2, slideright2 } from '../animation';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { passwordMatch } from '../validators/passwordMatch';
import {BackendService} from '../services/backend.service';
import {TokenService} from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [slideleft2, slideright2],
  encapsulation: ViewEncapsulation.None,
})

export class RegisterComponent implements OnInit, OnDestroy {

  
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

  checkvisible:boolean = true;
  checkBox(){
    this.checkvisible = !this.checkvisible
  }

  submitted:boolean = false;
  
  constructor(@Inject(DOCUMENT) private _document: any, private backend:BackendService ){}

  registerForm = new FormGroup({
    name : new FormControl("", [Validators.required]),

    email : new FormControl("", [Validators.required]),

    password : new FormControl("", [Validators.required]),

    confirm_pass : new FormControl("", [Validators.required]),


  }, [ passwordMatch("password", "confirm_pass") ])

  getControl(name: any): AbstractControl | null{
    return this.registerForm.get(name)
  }


  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
  }

  ngOnInit() {
    this._document.body.classList.add('body');
  }

  ngOnDestroy() {
    this._document.body.classList.add('body');
  }

  public error:any= [];
  public form = {
    name:null,
    email:null,
    password:null,
   confirm_pass:null
  }
  
  submitReg(){
    //console.log(this.form);
    return this.backend.register(this.form).subscribe(
      data=>console.log(data)
      );
  }
  handleError(error:any){
    this.error = error.error.error;
  }
}
