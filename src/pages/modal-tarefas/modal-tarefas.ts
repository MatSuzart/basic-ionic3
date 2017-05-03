import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-tarefas',
  templateUrl: 'modal-tarefas.html',
})
export class ModalTarefas {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTarefas');
  }

  salvar() {
    this.view.dismiss(this.tarefa);
  }

}
