import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {

  url = 'http://localhost:8000'
  constructor(private http:HttpClient) { }

 
  item(data){
    return this.http.post(this.url+'/item',data) 
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
  

}
