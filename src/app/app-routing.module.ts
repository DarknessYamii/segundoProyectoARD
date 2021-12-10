import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalesComponent } from './vistas2/canales/canales.component';
import { AcercaDeNosotrosComponent } from './vistas2/acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component';
import { ListadojuegosComponent } from './vistas2/listadojuegos/listadojuegos.component';
import { MonturasComponent } from './vistas2/monturas/monturas/monturas.component';
import { MonturaComponent } from './vistas2/monturas/monturas/montura/montura.component';
import { LoginComponent } from './vistas2/login/login.component';
import { RequisitosComponent } from './vistas2/requisitos/requisitos.component';

const routes: Routes = [
  { path: 'canales', component: CanalesComponent },
  { path: 'listadojuegos', component: ListadojuegosComponent },
  { path: 'nosotros', component: AcercaDeNosotrosComponent },
  { path: 'montura', component: MonturaComponent },
  { path: 'monturas', component: MonturasComponent },
  {path: 'requisitos', component: RequisitosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/listadojuegos', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent },
 
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
