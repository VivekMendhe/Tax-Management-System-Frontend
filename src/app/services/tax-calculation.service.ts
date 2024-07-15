import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaxCalculate } from '../components/types/taxCalculate';

@Injectable({
  providedIn: 'root',
})
export class TaxCalculationService {
  baseUrl = 'http://localhost:8080/api/taxslab';
  endpoint = 'calculate';

  constructor(private httpClient: HttpClient) {}

  getTaxAmount(data: TaxCalculate): Observable<{ taxAmount: number }> {
    return this.httpClient.post<{ taxAmount: number }>(
      `${this.baseUrl}/${this.endpoint}`,
      data
    );
  }
}
