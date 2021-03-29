import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import {ListComponent} from './list/list.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpComponent } from './emp/emp.component';
import {SlotComponent} from './slot/slot.component'
import {SlotListComponent} from './slot-list/slot-list.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {BranchComponent} from './branch/branch.component';
import {BusinessComponent} from './business/business.component'
const routes: Routes = [
  { path: 'item', component: ItemComponent },
  { path: '', component: SigninComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'cuslist', component: CustomerListComponent },
  { path: 'list', component: ListComponent },
  { path:'emplist', component:EmplistComponent},
  { path:'emp', component:EmpComponent},
  { path:'slot', component:SlotComponent},
  { path:'slotlist', component:SlotListComponent},
  { path:'signup', component:SignupComponent},
  { path:'branch', component:BranchComponent},
  { path:'business', component:BusinessComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
