import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCardComponent } from './all-card.component';

describe('AllCardComponent', () => {
  let component: AllCardComponent;
  let fixture: ComponentFixture<AllCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
