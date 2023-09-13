import { AuthModule } from './auth/auth.module';
import { LandingPageModuleModule } from './landing-page-module/landing-page-module.module';
import { CoreModule } from './core/core.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModuleModule,
    AuthModule
    
   
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
