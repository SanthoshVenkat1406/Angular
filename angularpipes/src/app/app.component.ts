import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpipes';
  firstName : string="Santhosh";
  lastName : string="V";
  joinDate : any = new Date();
  salary : number=20000.7686
  currency : number=100;
  currencysymbol : string='INR';
  
}
