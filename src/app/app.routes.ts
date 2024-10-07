import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'purchase', component: PurchaseComponent },
    { path: 'manufacturing', component: ManufacturingComponent },
    { path: 'manager', component: ManagerComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
    { path: '**', redirectTo: '/login' }

];

