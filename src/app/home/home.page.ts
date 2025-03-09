import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  //Definindo Alerty
  alertButtons = ['OK'];

  //Exercicio 1 - Definindo valores

  valorCompra = 0;
  desconto = '';
  descontoEscolhido = '';


  constructor() { }

  //Função para Desconto - Exercicio 1
  calculoDesconto() {
    //Variaveis para Desconto - Exercicio 1
    let valorDesconto = 0;
    let valorFinal = 0;

    //Credito Vista - Exercicio 1
    if (this.desconto === 'creditoVista') {
      valorDesconto = (this.valorCompra * 5) / 100;
      valorFinal = this.valorCompra - valorDesconto;
      this.descontoEscolhido = `Desconto de R$${valorDesconto} aplicado, Valor Final: R$${valorFinal}`

      //Credito Prazo - Exercicio 1
    } else if (this.desconto === 'creditoPrazo') {
      this.descontoEscolhido = `Nenhum desconto aplicado, Valor Final: R$${valorFinal}`

      //Pix - Exercicio 1
    } else if (this.desconto === 'pix') {
      valorDesconto = (this.valorCompra * 15) / 100;
      valorFinal = this.valorCompra - valorDesconto;
      this.descontoEscolhido = `Desconto de R$${valorDesconto} aplicado, Valor Final: R$${valorFinal}`
    }
  }

  //Calculo IMC - Exercicio 2

    altura = 0;
    peso = 0;
    pesoEscolhido = ''
    imc = 0;
    resultadoIMC = '';
}
