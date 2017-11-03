 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpClientModule} from '@angular/common/http'
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
	url = "http://localhost/doar/"
	public login(credentials):Promise<any>{
		if(credentials.email === null || credentials.password === null){
			return Promise.resolve(Observable.throw("Insert credentials"));
		}
		else{
			return this.http.post(this.url+"login.php", {email: credentials.email, senha: credentials.password}).toPromise().then(
				result => { 
						return Observable.create(observer =>{
							let access = result;
							this.currentUser = result as User;
							observer.next(access);
							observer.complete();
						});	
						}
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
