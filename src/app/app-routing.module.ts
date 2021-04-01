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
import {EmpattendanceComponent} from './empattendance/empattendance.component';
import {BranchlistComponent} from './branchlist/branchlist.component';
import {BusinesslistComponent} from './businesslist/businesslist.component';
import {EmployeeroomComponent} from './employeeroom/employeeroom.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  { path: 'item', component: ItemComponent },
  { path: '', component: SigninComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'cuslist', component: CustomerListComponent },
  { path: 'list', component: ListComponent },
  { path:'emplist', component:EmplistComponent},
   { path:'slot', component:SlotComponent},
  { path:'slotlist', component:SlotListComponent},
  { path:'signup', component:SignupComponent},
  {path:'empattendance', component:EmpattendanceComponent},
  {path:'branchlist', component:BranchlistComponent},
  {path:'businesslist', component:BusinesslistComponent},
  {path:'employeeroom', component:EmployeeroomComponent},
  {path:'datepicker', component:DatepickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
