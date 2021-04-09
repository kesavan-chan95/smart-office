import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AttendanceComponent } from '../attendance/attendance.component';
export interface PeriodicElement {
  name: string;
  position: number;
  demo1:string;
  demo2:string;
  demo3:string;
  demo4:string;
  demo5:string;
  demo6:string;
  demo7:string;
  d8:string;
  d9:string;
  d10:string;
  d11:string;
  d12:string;
  d13:string;
  d14:string;
  d15:string;
  d16:string;
  d17:string;
  d18:string;
  d19:string;
  d20:string;
  d21:string;
  d22:string;
  d23:string;
  d24:string;
  d25:string;
  d26:string;
  d27:string;
  d28:string;
  d29:string;
  d30:string;
  d31:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Iyan',  demo1:'A',demo2:'A', demo3:'P', demo4:'T', demo5:'P', demo6:'P', demo7:'P', d8:'T', d9:'T', d10:'P', d11:'A', d12:'T', d13:'A', d14:'A',
   d15:'P', d16:'A', d17:'T', d18:'A', d19:'P', d20:'T', d21:'A', d22:'H', d23:'A', d24:'A', d25:'H', d26:'T', d27:'A', d28:'A', d29:'P', d30:'T', d31:'A'},

  {position: 2, name: 'Ashok',  demo1:'P',demo2:'A', demo3:'A', demo4:'P', demo5:'P', demo6:'A', demo7:'P', d8:'P', d9:'P', d10:'T', d11:'A', d12:'P', d13:'P', d14:'H',
   d15:'P', d16:'A', d17:'A', d18:'P', d19:'A', d20:'A', d21:'T', d22:'A', d23:'P', d24:'P', d25:'H', d26:'P', d27:'A', d28:'P', d29:'H', d30:'A', d31:'T'},

  {position: 3, name: 'chella',  demo1:'T',demo2:'A', demo3:'A', demo4:'P', demo5:'A', demo6:'P', demo7:'P', d8:'A', d9:'T', d10:'H', d11:'P', d12:'P', d13:'A', d14:'T',
   d15:'A', d16:'P', d17:'T', d18:'A', d19:'P', d20:'A', d21:'H', d22:'P', d23:'T', d24:'T', d25:'T', d26:'A', d27:'P', d28:'A', d29:'P', d30:'T', d31:'P'}

];
@Component({
  selector: 'app-empattendance',
  templateUrl: './empattendance.component.html',
  styleUrls: ['./empattendance.component.css']
})
export class EmpattendanceComponent {
  // implements OnInit
  displayedColumns: string[] = ['position', 'name', 'demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14', 'd15',
   'd16', 'd17', 'd18', 'd19', 'd20', 'd21', 'd22', 'd23', 'd24', 'd25', 'd26', 'd27', 'd28', 'd29', 'd30', 'd31'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialogModule:MatDialog) { }

  onOpenDialogclick(){
    let matDialogRef = this.matDialogModule.open(AttendanceComponent,
      {
        width:"1200px",
        height:"200px"
      });
    matDialogRef.afterClosed();
  }
}
