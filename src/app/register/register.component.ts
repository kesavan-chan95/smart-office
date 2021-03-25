import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Email: string="";
  phone: string="";
  pwd: string="";

  constructor(private serivce:ApiService,
    private routes:Router) { }

  ngOnInit(): void {
  }
  register(){
    let data = {
      email:this.Email,
      mobile:this.phone,
      password:this.pwd
    }
    console.log(data)
    this.serivce.register(data).subscribe(res=>{
      this.routes.navigateByUrl('/login')
      console.log(res)
    })  
  }

}
