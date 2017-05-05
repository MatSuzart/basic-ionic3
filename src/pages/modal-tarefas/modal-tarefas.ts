 import { Component } from '@angular/core';
 import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import { TarefasPage } from '../tarefas/tarefas';

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

    salvar() {
     this.navCtrl.push(TarefasPage, {discricao: this.tarefa})
    }

  }
