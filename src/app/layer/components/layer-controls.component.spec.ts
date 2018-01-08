import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlsComponent } from './layer-controls.component';

describe('LayerControlsComponent', () => {
  let component: LayerControlsComponent;
  let fixture: ComponentFixture<LayerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
