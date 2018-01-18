import {
  Component,
  OnInit,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'sqns-timeline-marker',
  templateUrl: './timeline-marker.component.html',
  styleUrls: ['./timeline-marker.component.scss']
})
export class TimelineMarkerComponent implements OnInit {

  // @Input() position: number;
  @HostBinding('style.left') _position: string;
  @Input() set position(value: number) {
    if (value < 0 || value > 1) {
      throw new Error('[sqns-timeline-marker] position must be between 0 and 1');
    }
    this._position = `${value * 100}%`;
  }

  constructor() { }

  ngOnInit() {
  }

}
