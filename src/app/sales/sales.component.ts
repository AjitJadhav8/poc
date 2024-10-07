import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  selectedStep: number = 6; // Default to Step 6

  selectStep(step: number) {
    this.selectedStep = step;
  }

  packagingCost1: number | null = null;
  packagingCost2: number | null = null;
  commission1: number | null = null;
  commission2: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  // Method to save Packaging Cost
  savePackagingCost() {
    const data = {
      packagingCost1: this.packagingCost1,
      packagingCost2: this.packagingCost2,
    };
  
    // Change this to point to your backend server
    this.http.post('http://localhost:3000/save-packaging-cost', data).subscribe(
      response => {
        console.log('Packaging Cost saved:', response);
        this.resetPackagingCost();
      },
      error => {
        console.error('Error saving Packaging Cost:', error);
      }
    );
  }
  
  saveCommissionCharges() {
    const data = {
      commission1: this.commission1,
      commission2: this.commission2,
    };
  
    // Change this to point to your backend server
    this.http.post('http://localhost:3000/save-commission-charges', data).subscribe(
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
  logout() {
    // Clear any session or state management here if necessary
    this.router.navigate(['/login']);  // Navigate back to login page
  }
}