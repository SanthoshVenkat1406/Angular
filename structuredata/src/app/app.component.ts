import { Component } from '@angular/core';
import { __values } from 'tslib';
import {EmpManagementService} from './EmpManagementService';
import { ProjectManagementServiceService } from './project-management-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectManagementServiceService]
})
export class AppComponent {
  title = 'structuredata';
  eID : number=1;
  constructor(private PgMgtSvc: ProjectManagementServiceService){

  }
  emplist=[
    {empID:1,firstName:"pavan", lastName:"Reddy", age:22, location:"chennai"},
    {empID:2,firstName:"Ben", lastName:"10", age:22, location:"chennai"},
    {empID:3,firstName:"Jack", lastName:"jade", age:22, location:"chennai"}
]
  emp = {empID:4001,firstName:"Santhosh", lastName:"V", age:22, location:"chennai"};
  //firstName: string="unknown";
  //lastName: string="unknown";
  //age: number=22;
  //location: string="unknown";
  empvc: EmpManagementService = new EmpManagementService();
  addEmp()
  {
    this.empvc.addEmp(this.emp,this.emplist)
  }
  deleteEmp()
  {
    this.empvc.deleteEmp(this.eID, this.emplist);
  }
  addProject()
  {
    this.PgMgtSvc.addProjects();
  }
  ForLoops()
  { 
    for(let i in this.emplist)
      console.log(i +"\t" +this.emplist[i].firstName, this.emplist[i].lastName);

      for(let i of this.emplist)
       console.log(i.empID +","+i.firstName);

  }
}
