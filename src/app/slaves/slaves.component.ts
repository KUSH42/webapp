import { Component } from '@angular/core';
import { Slave } from './slave';

@Component({
  selector: 'app-slaves',
  templateUrl: './slaves.component.html',
  styleUrls: ['./slaves.component.css']
})
export class SlavesComponent {

  slave: Slave = {
    id: 1,
    name: 'Fianna'
  };

  constructor() { }

}
