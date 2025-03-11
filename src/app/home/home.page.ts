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

  faixaPeso: string = '';
  altura: number = 0;
  imc: number = 0;
  classificacao: string = '';

calcularIMC(){

  let peso: number = 0;
  switch (this.faixaPeso) {
    case 'abaixo50':
      peso = 49;
      break;
      case '50a70':
        peso = 60;
        break;
        case '70a90':
          peso = 80;
          break;
          case 'acima90':
            peso = 95;
            break;
  }
  this.imc = peso / (this.altura*this.altura);

  if (this.imc < 18.5){
    this.classificacao = 'Abaixo do peso';
  } else if (this.imc >= 18.5 && this.imc <= 24.9){
    this.classificacao = 'Peso saudável';
  } else if (this.imc >= 25 && this.imc <= 29.9){
    this.classificacao = 'Sobrepeso';
  } else {
    this.classificacao = 'Obesidade'
  }
}

// Calculo Juros Compostos

tempoAplicacao: string = '';
taxaJuros: number = 0;
valorInicial: number = 0;
montanteFinal: number = 0;

calcularJurosCompostos() {
const taxaDecimal = this.taxaJuros / 100;
this.montanteFinal = this.valorInicial * Math.pow((1 + taxaDecimal), parseInt(this.tempoAplicacao));
}
}
