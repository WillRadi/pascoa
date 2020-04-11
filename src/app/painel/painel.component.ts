import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Insira a senha encontrada:'
  public frases: Frase[] = FRASES
  public resposta: string
  public rodada: number = 0
  public rodadaFrase: Frase
  public progressoPainel: number = 0

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  atualizaResposta(texto: Event): void {
    this.resposta = (<HTMLInputElement>texto.target).value
  }

  comparaResposta(): void {
    if (this.resposta == this.rodadaFrase.frasePtBr) {
      this.rodada++
      this.progressoPainel = this.progressoPainel + (100 / this.frases.length)
      console.log(this.progressoPainel)
      this.atualizaRodada()
      alert('Boa! Um passo mais próxima do ovo!')
    } else {
      alert('Eroooou')
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
