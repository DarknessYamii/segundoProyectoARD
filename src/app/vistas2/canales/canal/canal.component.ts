import { Component, Input, OnInit } from '@angular/core';
import { Canal } from 'src/app/shared2/clases2/interfaces2/canal';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css'],
})
export class CanalComponent implements OnInit {
  @Input()
  public canal: Canal;
  constructor() {
    this.canal = {
      title: '',
      body: '',
    }
  }

  ngOnInit(): void {}
}
