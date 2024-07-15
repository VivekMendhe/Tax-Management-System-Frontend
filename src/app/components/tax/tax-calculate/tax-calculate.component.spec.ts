import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculateComponent } from './tax-calculate.component';

describe('TaxCalculateComponent', () => {
  let component: TaxCalculateComponent;
  let fixture: ComponentFixture<TaxCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxCalculateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
