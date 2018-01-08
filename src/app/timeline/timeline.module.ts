import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TimelineComponent } from './components/timeline.component';
import { LayerComponent } from './components/layer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    TimelineComponent,
    LayerComponent
  ],
  exports: [
    TimelineComponent,
    LayerComponent
  ]
})
export class TimelineModule { }
