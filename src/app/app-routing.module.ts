import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {UpdateStudentComponent} from './update-student/update-student.component'

const routes: Routes = [
 // { path: '', redirectTo: 'employee', pathMatch: 'full' },
 // { path: 'employees', component: EmployeeListComponent },
 // { path: 'add', component: CreateEmployeeComponent },
 // { path: 'update/:id', component: UpdateEmployeeComponent },
 // { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: CreateStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
