import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

import * as fromLayer from '../../layer/reducers';
import * as LayerActions from '../../layer/actions/layer';
import { Layer, generateMockLayer } from '../../layer/models/layer';

@Component({
  selector: 'sqns-timeline',
  templateUrl: './timeline.component.html',
  styles: []
})
export class TimelineComponent implements OnInit {
  /** Local state -- REMOVE THIS */
  layerIndex = 0;

  selectedLayerId$: Observable<number>;
  layers$: Observable<Layer[]>;

  constructor(private store: Store<fromLayer.State>) { }

  ngOnInit() {
    this.selectedLayerId$ = this.store.pipe(
      select(fromLayer.getSelectedLayerId),
      share()
    );
      // .subscribe(id => this.selectedLayerId = id);
    this.layers$ = this.store.pipe(
      select(fromLayer.getLayers)
    );
  }

  addLayer() {
    const toAdd = generateMockLayer(this.layerIndex);
    this.layerIndex++;
    this.store.dispatch(new LayerActions.AddLayer(toAdd));
  }

  removeLayer(layer) {
    this.store.dispatch(new LayerActions.RemoveLayer(layer));
  }

  selectLayer(layer) {
    this.store.dispatch(new LayerActions.SelectLayer(layer));
  }

}
