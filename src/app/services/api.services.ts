import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {

  url = 'https://localhost:44322'
  constructor(private http:HttpClient) { }

 
  item(data){
    return this.http.post(this.url+'/api/Login/UserCreation',data) 
  }
 
  customer(data){
    return this.http.post(this.url+'/customer',data) 
  }
getlist(){
    return this.http.get(this.url+'/list')
}
login(data){
  return this.http.post(this.url+'/login',data)
}
register(data){
  return this.http.post(this.url+'/register',data)
}
getCus(){
  return this.http.get(this.url+'/listCus')
}
addemp(data){
  return this.http.post(this.url+'/api/Employee/EmployeeCreation',data) 
}
getemp(){
  return this.http.get(this.url+'/api/Employee/GetAllEmployee')
}
deleteemp(data){
  return this.http.post(this.url+'/api/Employee/EmployeeCreation',data)
}
addbus(data){
  return this.http.post(this.url+'/api/Business/BusinessCreation',data) 
}
getbus(){
  return this.http.get(this.url+'/api/Business/GetAllBusiness')
}
}
