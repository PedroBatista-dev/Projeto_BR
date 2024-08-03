import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-7',
  standalone: true,
  imports: [],
  templateUrl: './page-7.component.html',
  styleUrl: './page-7.component.css'
})
export class Page7Component {
  constructor(private router: Router) {}

  iniciarQuiz() {
    this.router.navigate(['/page-1']); 
  }
}
