import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  budgetSummary: number | null = null;
  fabricCat1: string = '';
  fabricCat2: string = '';
  machine1Cap: number | null = null;
  machine1Occ: number | null = null;
  rawMaterial1: string = '';
  rawMaterial2: string = '';
  subFabric1: string = '';
  subFabric2: string = '';
  fuelReq1: number | null = null;
  powerReq1: number | null = null;
  packagingCost1: number | null = null;
  packagingCost2: number | null = null;
  commission1: number | null = null;
  commission2: number | null = null;
  contractual1: number | null = null;
  contractual2: number | null = null;
  employees1: number | null = null;
  employees2: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}
  logout() {
    this.router.navigate(['/login']);  
  }

  ngOnInit() {

  }

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

  fetchSummary() {
    this.http.get('http://localhost:3000/fetch-summary').subscribe(
      (response) => {
        this.summaryData = response; // Assign the response to the summaryData property
        console.log('Summary data fetched:', this.summaryData);
      },
      (error) => {
        console.error('Error fetching summary data:', error);
      }
    );
  }

  resetSummaryData() {
    this.summaryData = null; // Clear the data
  }

  submitSummary() {
    // Get the current date and time in the desired format
    const currentDate = new Date();
    // Adjust to your local timezone (in hours)
    const timeZoneOffset = currentDate.getTimezoneOffset() * 60000; // Offset in milliseconds
    const localTime = new Date(currentDate.getTime() + timeZoneOffset);
    const formattedDate = localTime.toISOString().slice(0, 19).replace('T', ' '); 

    // Prepare data to submit
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
        createdAt: formattedDate // Add current timestamp here
    };

    // Log the payload to check its structure
    console.log('Payload to submit:', payload);

    // Make a POST request to your backend API
    this.http.post('http://localhost:3000/save-summary-data', payload)
        .subscribe(response => {
            console.log('Submission successful!', response);
            // Handle successful submission (e.g., show a success message)
        }, error => {
            console.error('Submission failed', error);
            // Handle error (e.g., show an error message)
        });
}

  
  timestamps: string[] = [];
  historicalData: any;
  selectedTimestamp: string = '';  // Initialize selectedTimestamp


  // fetchTimestamps() {
  //   this.http.get<{ [key: string]: { created_at: string } }>('http://localhost:3000/fetch-summary')
  //     .subscribe((response) => {
  //       console.log('Response data:', response);
  
  //       const timestamps: string[] = [];
  //       for (const key in response) {
  //         if (response[key]?.created_at) {
  //           timestamps.push(response[key].created_at);  // Collect the created_at values
  //         }
  //       }
  
  //       this.timestamps = timestamps;  // Store the timestamps
  //       console.log('Extracted timestamps:', this.timestamps);
  //     }, error => {
  //       console.error('Error fetching timestamps:', error);
  //     });
  // }
  fetchTimestamps() {
    this.http.get<{ created_at: string }[]>('http://localhost:3000/api/historical/timestamps')
      .subscribe((response) => {
        this.timestamps = response.map(item => item.created_at);
        console.log('Extracted timestamps:', this.timestamps);
      }, error => {
        console.error('Error fetching timestamps:', error);
      });
  }

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


exportToExcel() {
  // Ensure data is saved or up-to-date before exporting

  const data = [
    // Step headers
    ['Step 1: Planned Quantity', '', 'Step 2: Plant Capacity', '', 'Step 3: BOM Preparation'],
    // Step 1: Planned Quantity
    ['Fabric Category 1 Quantity', this.summaryData.plannedQuantity?.fabricCat1 ?? 0, 'Capacity of Machine 1', this.summaryData.plantCapacity?.machine1Cap ?? 0, 'Raw Material 1 Quantity', this.summaryData.bomPreparation?.rawMaterial1 ?? 0],
    ['Fabric Category 2 Quantity', this.summaryData.plannedQuantity?.fabricCat2 ?? 0, 'Occupancy of Machine 1', this.summaryData.plantCapacity?.machine1Occ ?? 0, 'Raw Material 2 Quantity', this.summaryData.bomPreparation?.rawMaterial2 ?? 0],
    
    [], // Empty row for visual separation

    ['Step 4: Substandard Fabric', '', 'Step 5: Fuel & Power', '', 'Step 6: Packaging Cost'],
    ['Substandard Fabric Produced at Stage 1', `${this.summaryData.substandardFabric?.subFabric1 ?? 0} Kg`, 'Fuel Requirement of Machine 1', `${this.summaryData.fuelPower?.fuelReq1 ?? 0} Liters`, 'Packaging Cost for Product 1', this.summaryData.packagingCost?.packagingCost1 ?? 0],
    ['Substandard Fabric Produced at Stage 2', `${this.summaryData.substandardFabric?.subFabric2 ?? 0} Kg`, 'Power Requirement of Machine 1', `${this.summaryData.fuelPower?.powerReq1 ?? 0} Kwh`, 'Packaging Cost for Product 2', this.summaryData.packagingCost?.packagingCost2 ?? 0],
    
    [], // Empty row for visual separation

    ['Step 7: Commission Charges', '', 'Step 8: Processing Charges', '', 'Step 9: Salaries Overhead'],
    ['Commission Charges for Product 1', this.summaryData.commissionCharges?.commission1 ?? 0, 'Processing Charges for Product 1', this.summaryData.processingCharges?.contractual1 ?? 0, 'Employees Overhead for Product 1', this.summaryData.salariesOverhead?.employees1 ?? 0],
    ['Commission Charges for Product 2', this.summaryData.commissionCharges?.commission2 ?? 0, 'Processing Charges for Product 2', this.summaryData.processingCharges?.contractual2 ?? 0, 'Employees Overhead for Product 2', this.summaryData.salariesOverhead?.employees2 ?? 0]
  ];

  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);

  ws['!cols'] = [
    { wch: 30 }, // Width of Step columns
    { wch: 20 }, // Width for data columns
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