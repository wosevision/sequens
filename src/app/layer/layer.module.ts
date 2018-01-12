import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material/material.module';
import { LayerComponent } from './components/layer.component';
import { LayerControlsComponent } from './components/layer-controls.component';
import { reducer } from './reducers/layer';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('layer', reducer)
  ],
  declarations: [
    LayerComponent,
    LayerControlsComponent
  ],
  exports: [
    LayerComponent,
    LayerControlsComponent
  ]
})
export class LayerModule { }
