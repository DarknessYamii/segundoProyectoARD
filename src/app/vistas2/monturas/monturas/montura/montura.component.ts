import { Component, Input, OnInit } from '@angular/core';
import { Monturas } from 'src/app/shared2/clases2/interfaces2/monturas';


@Component({
  selector: 'app-montura',
  templateUrl: './montura.component.html',
  styleUrls: ['./montura.component.css']
})
export class MonturaComponent implements OnInit {
  @Input()
  public monturas: Monturas;
  constructor() {
    this.monturas = {
      name: '',
      image: '',
      description: '',
    }
  }


  ngOnInit(): void {
  }

}
