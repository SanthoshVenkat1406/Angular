import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  firstName: string="unknown";
  lastName: string="unknown";
  age:number=23;
  email:string="unknown";
  phonenumber:number=0;
  joinStatus : boolean = false;
  location : string ='chennai';
  color: string="violet";
  size : number=1;
  styleclassname : string="bstyle";
  constructor(){
    console.log("component created")
  }
  ngOnInit(){
    this.firstName="Santhosh";
    this.lastName="V";
    this.age=23;
    this.email="Santhosh14@gmail.com";
    console.log("contact details initiated... ");
  }
  ngOnChanges(){
    console.log("contact details got updated...");
  }
  ngDoCheck(){
    console.log("Contact details verified...");
  }
  ngOnDestroy(){
    console.log("Contact details destroyed...");
  }
}
