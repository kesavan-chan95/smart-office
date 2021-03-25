import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  Name: string;
  Price: string;
  discount : string;
  barcode : string;
  Stock : Number;  

  constructor(private serivce:ApiService) { }

  ngOnInit(): void {
  }
  item(){
    let data = {
      name: this.Name,
      price: this.Price,
      Discount: this.discount,
      Barcode: this.barcode,
      stock: this.Stock
    }
    console.log(data)
    this.serivce.item(data).subscribe(res=>{
      console.log(res)
    })
  }
}
