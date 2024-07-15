import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateTaxAmountComponent } from './calculate-tax-amount.component';

describe('CalculateTaxAmountComponent', () => {
  let component: CalculateTaxAmountComponent;
  let fixture: ComponentFixture<CalculateTaxAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateTaxAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateTaxAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
