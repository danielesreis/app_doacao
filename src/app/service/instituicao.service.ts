import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Instituicao } from '../Instituicao';
import { Globals } from '../globals';

@Injectable()
export class InstituicaoService {
	instituicoes:Instituicao[];
 
  constructor(private http: HttpClient) {
       this.instituicoes = localStorage.getItem("instituicoes")?JSON.parse(localStorage.getItem("instituicoes")):[];
       

   }


  getInstituicoes():Promise<Instituicao[]>{
    return this.http.get(Globals.apiUrl+"getInst.php").toPromise().then(data => {
          this.instituicoes = (data)?data as Instituicao[]:this.instituicoes;
          console.log(data as Instituicao[]);
          localStorage.setItem("instituicoes", JSON.stringify(this.instituicoes));
          return this.instituicoes;
        },
        error => {
          return this.instituicoes;
        });
  }
  getInstituicao(id):Instituicao{
    for(var instituicao of this.instituicoes){
      if(instituicao.id == id) return instituicao;
    }
    return null;
  }
}