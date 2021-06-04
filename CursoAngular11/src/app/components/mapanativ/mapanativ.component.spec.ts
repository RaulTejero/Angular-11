import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapanativComponent } from './mapanativ.component';

describe('MapanativComponent', () => {
  let component: MapanativComponent;
  let fixture: ComponentFixture<MapanativComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapanativComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapanativComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
