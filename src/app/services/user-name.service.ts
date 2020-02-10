import { Injectable } from '@angular/core';
//import {Http,Header} from '@angular/http';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
//import {map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  private username: string;
   
  constructor(private http:HttpClient) {
    console.log("asfvjfasj");
    

   }

   getUserInfo(){
     
const  headers = new  HttpHeaders().set("User-Agent", "Awesome-Octocat-App");
     return this.http.get("https:api.github.com/users/"+this.username)
     .pipe(
      map(res=>res)
     )
   }
   getUserRepos(){
     
const  headers = new  HttpHeaders().set("User-Agent", "Awesome-Octocat-App");
    return this.http.get("https:api.github.com/users/"+this.username+"/repos",)
   .pipe(
    map(res=>res)
   ) 
   }
   updateProfile(usename: string){
     this.username=usename
   }

   
}
