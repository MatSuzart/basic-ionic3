import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-tarefas',
  templateUrl: 'modal-tarefas.html',
})
export class ModalTarefas {
  
  tarefa: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTarefas');
  }
  
  callPush(page, params = {}){
    this.navCtrl.setRoot(this);
    this.navCtrl.push(page, params)
  }

  salvar() {
    /*this.view.dismiss(this.tarefa);*/
    this.callPush(TarefasPage, {tarefa: this.tarefa});
  }

}
