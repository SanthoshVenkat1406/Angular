import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:String="";
  lastName: string="unknown";
  age: number=22;
  gender: string="female";
  favColour: string="blue";
  title='databinding';
  isEnabled : boolean= true;
  isDisplayed : boolean = true;
  YesNo : boolean = true;
  location : string ="chennai";
  background : boolean= true;
  salary:number=15000;
  names: string[] =["Badawa", "black", "white", "luffy", "walter", "zoro"];
  favTheme: string="theme3";
  save(){
     var message="Thankyou Mr/Ms" + this.firstName +" "+ this.lastName;
     message += "Your application will be processed shortly";
     window.alert(message);
  }
  verifyFirstName(obj:any)
  {
    if(obj.target.value == "")
    window.alert("First name must not be empty.");
  }

}
