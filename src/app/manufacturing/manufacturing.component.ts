import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.css'
})
export class ManufacturingComponent {

  selectedStep: number = 2;

  machine1Cap: number | null = null;
  machine1Occ: number | null = null;
  fuelReq1: number | null = null;
  powerReq1: number | null = null;
  employees1: number | null = null;
  employees2: number | null = null;

  http = inject(HttpClient)

  constructor(private dataService: DataService, private router: Router) {}

  // Method for logout
  logout() {
    this.router.navigate(['/login']);
  }

  // Method to save Plant Capacity (Step 2)
  savePlantCapacity() {
    const data = {
      machine1Cap: this.machine1Cap,
      machine1Occ: this.machine1Occ,
    };



    this.dataService.savePlantCapacity(data).subscribe(
      response => {
        alert("Saved Plant Capacity: Machine1Cap = " + this.machine1Cap + ", Machine1Occ = " + this.machine1Occ);
        console.log('Plant Capacity saved:', response);
        this.resetPlantCapacity();
      },
      error => {
        alert('Error saving Plant Capacity');

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

    this.dataService.saveFuelPower(data).subscribe(
      response => {
        alert("Saved Fuel & Power: FuelReq1 = " + this.fuelReq1 + ", PowerReq1 = " + this.powerReq1);

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

    this.dataService.saveSalariesOverhead(data).subscribe(
      response => {
        alert("Saved Salaries & Overhead: Employees dept1 = " + this.employees1 + ", Employees dept2 = " + this.employees2);

        console.log('Salaries & Overhead saved:', response);
        this.resetSalariesOverhead();
      },
      error => {
        console.error('Error saving Salaries & Overhead:', error);
      }
    );
  }

  // Reset functions
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

  // Method for selecting steps
  selectStep(step: number) {
    this.selectedStep = step;
  }
}