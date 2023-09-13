import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    LandingPageComponent,
  ]
})
export class LandingPageModuleModule { }
