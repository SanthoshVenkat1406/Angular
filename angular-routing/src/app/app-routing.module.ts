import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentslistComponent } from './departmentslist/departmentslist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'EmployeesList',component:EmployeeListComponent},
 {'path':'DepartmentsList', component:DepartmentslistComponent},
 {'path':'**', component: ErrorComponentComponent},
 {'path':'', redirectTo:'/home', pathMatch:'full'},
 {'path':'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents=[EmployeeListComponent,DepartmentslistComponent, ErrorComponentComponent, HomeComponent];
