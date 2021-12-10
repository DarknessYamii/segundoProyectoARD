import { Component, OnInit } from '@angular/core';
import { Monturas } from 'src/app/shared2/clases2/interfaces2/monturas';
import { MonturasService } from 'src/app/shared2/clases2/interfaces2/servicios2/monturas.service';

@Component({
  selector: 'app-monturas',
  templateUrl: './monturas.component.html',
  styleUrls: ['./monturas.component.css']
})
export class MonturasComponent implements OnInit {
public listadoMonturas: Monturas[];
  constructor(private monturaService: MonturasService) { 
    this.listadoMonturas = [];
  }

  ngOnInit(): void {
    this.recuperarMonturas();
  }

  private recuperarMonturas(): void {
    this.monturaService.recuperarMonturas().subscribe(
      (data) =>{
        this.listadoMonturas = data;
      },
      (error) => {
        console.log('ERROR: ',error);
      },
      () => {
        console.log('Peticion realizado correctamente');
      }
    )
  }
}
