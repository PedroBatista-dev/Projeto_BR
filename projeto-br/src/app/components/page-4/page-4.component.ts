import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-4',
  standalone: true,
  imports: [],
  templateUrl: './page-4.component.html',
  styleUrl: './page-4.component.css'
})
export class Page4Component {
  constructor(private router: Router) {}

  iniciarQuiz() {
    this.router.navigate(['/page-3']); 
  }
}
