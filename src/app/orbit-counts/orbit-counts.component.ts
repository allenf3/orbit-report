import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  types: string[] = [ 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope' ];

  constructor() { }

  ngOnInit() {
  }

  calculateAmount(type: string) {
    let counter: number = 0;
    for(let i = 0; i < this.satellites.length; i++) {
      if(this.satellites[i].type.toLowerCase() === type) {
        counter += 1;
      }
    }
    return counter;
  }

}
