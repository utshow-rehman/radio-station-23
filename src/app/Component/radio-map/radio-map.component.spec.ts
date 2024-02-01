import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioMapComponent } from './radio-map.component';

describe('RadioMapComponent', () => {
  let component: RadioMapComponent;
  let fixture: ComponentFixture<RadioMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
