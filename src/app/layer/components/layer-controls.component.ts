import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'sqns-layer-controls',
  templateUrl: './layer-controls.component.html',
  styleUrls: ['./layer-controls.component.scss']
})
export class LayerControlsComponent implements OnInit {

  @Input() addDisabled: boolean;
  @Input() removeDisabled: boolean;

  @Output() addLayer = new EventEmitter();
  @Output() removeLayer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
