import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  selectedStep: number = 6;

  packagingCost1: number | null = null;
  packagingCost2: number | null = null;
  commission1: number | null = null;
  commission2: number | null = null;

  http = inject(HttpClient);

  constructor(private dataService: DataService, private router: Router ) {}

  // Method to save Packaging Cost
  savePackagingCost() {
    const data = {
      packagingCost1: this.packagingCost1,
      packagingCost2: this.packagingCost2,
    };

    this.dataService.savePackagingCost(data).subscribe(
      response => {
        console.log('Packaging Cost saved:', response);
        this.resetPackagingCost();
      },
      error => {
        console.error('Error saving Packaging Cost:', error);
      }
    );
  }

  // Method to save Commission Charges
  saveCommissionCharges() {
    const data = {
      commission1: this.commission1,
      commission2: this.commission2,
    };

    this.dataService.saveCommissionCharges(data).subscribe(
      response => {
        console.log('Commission Charges saved:', response);
        this.resetCommissionCharges();
      },
      error => {
        console.error('Error saving Commission Charges:', error);
      }
    );
  }

  // Reset Packaging Cost fields
  resetPackagingCost() {
    this.packagingCost1 = null;
    this.packagingCost2 = null;
  }

  // Reset Commission Charges fields
  resetCommissionCharges() {
    this.commission1 = null;
    this.commission2 = null;
  }

  // Method to select steps
  selectStep(step: number) {
    this.selectedStep = step;
  }

  // Method for logout
  logout() {
    // Clear any session or state management here if necessary
    this.router.navigate(['/login']);  // Navigate back to login page
  }
}