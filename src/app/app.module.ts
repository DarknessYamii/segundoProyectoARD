import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CanalesComponent } from './vistas2/canales/canales.component';
import { CanalComponent } from './vistas2/canales/canal/canal.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './vistas2/acerca-de-nosotros/acerca-de-nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { EntradaService } from './shared2/clases2/interfaces2/servicios2/entrada.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListadojuegosComponent } from './vistas2/listadojuegos/listadojuegos.component';
import { MonturasService } from './shared2/clases2/interfaces2/servicios2/monturas.service';
import { MonturasComponent } from './vistas2/monturas/monturas/monturas.component';
import { MonturaComponent } from './vistas2/monturas/monturas/montura/montura.component';
import { LoginComponent } from './vistas2/login/login.component';
import { RequisitosComponent } from './vistas2/requisitos/requisitos.component';




@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CanalesComponent,
    CanalComponent,
    PaginaNoEncontradaComponent,
    AcercaDeNosotrosComponent,
    MonturasComponent,
    MonturaComponent,
    ListadojuegosComponent,
    LoginComponent,
    RequisitosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, FontAwesomeModule],
  providers: [EntradaService, MonturasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
