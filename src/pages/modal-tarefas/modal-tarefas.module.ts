import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ModalTarefas } from './modal-tarefas';

@NgModule({
  declarations: [
    ModalTarefas,
  ],
  imports: [
    IonicModule.forChild(ModalTarefas),
  ],
  exports: [
    ModalTarefas
  ]
})
export class ModalTarefasModule {}
