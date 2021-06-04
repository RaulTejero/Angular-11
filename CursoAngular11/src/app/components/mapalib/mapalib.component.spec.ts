import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapalibComponent } from './mapalib.component';

describe('MapalibComponent', () => {
  let component: MapalibComponent;
  let fixture: ComponentFixture<MapalibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapalibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapalibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
