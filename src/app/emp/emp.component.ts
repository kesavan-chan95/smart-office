import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { ApiService } from '../services/api.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  Name: string;
  Department: slot[];
  Designation: string;
  Contact: string;
  AltContact: string;
  email: string;
  Salary : string;
  BSalary : number;
  Leave : number  ;  
  EmpUid: string;
  Bankno : string;
  Beneficiary: string;
  Bankname:string;
  Bankbranch:string;
  IFSC: string;
  pan: string;
  Curshift:number




  constructor(private matDialogRef:MatDialogRef<EmpComponent>,
    private serivce:ApiService,
    private routes:Router) { }

    ngOnInit(): void {
      this.serivce.getdept().subscribe((data: any[])=>{
        console.log(data);
        this.Department= data;
      })
    }
    addemp(){
      let data = {
        EmpId: 0,
        Bid:1,
        EmpCode:"321",
        EmpName: this.Name,
        EmpDepartment:"1",
        EmpDesignation: this.Designation,
        EmpContactNo: this.Contact,
        EmpAltContactNo: this.AltContact,
        EmpEmail: this.email,
        EmpPermenantAddress:1,
        EmpTempAddress:2,
        EmpSalaryType: this.Salary,
        EmpBasicSalary: this.BSalary,
        EmpLeaveAllowdMonth:this.Leave,
        EmpPanno: this.pan,
        EmpUid:this.EmpUid,
        EmpBankAcNo: this.Bankno,
        EmpBeneficiaryName: this.Beneficiary,
        EmpBankName: this.Bankname,
        EmpBankBranch: this.Bankbranch,
        EmpIfsccode:this.IFSC,
        EmpCurShift: this.Curshift,
        cudType: "I"
      }
      console.log(data)
      this.serivce.addemp(data).subscribe(res=>{
        console.log(res)
        this.routes.navigateByUrl('/emplist')
        window.location.reload();
        this.matDialogRef.close();
      })
    }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
interface slot {
 
  clLovtype: string;
}