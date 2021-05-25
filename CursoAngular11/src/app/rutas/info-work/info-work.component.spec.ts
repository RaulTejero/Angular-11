import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWorkComponent } from './info-work.component';

describe('InfoWorkComponent', () => {
  let component: InfoWorkComponent;
  let fixture: ComponentFixture<InfoWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
