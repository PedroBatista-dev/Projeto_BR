import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [],
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.css'
})
export class Page1Component {

  constructor(private router: Router) {}

  iniciarQuiz() {
    this.router.navigate(['/page-2']); 
  }

}
