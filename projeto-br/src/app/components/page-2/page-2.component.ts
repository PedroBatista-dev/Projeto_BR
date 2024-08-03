import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-2',
  standalone: true,
  imports: [],
  templateUrl: './page-2.component.html',
  styleUrl: './page-2.component.css'
})
export class Page2Component {
  constructor(private router: Router) {}

  iniciarQuiz() {
    this.router.navigate(['/page-3']); 
  }
}
