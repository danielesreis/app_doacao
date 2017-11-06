import {Injectable, Input} from "@angular/core";
import {User} from "./user";
@Injectable()
export class Globals{
	static title: string = "teste";
	static apiUrl: string = "https://apidoar.000webhostapp.com/";
	static user: User;
}