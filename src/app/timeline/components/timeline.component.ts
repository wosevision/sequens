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
  selectedLayerId: string | null;

  selectedLayerId$: Observable<string>;
  layers$: Observable<Layer[]>;

  constructor(private store: Store<fromLayer.LayerState>) { }

  ngOnInit() {
    this.store
      .pipe(select(fromLayer.getSelectedLayerId))
      .subscribe(id => this.selectedLayerId = id);
    this.layers$ = this.store.pipe(
      select(fromLayer.getLayers)
    );

    this.layers$.subscribe(r => console.log('DOO!', r));
  }

  addLayer() {
    const layer = generateMockLayer(this.layerIndex);
    this.layerIndex++;
    this.store.dispatch(new LayerActions.AddLayer({ layer }));
  }

  removeLayer(id: string) {
    this.store.dispatch(new LayerActions.RemoveLayer({ id }));
    this.selectedLayerId = null;
  }

  selectLayer(id: string) {
    this.store.dispatch(new LayerActions.SelectLayer({ id }));
  }

}
