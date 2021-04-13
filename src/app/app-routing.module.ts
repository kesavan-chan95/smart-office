import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import {ListComponent} from './list/list.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import { EmplistComponent } from './emplist/emplist.component';
import {SlotComponent} from './slot/slot.component'
import {SlotListComponent} from './slot-list/slot-list.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {BusinesslistComponent} from './businesslist/businesslist.component';
import {BusinessComponent} from './business/business.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {EmpattendanceComponent} from './empattendance/empattendance.component';
import {BranchlistComponent} from './branchlist/branchlist.component';

import {EmployeeroomComponent} from './employeeroom/employeeroom.component';
import { DeptlistComponent } from './deptlist/deptlist.component';


const routes: Routes = [
  { path: 'item', component: ItemComponent },
  { path: 'login', component: LoginComponent },
  { path: 'businesslist', component: BusinesslistComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'cuslist', component: CustomerListComponent },
  { path: 'list', component: ListComponent },
  { path:'emplist', component:EmplistComponent},
  { path:'', component:DashboardComponent},
  
  
  { path:'signup', component:SignupComponent},
   { path:'slot', component:SlotComponent},
  { path:'slotlist', component:SlotListComponent},
  {path:'empattendance', component:EmpattendanceComponent},
  {path:'branchlist', component:BranchlistComponent},
  {path:'businesslist', component:BusinesslistComponent},
  {path:'employeeroom', component:EmployeeroomComponent},
  {path:'deptlist',component:DeptlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
