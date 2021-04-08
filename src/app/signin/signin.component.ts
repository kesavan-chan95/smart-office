import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  Email: string="";
  pwd: string="";

  constructor(private serivce:ApiService,
    private routes:Router) { }

    ngOnInit(): void {
    }
    signin(){
      let data = {
        LoginName:this.Email,
        LoginPassword:this.pwd
      }
      this.serivce.signin(data).subscribe((res:any)=>{
        // localStorage.setItem('token',res.token)
        this.routes.navigateByUrl('/dash')
        console.log(res)
      })
    }

}
