import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sqns-layer-controls',
  templateUrl: './layer-controls.component.html',
  styleUrls: ['./layer-controls.component.scss']
})
export class LayerControlsComponent implements OnInit {

  @Output() addLayer = new EventEmitter();
  @Output() removeLayer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
