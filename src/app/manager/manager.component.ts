import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx'; 
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  budgetSummary: number | null = null;
  summaryData: any = {
    plannedQuantity: { fabricCat1: null, fabricCat2: null },
    plantCapacity: { machine1Cap: null, machine1Occ: null },
    bomPreparation: { rawMaterial1: null, rawMaterial2: null },
    substandardFabric: { subFabric1: null, subFabric2: null },
    fuelPower: { fuelReq1: null, powerReq1: null },
    packagingCost: { packagingCost1: null, packagingCost2: null },
    commissionCharges: { commission1: null, commission2: null },
    processingCharges: { contractual1: null, contractual2: null },
    salariesOverhead: { employees1: null, employees2: null },
  };
  timestamps: string[] = [];
  historicalData: any;
  http = inject(HttpClient);

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  // Method for logout
  logout() {
    this.router.navigate(['/login']);
  }

  // Method to fetch summary data
  fetchSummary() {
    this.dataService.fetchSummary().subscribe(
      response => {
        this.summaryData = response;
        console.log('Summary data fetched:', this.summaryData);
      },
      error => {
        console.error('Error fetching summary data:', error);
      }
    );
  }

  resetSummaryData() {
    this.summaryData = null;
  }

  // Method to submit summary data
  submitSummary() {
    const currentDate = new Date();
    const timeZoneOffset = currentDate.getTimezoneOffset() * 60000;
    const localTime = new Date(currentDate.getTime() + timeZoneOffset);
    const formattedDate = localTime.toISOString().slice(0, 19).replace('T', ' ');

    const payload = {
      plannedQuantity: {
        fabricCat1: this.summaryData.plannedQuantity.fabricCat1,
        fabricCat2: this.summaryData.plannedQuantity.fabricCat2,
      },
      plantCapacity: {
        machine1Cap: this.summaryData.plantCapacity.machine1Cap,
        machine1Occ: this.summaryData.plantCapacity.machine1Occ,
      },
      bomPreparation: {
        rawMaterial1: this.summaryData.bomPreparation.rawMaterial1,
        rawMaterial2: this.summaryData.bomPreparation.rawMaterial2,
      },
      substandardFabric: {
        subFabric1: this.summaryData.substandardFabric.subFabric1,
        subFabric2: this.summaryData.substandardFabric.subFabric2,
      },
      fuelPower: {
        fuelReq1: this.summaryData.fuelPower.fuelReq1,
        powerReq1: this.summaryData.fuelPower.powerReq1,
      },
      packagingCost: {
        packagingCost1: this.summaryData.packagingCost.packagingCost1,
        packagingCost2: this.summaryData.packagingCost.packagingCost2,
      },
      commissionCharges: {
        commission1: this.summaryData.commissionCharges.commission1,
        commission2: this.summaryData.commissionCharges.commission2,
      },
      processingCharges: {
        contractual1: this.summaryData.processingCharges.contractual1,
        contractual2: this.summaryData.processingCharges.contractual2,
      },
      salariesOverhead: {
        employees1: this.summaryData.salariesOverhead.employees1,
        employees2: this.summaryData.salariesOverhead.employees2,
      },
      createdAt: formattedDate
    };

    this.dataService.saveSummaryData(payload).subscribe(
      response => {
        console.log('Submission successful!', response);
      },
      error => {
        console.error('Submission failed', error);
      }
    );
  }

  // Method to fetch timestamps for historical data
  fetchTimestamps() {
    this.dataService.fetchTimestamps().subscribe(
      response => {
        this.timestamps = response.map(item => item.created_at);
        console.log('Extracted timestamps:', this.timestamps);
      },
      error => {
        console.error('Error fetching timestamps:', error);
      }
    );
  }
  selectedTimestamp: string | null = null;  // Add selectedTimestamp property

  // Method to fetch historical data based on a timestamp
  fetchHistoricalData(event: any) {
    this.selectedTimestamp = event.target.value; 
    this.http.get<any>(`http://localhost:3000/api/historical/data/${this.selectedTimestamp}`)
      .subscribe((data) => {
        this.historicalData = data;
        console.log('Historical data retrieved:', this.historicalData);
      }, error => {
        console.error('Error fetching historical data:', error);
      });
  }


  // Method to export data to Excel
  exportToExcel() {
    const data = [
      ['Step 1: Planned Quantity', '', 'Step 2: Plant Capacity', '', 'Step 3: BOM Preparation'],
      ['Fabric Category 1 Quantity', this.summaryData.plannedQuantity?.fabricCat1 ?? 0, 'Capacity of Machine 1', this.summaryData.plantCapacity?.machine1Cap ?? 0, 'Raw Material 1 Quantity', this.summaryData.bomPreparation?.rawMaterial1 ?? 0],
      ['Fabric Category 2 Quantity', this.summaryData.plannedQuantity?.fabricCat2 ?? 0, 'Occupancy of Machine 1', this.summaryData.plantCapacity?.machine1Occ ?? 0, 'Raw Material 2 Quantity', this.summaryData.bomPreparation?.rawMaterial2 ?? 0],
      [],
      ['Step 4: Substandard Fabric', '', 'Step 5: Fuel & Power', '', 'Step 6: Packaging Cost'],
      ['Substandard Fabric Produced at Stage 1', `${this.summaryData.substandardFabric?.subFabric1 ?? 0} Kg`, 'Fuel Requirement of Machine 1', `${this.summaryData.fuelPower?.fuelReq1 ?? 0} Liters`, 'Packaging Cost for Product 1', this.summaryData.packagingCost?.packagingCost1 ?? 0],
      ['Substandard Fabric Produced at Stage 2', `${this.summaryData.substandardFabric?.subFabric2 ?? 0} Kg`, 'Power Requirement of Machine 1', `${this.summaryData.fuelPower?.powerReq1 ?? 0} Kwh`, 'Packaging Cost for Product 2', this.summaryData.packagingCost?.packagingCost2 ?? 0],
      [],
      ['Step 7: Commission Charges', '', 'Step 8: Processing Charges', '', 'Step 9: Salaries Overhead'],
      ['Commission Charges for Product 1', this.summaryData.commissionCharges?.commission1 ?? 0, 'Processing Charges for Product 1', this.summaryData.processingCharges?.contractual1 ?? 0, 'Employees Overhead for Product 1', this.summaryData.salariesOverhead?.employees1 ?? 0],
      ['Commission Charges for Product 2', this.summaryData.commissionCharges?.commission2 ?? 0, 'Processing Charges for Product 2', this.summaryData.processingCharges?.contractual2 ?? 0, 'Employees Overhead for Product 2', this.summaryData.salariesOverhead?.employees2 ?? 0]
    ];

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);

    ws['!cols'] = [
      { wch: 30 },
      { wch: 20 },
      { wch: 30 },
      { wch: 20 },
      { wch: 30 },
      { wch: 20 }
    ];

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Poc Data');
    XLSX.writeFile(wb, 'poc_data.xlsx');
  }
}