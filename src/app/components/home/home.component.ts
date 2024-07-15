import { Component } from '@angular/core';
import { CalculateComponent } from '../tax/calculate/calculate.component';
import { CalculateTaxComponent } from '../tax/calculate-tax/calculate-tax.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalculateComponent, CalculateTaxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
