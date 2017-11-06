 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { Globals } from '../globals';
import { User } from '../user';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';




@Injectable()
export class AuthService {
	public login(credentials):Promise<any>{
		if(credentials.email === null || credentials.password === null){
			return Promise.resolve(Observable.throw("Insert credentials"));
		}
		else{
			var headersOpt = new HttpHeaders({"Content-type": "application/x-www-form-urlencoded"});
			return this.http.post(Globals.apiUrl+"login.php", "email="+credentials.email+"&senha="+credentials.password, {headers: headersOpt}).toPromise().then(
				result => { 
						console.log(result);
						return Observable.create(observer =>{
							let access = result[0];
							console.log(access);
							Globals.user = result[0] as User;
							observer.next(access);
							observer.complete();
						});	
						},
				error => { console.log(error); }
				)
			
			// return Observable.create(observer =>{
			// 		let access = {name: "tika", email: "ikao"};
			// 		this.currentUser = access as User;
			// 		observer.next(access);
			// 		observer.complete();
			// 	});	
		}
	}

	public register(credentials){
		if(credentials.email === null || credentials.password === null){
			return Observable.throw("Insert credentials");
		}
		else{
			return Observable.create(observer => {
				observer.next(true);
				observer.complete();
			});
		}
	}

	public getUserInfo(): User{		
		Globals.user = new User();
		return Globals.user;
	}

	public logout(){
		return Observable.create(observer => {
			Globals.user= null;
			observer.next(true);
			observer.complete();
		});
	}
  constructor(private http:HttpClient) { }

}
