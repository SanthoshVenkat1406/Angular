import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  emplist : any=[{empID: '100', firstName :' ', lastName : ' '},
  {empid : 100, firstName : 'Santhosh', lastName: 'venkat'},
  {empid : 100, firstName : 'Luffy', lastName: 'zoro'}]

};

