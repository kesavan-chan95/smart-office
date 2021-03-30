import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  Name: string;
  email: string;
  Loginname : string;
  barcode : string;
  mobile : Number;  
  Password: string;
  type : string

  constructor(private serivce:ApiService) { }

  ngOnInit(): void {
  }
  item(){
    let data = {
      UserId: 0,
      UserName: this.Name,
      MobileNo: this.mobile,
      EmailId: this.email,
      LoginName: this.Loginname,
      LoginPassword: this.Password,
      type:this.type
    }
    console.log(data)
    this.serivce.item(data).subscribe(res=>{
      console.log(res)
    })
  }
}
