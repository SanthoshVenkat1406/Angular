import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<b> Welcome to First Angular</b><br>
  <div style="text-align: center;">
    <b> Welcome to Angular Mr/Ms </b>{{firstName}} {{lastName}}<br>
    <b> Title</b> {{title}}<br>
    <b> Your Location</b> {{location}}<br>
    <b> Angular start date</b>{{startDate}}
  </div>
<router-outlet></router-outlet>`,
  styles: ['b{color: red; font-size:25}']

})
export class AppComponent {
  title = 'firstangular website';
  firstName='Santhosh';
  lastName='V';
  location='chennai';
  startDate = new Date();
}
