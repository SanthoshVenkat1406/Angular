import { Component } from '@angular/core';

@Component({
  selector: 'app-departmentslist',
  templateUrl: './departmentslist.component.html',
  styleUrls: ['./departmentslist.component.css']
})
export class DepartmentslistComponent {
  deptlist: any=[{deptID: 'PR', deptName: 'public Relations'},
  {deptID: 'RD', deptName : 'Research & Development'},
  {deptID: 'HR', deptName : 'Human Resource'}]
  
}
