import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaxCalculationService } from '../../../services/tax-calculation.service';
import { TaxCalculate } from '../../types/taxCalculate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculate-tax-amount',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculate-tax-amount.component.html',
  styleUrl: './calculate-tax-amount.component.css',
})
export class CalculateTaxAmountComponent {
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
