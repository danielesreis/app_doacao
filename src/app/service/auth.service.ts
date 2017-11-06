 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { Globals } from '../globals';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';

export class User{
	name: string;
	email: string;

	constructor(name: string, email: string){
		this.name = name;
		this.email = email;
	}
}


@Injectable()
export class AuthService {
	currentUser: User;
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
							let access = result;
							this.currentUser = result as User;
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
		this.currentUser = new User('', '');
		return this.currentUser;
	}

	public logout(){
		return Observable.create(observer => {
			this.currentUser = null;
			observer.next(true);
			observer.complete();
		});
	}
  constructor(private http:HttpClient) { }

}
