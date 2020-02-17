import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public instrucao: string = 'Traduza a frase:'
  public frases: Frase[] = FRASES
  public resposta: string

  atualizaResposta(texto: Event): void {
    this.resposta = (<HTMLInputElement>texto.target).value
  }

  comparaResposta(): void {
    console.log(`Resposta: ${this.resposta}`)
  }

}
