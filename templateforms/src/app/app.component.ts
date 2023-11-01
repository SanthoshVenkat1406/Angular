import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateforms';
  projects_list : any=[];
  project_Data : any;
  processData(projectData:any)
  {
    var pdata= JSON.stringify(projectData.value)
    this.project_Data=JSON.parse(pdata);
    console.log(this.project_Data);
    this.projects_list.push(this.project_Data)

  }
}
