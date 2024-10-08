import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  http = inject(HttpClient);


  selectedStep: number = 1;

  fabricCat1: string = '';
  fabricCat2: string = '';
  subFabric1: string = '';
  subFabric2: string = '';
  rawMaterial1: string = '';
  rawMaterial2: string = '';
  contractual1: number | null = null;
  contractual2: number | null = null;

  

  constructor(private dataService: DataService, private router: Router) {}

  // Method for logout
  logout() {
    this.router.navigate(['/login']);
  }

  // Method to save Planned Quantity (Step 1)
  savePlannedQuantity() {
    const data = {
      fabricCat1: this.fabricCat1,
      fabricCat2: this.fabricCat2,
    };

    this.dataService.savePlannedQuantity(data).subscribe(
      response => {
        console.log('Planned Quantity saved:', response);
        this.resetPlannedQuantity();
      },
      error => {
        console.error('Error saving Planned Quantity:', error);
      }
    );
  }

  // Method to save Substandard Fabric (Step 4)
  saveSubstandardFabric() {
    const data = {
      subFabric1: this.subFabric1,
      subFabric2: this.subFabric2,
    };

    this.dataService.saveSubstandardFabric(data).subscribe(
      response => {
        console.log('Substandard Fabric saved:', response);
        this.resetSubstandardFabric();
      },
      error => {
        console.error('Error saving Substandard Fabric:', error);
      }
    );
  }

  // Method to save BOM Preparation (Step 3)
  saveBomPreparation() {
    const data = {
      rawMaterial1: this.rawMaterial1,
      rawMaterial2: this.rawMaterial2,
    };

    this.dataService.saveBomPreparation(data).subscribe(
      response => {
        console.log('BOM Preparation saved:', response);
        this.resetBomPreparation();
      },
      error => {
        console.error('Error saving BOM Preparation:', error);
      }
    );
  }

  // Method to save Processing Charges (Step 8)
  saveProcessingCharges() {
    const data = {
      contractual1: this.contractual1,
      contractual2: this.contractual2,
    };

    this.dataService.saveProcessingCharges(data).subscribe(
      response => {
        console.log('Processing Charges saved:', response);
        this.resetProcessingCharges();
      },
      error => {
        console.error('Error saving Processing Charges:', error);
      }
    );
  }

  // Reset functions
  resetPlannedQuantity() {
    this.fabricCat1 = '';
    this.fabricCat2 = '';
  }

  resetSubstandardFabric() {
    this.subFabric1 = '';
    this.subFabric2 = '';
  }

  resetBomPreparation() {
    this.rawMaterial1 = '';
    this.rawMaterial2 = '';
  }

  resetProcessingCharges() {
    this.contractual1 = null;
    this.contractual2 = null;
  }

  // Method for selecting steps
  selectStep(step: number) {
    this.selectedStep = step;
  }
}