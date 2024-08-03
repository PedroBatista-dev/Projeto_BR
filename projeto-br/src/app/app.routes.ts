import { Routes } from '@angular/router';
import { Page1Component } from './components/page-1/page-1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' }, // Redireciona para page-1 quando a rota é vazia
  { path: 'page-1', component: Page1Component },
];
