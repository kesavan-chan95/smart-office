import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import {ListComponent} from './list/list.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpComponent } from './emp/emp.component';
import {SlotComponent} from './slot/slot.component'
import {SlotListComponent} from './slot-list/slot-list.component'
const routes: Routes = [
  { path: 'item', component: ItemComponent },
  { path: '', component: LoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'cuslist', component: CustomerListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListComponent },
  { path:'emplist', component:EmplistComponent},
  { path:'emp', component:EmpComponent},
  { path:'slot', component:SlotComponent},
  { path:'slotlist', component:SlotListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
