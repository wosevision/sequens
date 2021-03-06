import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material/material.module';
import { LayerModule } from '../layer/layer.module';
import { TimelineComponent } from './components/timeline.component';
import { TimelineMarkerComponent } from './components/timeline-marker.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LayerModule
  ],
  declarations: [
    TimelineComponent,
    TimelineMarkerComponent
  ],
  exports: [
    TimelineComponent
  ]
})
export class TimelineModule { }
