import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email: string="";
  pwd: string="";
  
  constructor(private serivce:ApiService,
    private routes:Router) { }

  ngOnInit(): void {
  }
  login(){
    let data = {
      email:this.Email,
      password:this.pwd
    }
    this.serivce.login(data).subscribe((res:any)=>{
      localStorage.setItem('token',res.token)
      this.routes.navigateByUrl('/cuslist')
      console.log(res)
    })
  }


}
