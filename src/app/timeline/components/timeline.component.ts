import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as fromLayer from '../../layer/reducers/layer';
import * as LayerActions from '../../layer/actions/layer';
import { Layer, generateMockLayer } from '../../layer/models/layer';

@Component({
  selector: 'sqns-timeline',
  templateUrl: './timeline.component.html',
  styles: []
})
export class TimelineComponent implements OnInit {

  layers$: Observable<Layer[]>;

  constructor(private store: Store<fromLayer.State>) { }

  ngOnInit() {
    this.layers$ = this.store.pipe(select(fromLayer.getLayers));
  }

  addLayer() {
    const toAdd = generateMockLayer();
    this.store.dispatch(new LayerActions.AddLayer(toAdd));
  }

  removeLayer(layer) {
    this.store.dispatch(new LayerActions.RemoveLayer(layer));
  }

}
