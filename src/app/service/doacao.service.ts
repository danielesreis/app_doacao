import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import 'rxjs/add/operator/toPromise';

export enum Tipo{
		MATERIAL,
		VOLUNTARIADO
}

@Injectable()
export class DoacaoService{
	constructor(private http: HttpClient){

	}

	tipo= Tipo;

	public getDoacao(id){
		return this.http.get(Globals.apiUrl+'getUserDonations.php?id='+id).toPromise().then(result => {
			console.log(result);
			return Promise.resolve(result);
		})
	}

	public doar(data): Promise<any>{
		data.voluntariado = false;
		data.material = false;
		switch (data.tipo) {
			case this.tipo.MATERIAL:
				data.material = true;
				break;
			
			case this.tipo.VOLUNTARIADO:
				data.voluntariado = true;
				break;
		}

		return this.http.post(Globals.apiUrl+'donate.php', JSON.stringify(data)).toPromise().then(result => {
			console.log(result);
			return Promise.resolve(result); 
		},
		error => {
			console.log(error);
			return Promise.reject(error);
		});
	}
}