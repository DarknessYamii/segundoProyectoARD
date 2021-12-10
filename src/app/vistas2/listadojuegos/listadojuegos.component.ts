import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import topGames from 'src/assets/json/topGames.json';


@Component({
  selector: 'app-listadojuegos',
  templateUrl: './listadojuegos.component.html',
  styleUrls: ['./listadojuegos.component.css']

})
export class ListadojuegosComponent implements OnInit {
 faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  topGames: any = topGames;


  constructor() { }

  ngOnInit(): void {
  }

}
