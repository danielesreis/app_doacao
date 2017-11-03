import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Instituicao } from '../Instituicao';

@Injectable()
export class InstituicaoService {
  url = "http://localhost/doar/"
	instituicoes:Instituicao[];
  instituicoesLocal = localStorage["instuticoes"];
  constructor(private http: HttpClient) {
      console.log(this.instituicoesLocal);
       this.instituicoes = this.instituicoesLocal?JSON.parse(localStorage["instituicoes"]):[];
       this.http.get(this.url+"getInst.php").subscribe(data => {
          this.instituicoes = data as Instituicao[];
          console.log(data as Instituicao[]);
          this.instituicoesLocal = JSON.stringify(this.instituicoesLocal);
        })

   }


  getInstituicoes():Instituicao[]{
  	return this.instituicoes;
  }
  getInstituicao(id):Instituicao{
    for(var instituicao of this.instituicoes){
      if(instituicao.id == id) return instituicao;
    }
    return null;
  }
}