import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { ModalTarefas } from '../pages/modal-tarefas/modal-tarefas';
import { TarefaProvider } from '../providers/tarefa-provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TarefasPage,
    ModalTarefas
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TarefasPage,
    ModalTarefas
  ],
  providers: [
    TarefaProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
