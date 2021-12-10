import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/shared2/clases2/interfaces2/canal';
import { EntradaService } from 'src/app/shared2/clases2/interfaces2/servicios2/entrada.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css'],
  
})
export class CanalesComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  public listadoEntradas: Canal[];
  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = [];
  }
  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }
}
