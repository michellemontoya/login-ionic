import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VistaComponent } from './vista/vista.component'; // Importa VistaComponent
import { LoginPage } from './login/login.page'; // Importa LoginPage
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent, // Declara VistaComponent
    LoginPage // Declara LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
