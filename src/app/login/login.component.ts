import { TitleCasePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,TitleCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  // Login method
  login() {
    const credentials = { username: this.username, password: this.password };

    this.dataService.login(credentials).subscribe(
      response => {
        console.log('Response from backend:', response);
        
        switch (response.username) {
          case 'sales':
            this.router.navigate(['/sales']);
            break;
          case 'purchase':
            this.router.navigate(['/purchase']);
            break;
          case 'manufacturing':
            this.router.navigate(['/manufacturing']);
            break;
          case 'manager':
            this.router.navigate(['/manager']);
            break;
          default:
            alert('Unauthorized role');
            break;
        }
      },
      error => {
        alert(error.error?.error || 'Login failed');
      }
    );
  }
}


//   username: string = ''; 
//   password: string = '';  
//   private hardcodedCredentials = {
//     user: 'user',
//     password: 'user'
//   };
//   constructor(private router: Router) {}
//   login() {
//     if (this.password === this.hardcodedCredentials.password) {
//       this.router.navigate([`/${this.username}`]);
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   }
// }