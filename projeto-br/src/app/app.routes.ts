import { Routes } from '@angular/router';
import { Page1Component } from './components/page-1/page-1.component';
import { Page2Component } from './components/page-2/page-2.component';
import { Page3Component } from './components/page-3/page-3.component';
import { Page4Component } from './components/page-4/page-4.component';
import { Page5Component } from './components/page-5/page-5.component';

export const routes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' }, // Redireciona para page-1 quando a rota é vazia
  { path: 'page-1', component: Page1Component },
  { path: 'page-2', component: Page2Component },
  { path: 'page-3', component: Page3Component },
  { path: 'page-4', component: Page4Component },
  { path: 'page-5', component: Page5Component },
];
