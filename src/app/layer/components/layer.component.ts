import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sqns-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {
  @Input() selected: boolean;

  tweens = [
    {
      id: 1,
      start: 0.3,
      duration: 0.2
    },
    {
      id: 2,
      start: 0.7,
      duration: 0.1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
