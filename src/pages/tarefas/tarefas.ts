import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalTarefas } from '../modal-tarefas/modal-tarefas';
import { TarefaProvider } from '../../providers/tarefa-provider';


@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public provider: TarefaProvider) {

    this.provider = new TarefaProvider();
    this.listTarefas = this.provider.getlist();

  }
  
  callPush(page, params = {}){
    this.navCtrl.setRoot(this);
    this.navCtrl.push(page, params)
  }

  insert() {
    this.callPush(ModalTarefas);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tarefas');
  }

}
