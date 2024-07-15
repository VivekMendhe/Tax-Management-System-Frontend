import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-tax',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate-tax.component.html',
  styleUrl: './calculate-tax.component.css',
})
export class CalculateTaxComponent {
  grossAmount: number = 0;
  selectedRegime: string = 'old';
  taxAmount: number | null = null;
  Standard_deductions: number = 50000;
  Taxable_income: number = 0;

  getOldTax(amount: number): number {
    let tax = 0;
    if (amount <= 250000) {
      tax = 0;
    } else if (amount <= 500000) {
      tax = (amount - 250000) * 0.05;
    } else if (amount <= 1000000) {
      tax = (amount - 500000) * 0.2 + 250000 * 0.05;
    } else {
      tax = (amount - 1000000) * 0.3 + 500000 * 0.2 + 250000 * 0.05;
    }
    return tax;
  }

  getNewTax(amount: number): number {
    let tax = 0;
    if (amount <= 300000) {
      tax = 0;
    } else if (amount <= 600000) {
      tax = (amount - 300000) * 0.05;
    } else if (amount <= 900000) {
      tax = 300000 * 0.05 + (amount - 600000) * 0.1;
    } else if (amount <= 1200000) {
      tax = 300000 * 0.05 + 300000 * 0.1 + (amount - 900000) * 0.15;
    } else if (amount <= 1500000) {
      tax =
        300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + (amount - 1200000) * 0.2;
    } else {
      tax =
        300000 * 0.05 +
        300000 * 0.1 +
        300000 * 0.15 +
        300000 * 0.2 +
        (amount - 1500000) * 0.3;
    }
    return tax;
  }

  calculateTax(): void {
    let taxAmount: number;
    if (this.selectedRegime === 'old') {
      taxAmount = this.getOldTax(this.grossAmount);
    } else {
      taxAmount = this.getNewTax(this.grossAmount);
    }

    // let cessAmount = taxAmount * 0.04;
    let totalTaxAmount = taxAmount;

    if (totalTaxAmount > 50000) {
      let taxableIncome = this.grossAmount - this.Standard_deductions;
      if (this.selectedRegime === 'old') {
        taxAmount = this.getOldTax(taxableIncome);
      } else {
        taxAmount = this.getNewTax(taxableIncome);
      }
      let cessAmount = taxAmount * 0.04;
      totalTaxAmount = taxAmount + cessAmount;
    } else {
      totalTaxAmount = 0;
    }

    this.taxAmount = totalTaxAmount;
  }
}
