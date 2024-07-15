import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css',
})
export class CalculateComponent {
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

  totalTaxAmountOldRegime(amount: number): number {
    let taxableAmount = amount - this.Standard_deductions;
    let oldRegimeTaxAmount = this.getOldTax(taxableAmount);
    if (oldRegimeTaxAmount <= 50000) {
      return 0;
    } else {
      return oldRegimeTaxAmount;
    }
  }

  totalTaxAmountNewRegime(amount: number): number {
    let taxableAmount = amount - this.Standard_deductions;
    let newRegimeTaxAmount = this.getNewTax(taxableAmount);
    if (newRegimeTaxAmount <= 50000) {
      return 0;
    } else {
      return newRegimeTaxAmount;
    }
  }

  calculateOldRegimeCess(amount: number): number {
    let oldTax = this.totalTaxAmountOldRegime(amount);
    return oldTax * 0.04;
  }
  calculateNewRegimeCess(amount: number): number {
    let newTax = this.totalTaxAmountNewRegime(amount);
    return newTax * 0.04;
  }

  totalTaxAmountOldRegimeWithCess(amount: number): number {
    let oldTax = this.totalTaxAmountOldRegime(amount);
    let oldCess = this.calculateOldRegimeCess(amount);
    let response = oldTax + oldCess;
    if (response <= 50000) {
      return 0;
    } else {
      return oldTax + oldCess;
    }
  }
  totalTaxAmountNewRegimeWithCess(amount: number): number {
    let newTax = this.totalTaxAmountNewRegime(amount);
    let newCess = this.calculateNewRegimeCess(amount);
    let response = newTax + newCess;
    if (response <= 50000) {
      return 0;
    } else {
      return newTax + newCess;
    }
  }

  calculateTax(): void {
    if (this.selectedRegime === 'old') {
      this.taxAmount = this.totalTaxAmountOldRegimeWithCess(this.grossAmount);
    } else {
      this.taxAmount = this.totalTaxAmountNewRegimeWithCess(this.grossAmount);
    }
  }
}
