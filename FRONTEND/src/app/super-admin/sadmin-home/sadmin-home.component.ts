import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sadmin-home',
  templateUrl: './sadmin-home.component.html',
  styleUrls: ['./sadmin-home.component.scss']
})
export class SadminHomeComponent implements OnInit{
  /* Switch declaration */
  selected: boolean = false;

constructor(private http: HttpClient){
  this.showUsers();
}
  userAccounts : any[] = [];
  Loaded = false;
  updateFormActive = false;

  id = "";
  name: string = "";
  email: string = "";
  status: number = 0;


  
  ngOnInit(): void {
    
  }

  showUsers(){
    this.http.get('http://127.0.0.1:8000/api/users').subscribe(
      (res:any)=>
      {  
        this.Loaded = true;      
        console.log(res); 
        this.userAccounts = res;  
      }
    )
  }
  isChecked: boolean = true;

  getValue() {
    this.isChecked = !this.isChecked;
  }

}
