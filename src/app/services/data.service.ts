import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Packaging Cost
  savePackagingCost(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-packaging-cost`, data);
  }

  // Commission Charges
  saveCommissionCharges(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-commission-charges`, data);
  }

  // Fetch Summary for Manager Component
  fetchSummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/fetch-summary`);
  }

  // Save Planned Quantity (Sales Component)
  savePlannedQuantity(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-planned-quantity`, data);
  }

  // Save Plant Capacity (Manufacturing Component)
  savePlantCapacity(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-plant-capacity`, data);
  }

  // Save BOM Preparation (Manufacturing Component)
  saveBomPreparation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-bom-preparation`, data);
  }

  // Save Substandard Fabric (Manufacturing Component)
  saveSubstandardFabric(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-substandard-fabric`, data);
  }

  // Save Fuel & Power (Manufacturing Component)
  saveFuelPower(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-fuel-power`, data);
  }

  // Save Packaging Cost (Sales Component)
  saveSalesPackagingCost(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-sales-packaging-cost`, data);
  }

  // Save Historical Data for Manager Component


  // Save Processing Charges (Purchase Component)
  saveProcessingCharges(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-processing-charges`, data);
  }

  // Save Salaries Overhead (Purchase Component)
  saveSalariesOverhead(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-salaries-overhead`, data);
  }

  // Fetch Data for Each Role (General)
  fetchDataForRole(role: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/fetch-data-for-role?role=${role}`);
  }

  saveSummaryData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-summary-data`, data);
  }
  
  fetchTimestamps(): Observable<{ created_at: string }[]> {
    return this.http.get<{ created_at: string }[]>(`${this.apiUrl}/api/historical/timestamps`);
  }

  fetchHistoricalData(selectedTimestamp: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/historical/data/${selectedTimestamp}`);
  }

  // Additional methods can be added here as needed for each component's functionality...
}