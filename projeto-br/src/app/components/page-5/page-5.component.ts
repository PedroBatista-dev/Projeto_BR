import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-5',
  standalone: true,
  imports: [],
  templateUrl: './page-5.component.html',
  styleUrl: './page-5.component.css'
})
export class Page5Component {
  constructor(private router: Router) {}

  iniciarQuiz() {
    this.router.navigate(['/page-3']); 
  }
}
