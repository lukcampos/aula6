import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Variáveis globais
  url: string ="https://reqres.in/api/users"

  // referencia as classes
  constructor(private http:HttpClient) { }


  // função que lista usários
  async list(){
   return await  this.http.get(this.url).toPromise()
  }


}
