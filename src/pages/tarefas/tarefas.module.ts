import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TarefasPage } from './tarefas';

@NgModule({
  declarations: [
    TarefasPage,
  ],
  imports: [
    IonicModule.forChild(TarefasPage),
  ],
  exports: [
    TarefasPage
  ]
})
export class TarefasPageModule {}
