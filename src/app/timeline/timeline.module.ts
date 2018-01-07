import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TimelineComponent } from './components/timeline.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TimelineComponent],
  exports: [TimelineComponent]
})
export class TimelineModule { }
