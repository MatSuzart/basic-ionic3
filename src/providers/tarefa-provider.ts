import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TarefaProvider {

  constructor(public http: Http) {
    console.log('Hello TarefaProvider Provider');

    this.list = [];
  }

  getlist(){
  this.list = [
    {descricao: "item"}
  ]
  return this.list;
  }

  insert(tarefa){
  this.list.push(tarefa);
  }

  edit(tarefa){

  }

  delete(tarefa){

  }

}
