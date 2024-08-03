import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-6.component.html',
  styleUrl: './page-6.component.css'
})
export class Page6Component {
  
  rotation: string = 'rotate(0deg)';
  isGiring: boolean = false;

  constructor(private router: Router) {}

  girar() {
    if (!this.isGiring) {
      const randomDeg = Math.floor(Math.random() * 360) + 720; // +720 para garantir que gire várias vezes
      this.rotation = `rotate(${randomDeg}deg)`;
      this.isGiring = true; // Desabilita o botão
  
      // Após 4 segundos (duração do giro), redirecionar e habilitar a lógica de espera
      setTimeout(() => {
        this.redirecionar(); // Chama a função para redirecionar após 7 segundos
      }, 4000);
    }
  }

  redirecionar() {
    // Espera mais 7 segundos antes de redirecionar
    setTimeout(() => {
      this.router.navigate(['/page-7']); // Troque 'outra-pagina' pelo caminho desejado
    }, 3000); // Total de 7 segundos após o giro
  }
}
