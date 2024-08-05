import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Question {
  question: string;
  options: string[];
  answer: number; // índice da resposta correta
}

@Component({
  selector: 'app-page-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-3.component.html',
  styleUrl: './page-3.component.css'
})
export class Page3Component {

  questions: Question[] = [
    {
      question: 'Qual o aeroporto brasileiro com maior número anual de embarques e desembarques de passageiros?',
      options: ['Aeroporto Internacional de Brasília', 'Aeroporto de São Paulo - Congonhas', 'Aeroporto Internacional de Guarulhos', 'Aeroporto Internacional de Viracopos'],
      answer: 2 // Indice da resposta correta
    },
    {
      question: 'Qual foi o primeiro avião fabricado pela Embraer?',
      options: ['EMB 120 Brasília', 'EMB 110 Bandeirante', 'EMB 312 Tucano', 'ERJ 145'],
      answer: 1
    },
    {
      question: 'Em que ano ocorreu o primeiro voo do 14-Bis, considerado o primeiro voo de um avião mais pesado que o ar sem ajuda externa?',
      options: ['1906', '1910', '1903', '1909'],
      answer: 0
    },
    {
      question: 'Quem foi o primeiro homem a realizar um voo no Brasil?',
      options: ['Santos Dumont', 'Edu Chaves', 'Bartolomeu de Gusmão', 'Dimitri Sensaud de Lavaud'],
      answer: 3
    },
    {
      question: 'Quantas aeronaves (incluindo as experimentais) tem condição de aeronavegabilidade normal no Brasil?',
      options: ['Cerca de 5.000 aeronaves', 'Cerca de 7.000 aeronaves', 'Cerca de 15.000 aeronaves', 'Cerca de 20.000 aeronaves'],
      answer: 2
    },
    {
      question: 'BR Aviation está presente em quantos aeroportos no Brasil?',
      options: ['Mais de 20 aeroportos', 'Mais de 80 aeroportos', 'Mais de 60 aeroportos', 'Mais de 40 aeroportos'],
      answer: 1
    },
    {
      question: 'Qual dos prêmios abaixo está disponível para troca por pontos no BR Aviation Club?  ',
      options: ['Ingressos para corridas da Stock Car', 'Ingressos para shows no Vibra São Paulo', 'Smartwatch', 'Todas as alternativas anteriores'],
      answer: 3
    },
    {
      question: 'O que é o Beyond EFB?',
      options: ['Um aplicativo de previsão com informações meteorológicas para pilotos.', 'Uma solução onde se pode planejar voos.', 'Uma solução para navegação aérea em tempo real.', 'Todas as opções acima.'],
      answer: 3
    },
    {
      question: 'Quais são algumas das funcionalidades oferecidas pelo Beyond EFB?',
      options: ['Controle de tráfego aéreo.', 'Entretenimento a bordo.', 'Planejamento de rotas e consumo de combustível.', 'Previsão de marés.'],
      answer: 2
    },
    {
      question: 'Quem pode utilizar o Beyond EFB?',
      options: ['Apenas pilotos de helicópteros.', 'Qualquer pessoa com interesse em aviação.', 'Pilotos e operadores de aeronaves de todas as categorias.', 'Apenas passageiros de voos comerciais.'],
      answer: 2
    },
  ];

  currentQuestionIndex: number = 0;
  selectedAnswer: number | null = null;
  score: number = 0;
  imageNumber: string = `assets/q${this.currentQuestionIndex+1}.png`;

  constructor(private router: Router) {}

  selectAnswer(index: number) {
    this.selectedAnswer = index;
  }

  confirmAnswer() {
    if (this.selectedAnswer === null) return;

    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    this.currentQuestionIndex++;
    this.imageNumber = `assets/q${this.currentQuestionIndex+1}.png`;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.endQuiz();
    } else {
      this.selectedAnswer = null; // Reset para a próxima pergunta
    }
  }

  endQuiz() {
    if (this.score >= 7) {
      this.router.navigate(['/page-4']); // Redireciona se acertou 7 ou mais
    } else {
      this.router.navigate(['/page-5']); // Redireciona se acertou menos de 7
    }
  }

  getOptionLabel(index: number): string {
    const labels = ['A', 'B', 'C', 'D'];
    return labels[index] ? labels[index] : '';
  }
}
