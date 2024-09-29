import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';

  private credentials: {
    [key: string]: { id: string; password: string, allowedSteps: number[] }
  } = {
    sales: { id: 'sales', password: 'sales', allowedSteps: [7, 6] }, // Commission Charges, Packaging Cost
    purchase: { id: 'purchase', password: 'purchase', allowedSteps: [1, 3, 4, 8] }, // Planned Quantity, BOM Preparation, Substandard Fabric, Processing Charges
    manufacturing: { id: 'manufacturing', password: 'manufacturing', allowedSteps: [2, 5, 9] }, // Plant Capacity, Fuel & Power, Salaries Overhead
    manager: { id: 'manager', password: 'manager', allowedSteps: [10] } // Budget Summary
  };
selectedRole: any;

  constructor(private router: Router) {}

  login(loginType: 'sales' | 'purchase' | 'manufacturing' | 'manager') {
    const userCredentials = this.credentials[loginType];
    if (this.username === userCredentials.id && this.password === userCredentials.password) {
      localStorage.setItem('allowedSteps', JSON.stringify(userCredentials.allowedSteps));
      this.router.navigate(['/steps']);
    } else {
      this.loginMessage = `Invalid credentials for ${loginType}`;
    }
  }
}
