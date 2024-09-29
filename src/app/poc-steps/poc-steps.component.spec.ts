import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocStepsComponent } from './poc-steps.component';

describe('PocStepsComponent', () => {
  let component: PocStepsComponent;
  let fixture: ComponentFixture<PocStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
