import { FaceSnapsModule } from './../face-snaps/face-snaps.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProvider } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import * as fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  exports:[
    HeaderComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProvider
  ]
})
export class CoreModule { 
  constructor(){
    registerLocaleData(fr.default)
  }
}
