import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaxCalculate } from '../../types/taxCalculate';
import { TaxCalculationService } from '../../../services/tax-calculation.service';

@Component({
  selector: 'app-tax-calculate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tax-calculate.component.html',
  styleUrl: './tax-calculate.component.css',
})
export class TaxCalculateComponent {
  data: TaxCalculate = {
    amount: 0,
    regime: 'old',
  };
  taxAmount: number | null = null;
  taxAmountInWords: string = '';

  constructor(private taxCalcService: TaxCalculationService) {}

  calculateTax() {
    this.taxCalcService.getTaxAmount(this.data).subscribe(
      (res) => {
        this.taxAmount = res.taxAmount;
      },
      (error) => {
        console.error('Error calculating tax:', error);
      }
    );
  }
}
