import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Instituicao } from '../Instituicao';
import { Globals } from '../globals';

@Injectable()
export class InstituicaoService {
	instituicoes:Instituicao[];
  instituicoesLocal = localStorage["instuticoes"];
  constructor(private http: HttpClient) {
      console.log(this.instituicoesLocal);
       this.instituicoes = this.instituicoesLocal?JSON.parse(localStorage["instituicoes"]):[];
       this.http.get(Globals.apiUrl+"getInst.php").subscribe(data => {
          this.instituicoes = (data)?data as Instituicao[]:this.instituicoes;
          console.log(data as Instituicao[]);
          this.instituicoesLocal = JSON.stringify(this.instituicoes);
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