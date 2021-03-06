import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmplistComponent } from './emplist/emplist.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmpComponent } from './emp/emp.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlotComponent } from './slot/slot.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SlotListComponent } from './slot-list/slot-list.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BusinessComponent} from './business/business.component';
import {BusinesslistComponent} from './businesslist/businesslist.component';

import { DashboardComponent } from './dashboard/dashboard.component'
import {ApiService} from './services/api.services';

import { EmpattendanceComponent } from './empattendance/empattendance.component';
import { AttendanceComponent } from './attendance/attendance.component';

import {BranchComponent} from './branch/branch.component';
import {BranchlistComponent } from './branchlist/branchlist.component';

import {EmployeeroomComponent} from './employeeroom/employeeroom.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { DepartmentComponent } from './department/department.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AccountleadgerComponent } from './accountleadger/accountleadger.component';
import { EmpeditComponent } from './empedit/empedit.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    CustomerComponent,
    CustomerListComponent,
    NavigationComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    RegisterComponent,
    EmplistComponent,
    EmpComponent,
    BusinessComponent,
    BusinesslistComponent,
    SlotComponent,
    SlotListComponent,
    DashboardComponent,
    EmpattendanceComponent,
    AttendanceComponent,
    BranchComponent,
    BusinessComponent,
    BusinesslistComponent,
    BranchlistComponent,
    EmployeeroomComponent,
    DeptlistComponent,
    DepartmentComponent,
    AccountlistComponent,
    AccountleadgerComponent,
    EmpeditComponent,
   
  
  ],
  entryComponents:[
    AttendanceComponent,
    BusinessComponent,
    MatDatepickerModule, 
    MatFormFieldModule,
    DepartmentComponent,
    AccountleadgerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
     
       
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
