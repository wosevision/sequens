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

  layers$ = this.store.pipe(select(fromLayer.getLayers));
  // layer = {
  //   el: document.createElement('div'),
  //   get tag() {
  //     return (<Element>this.el).localName || 'element';
  //   },
  //   get class() {
  //     const classArray = (<Element>this.el).classList.toString().split(' ');
  //     return classArray.length ? `.${classArray.join('.')}` : '';
  //   },
  //   get id() {
  //     const id = (<Element>this.el).id;
  //     return id && id !== '' ? `#${id}` : '';
  //   }
  // };

  constructor(private store: Store<fromLayer.State>) { }

  ngOnInit() {
    // this.layer.el.setAttribute('id', 'fun_id');
    // this.layer.el.classList.add('fun-class');
    // this.layer.el.classList.add('more-fun');
  }

  addLayer() {
    const toAdd = generateMockLayer();
    this.store.dispatch(new LayerActions.AddLayer(toAdd));
  }

  removeLayer(toRemove) {
    this.store.dispatch(new LayerActions.RemoveLayer(toRemove));
  }

}
