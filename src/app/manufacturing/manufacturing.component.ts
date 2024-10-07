import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.css'
})
export class ManufacturingComponent {

  selectedStep: number = 2; 

  selectStep(step: number) {
    this.selectedStep = step;
  }

  machine1Cap: number | null = null;
  machine1Occ: number | null = null;
  fuelReq1: number | null = null;
  powerReq1: number | null = null;
  employees1: number | null = null;
  employees2: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}
  logout() {
    this.router.navigate(['/login']);
  }

  // Method to save Plant Capacity (Step 2)
  savePlantCapacity() {
    const data = {
      machine1Cap: this.machine1Cap,
      machine1Occ: this.machine1Occ,
    };

    this.http.post('http://localhost:3000/save-plant-capacity', data).subscribe(
      response => {
        console.log('Plant Capacity saved:', response);
        this.resetPlantCapacity();
      },
      error => {
        console.error('Error saving Plant Capacity:', error);
      }
    );
  }

  // Method to save Fuel & Power (Step 5)
  saveFuelPower() {
    const data = {
      fuelReq1: this.fuelReq1,
      powerReq1: this.powerReq1,
    };

    this.http.post('http://localhost:3000/save-fuel-power', data).subscribe(
      response => {
        console.log('Fuel & Power saved:', response);
        this.resetFuelPower();
      },
      error => {
        console.error('Error saving Fuel & Power:', error);
      }
    );
  }

  // Method to save Salaries & Overhead (Step 9)
  saveSalariesOverhead() {
    const data = {
      employees1: this.employees1,
      employees2: this.employees2,
    };

    this.http.post('http://localhost:3000/save-salaries-overhead', data).subscribe(
      response => {
        console.log('Salaries & Overhead saved:', response);
        this.resetSalariesOverhead();
      },
      error => {
        console.error('Error saving Salaries & Overhead:', error);
      }
    );
  }

  resetPlantCapacity() {
    this.machine1Cap = null;
    this.machine1Occ = null;
  }

  resetFuelPower() {
    this.fuelReq1 = null;
    this.powerReq1 = null;
  }

  resetSalariesOverhead() {
    this.employees1 = null;
    this.employees2 = null;
  }
}