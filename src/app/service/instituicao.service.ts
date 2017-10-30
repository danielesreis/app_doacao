import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Instituicao } from '../Instituicao';

@Injectable()
export class InstituicaoService implements OnInit {
	instituicoes:Instituicao[];
  constructor(private http: HttpClient) { }


  ngOnInit():void{
  	this.http.get("localhost/doar/getInst.php").subscribe(data => {
  		this.instituicoes = data["results"];
  	})
  }

  getInstituicoes():Instituicao[]{
  	return this.instituicoes;
  }
}