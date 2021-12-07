import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CajasModule } from './cajas/cajas.module';
import { SasModule } from './sas/sas.module';
import { LoginModule } from './login/login.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { NavBarComponent } from './prestamos/component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CajasModule,
    LoginModule,
    PrestamosModule,
    SasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
