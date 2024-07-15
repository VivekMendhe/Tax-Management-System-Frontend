import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculateTaxAmountComponent } from './components/tax/calculate-tax-amount/calculate-tax-amount.component';
import { TaxCalculateComponent } from './components/tax/tax-calculate/tax-calculate.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tax-calculate', component: TaxCalculateComponent },
];
