import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-6.component.html',
  styleUrl: './page-6.component.css'
})
export class Page6Component implements OnInit{
  
  rotation: string = 'rotate(0deg)';
  isGiring: boolean = false;

  premios: any[] = [];

  constructor(private router: Router,  private http: HttpClient) {}

  ngOnInit() {
    this.carregarPremios(); // Carrega os prêmios ao inicializar
  }

  carregarPremios() {
    this.http.get('http://localhost:3000/premios').subscribe({
      next: (data: any) => {
        console.log(data);
        this.premios = data; 
      },
      error: (erro) => {
        console.error('Erro ao carregar os prêmios:', erro);
      }
    });
  }

  girar() {
    if (!this.isGiring) {
      const randomDeg = Math.floor(Math.random() * 360) + 720; // +720 para garantir que gire várias vezes
      const premioSelecionado = this.selecionarPremio(randomDeg); // Passa o ângulo final
      if (premioSelecionado) {
        console.log(this.premios)
        this.http.post('http://localhost:3000/premios', this.premios).subscribe({
          next: (value: any) => {
            this.rotation = `rotate(${randomDeg}deg)`;
            this.isGiring = true; // Desabilita o botão

            // Após 4 segundos (duração do giro), redirecionar e habilitar a lógica de espera
            setTimeout(() => {
              this.redirecionar();
            }, 4000);
          },
          error: (erro) => {
            console.error(erro);
          }
        })
      } else {
        this.girar();
      }
    }
  }

  selecionarPremio(anguloFinal: number) {
    // Normalize the angle to [0, 360)
    const normalizedAngle = anguloFinal % 360;
    console.log(normalizedAngle)

    for (const premio of this.premios) {
      if (normalizedAngle >= premio.anguloI && normalizedAngle <= premio.anguloF) {
        // Verifica se o prêmio pode ser sorteado
        if (premio.sorteios < premio.limite) {
          premio.sorteios++; // Incrementa o contador de sorteios
          return premio;
        }
      }
    }
    return null; // Se o prêmio não pode ser sorteado, retorna nulo
  }

  redirecionar() {
    // Espera mais 7 segundos antes de redirecionar
    setTimeout(() => {
      this.router.navigate(['/page-7']); // Troque 'outra-pagina' pelo caminho desejado
    }, 3000); // Total de 7 segundos após o giro
  }
}
