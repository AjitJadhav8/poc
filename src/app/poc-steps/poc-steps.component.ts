  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
  import * as XLSX from 'xlsx';


  @Component({
    selector: 'app-poc-steps',
    standalone: true,
    imports: [FormsModule,CommonModule],
    templateUrl: './poc-steps.component.html',
    styleUrl: './poc-steps.component.css'
  })
  export class PocStepsComponent {

    currentStep: { step: number; label: string } | null = null;
  
    allSteps = [
      { step: 1, label: '1. Planned Quantity' },
      { step: 2, label: '2. Plant Capacity' },
      { step: 3, label: '3. BOM Preparation' },
      { step: 4, label: '4. Substandard Fabric' },
      { step: 5, label: '5. Fuel & Power' },
      { step: 6, label: '6. Packaging Cost' },
      { step: 7, label: '7. Commission Charges' },
      { step: 8, label: '8. Processing Charges' },
      { step: 9, label: '9. Salaries Overhead' },
      { step: 10, label: '10. Budget Summary' }
    ];
  
    steps = this.getAllowedSteps();
  
    // Data variables for each step
    fabricCat1: number | null = null;
    fabricCat2: number | null = null;
    machine1Cap: number | null = null;
    machine1Occ: number | null = null;
    rawMaterial1: number | null = null;
    rawMaterial2: number | null = null;
    subFabric1: number | null = null;
    subFabric2: number | null = null;
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
  
    constructor(private router: Router) {  
      this.currentStep = this.steps.length > 0 ? this.steps[0] : null;
    }
  
    getAllowedSteps() {
      const allowedSteps = JSON.parse(localStorage.getItem('allowedSteps') || '[]');
      return this.allSteps.filter(step => allowedSteps.includes(step.step));
    }
  
    showStep(step: { step: number; label: string }): void {
      if (this.steps.some(s => s.step === step.step)) {
        this.currentStep = step;
      } else {
        alert('Access Denied! You do not have permission to view this section.');
      }
    }
  
    nextStep(): void {
      const currentIndex = this.steps.findIndex(s => s.step === this.currentStep?.step);
      if (currentIndex >= 0 && currentIndex < this.steps.length - 1) {
        this.currentStep = this.steps[currentIndex + 1]; //  next step
      }
    }
  
    previousStep(): void {
      const currentIndex = this.steps.findIndex(s => s.step === this.currentStep?.step);
      if (currentIndex > 0) {
        this.currentStep = this.steps[currentIndex - 1]; //  previous step
      }
    }
  
    onSubmit() {
      if (confirm('Are you sure you want to submit?')) {
        alert('Form submitted successfully!');
      }
    }
  
    // Handle logout
    onLogout() {
      console.log('Logout button clicked'); 
  
      localStorage.clear();
      this.router.navigate(['/login/sales']);  
    }
  
    exportToExcel() {
      const data = [
        ['Step 1: Planned Quantity', 'Step 2: Plant Capacity', 'Step 3: BOM Preparation'],
        [
          `Fabric Category 1 Quantity: ${this.fabricCat1 ?? 0}`,
          `Capacity of Machine 1: ${this.machine1Cap ?? 0}`,
          `Raw Material 1 Quantity: ${this.rawMaterial1 ?? 0}`
        ],
        [
          `Fabric Category 2 Quantity: ${this.fabricCat2 ?? 0}`,
          `Occupancy of Machine 1: ${this.machine1Occ ?? 0}`,
          `Raw Material 2 Quantity: ${this.rawMaterial2 ?? 0}`
        ],
        [], // Empty row for visual separation
        ['Step 4: Substandard Fabric', 'Step 5: Fuel & Power', 'Step 6: Packaging Cost'],
        [
          `Substandard Fabric Produced at Stage 1: ${this.subFabric1 ?? 0} Kg`,
          `Fuel Requirement of Machine 1: ${this.fuelReq1 ?? 0} Liters`,
          `Packaging Cost for Product 1: ${this.packagingCost1 ?? 0}`
        ],
        [
          `Substandard Fabric Produced at Stage 2: ${this.subFabric2 ?? 0} Kg`,
          `Power Requirement of Machine 1: ${this.powerReq1 ?? 0} Kwh`,
          `Packaging Cost for Product 2: ${this.packagingCost2 ?? 0}`
        ],
        [], // Empty row for visual separation
        ['Step 7: Commission Charges', 'Step 8: Processing Charges', 'Step 9: Salaries Overhead'],
        [
          `Commission Charges for Product 1: ${this.commission1 ?? 0}`,
          `Processing Charges for Product 1: ${this.contractual1 ?? 0}`,
          `Employees Overhead for Product 1: ${this.employees1 ?? 0}`
        ],
        [
          `Commission Charges for Product 2: ${this.commission2 ?? 0}`,
          `Processing Charges for Product 2: ${this.contractual2 ?? 0}`,
          `Employees Overhead for Product 2: ${this.employees2 ?? 0}`
        ],
        // Additional summary
        ['Budget Summary', ''],
        [
          `Total Fabric Produced: ${(this.fabricCat1 ?? 0) + (this.fabricCat2 ?? 0)} Kg`,
          `Total Fuel Requirement: ${(this.fuelReq1 ?? 0) + (this.powerReq1 ?? 0)} Liters/Kwh`,
          `Total Packaging Cost: ${(this.packagingCost1 ?? 0) + (this.packagingCost2 ?? 0)}`
        ]
      ];

      const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Poc Data');
      XLSX.writeFile(wb, 'poc_data.xlsx');
    }
  }