import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LayerComponent } from './components/layer.component';
import { LayerControlsComponent } from './components/layer-controls.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
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
export class TimelineModule { }
