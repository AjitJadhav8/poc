import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PocStepsComponent } from './poc-steps/poc-steps.component';

export const routes: Routes = [

    { path: 'login/sales', component: LoginComponent },
    { path: 'login/purchase', component: LoginComponent },
    { path: 'login/manufacturing', component: LoginComponent },
    { path: 'steps', component: PocStepsComponent }, 
    { path: '', redirectTo: '/login/sales', pathMatch: 'full' },
    { path: '**', redirectTo: '/login/sales' } 
];

