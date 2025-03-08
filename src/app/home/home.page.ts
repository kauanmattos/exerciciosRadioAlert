import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  valorCompra = 0;
  desconto = '';
  descontoEscolhido = '';
  alertButtons = ['OK'];

  constructor() { }

  calculoDesconto() {

    let valorDesconto = 0;
    let valorFinal = 0;

    //Credito Vista
    if (this.desconto === 'creditoVista') {
      valorDesconto = this.valorCompra * 0.05;
      valorFinal = this.valorCompra - valorDesconto;
      this.descontoEscolhido = `Desconto de R$${valorDesconto} aplicado, Valor final: R$${valorFinal}`

    //Credito Prazo
    } else if (this.desconto === 'creditoPrazo') {
      this.descontoEscolhido = `Nenhum desconto aplicado, Valor Final: R$${valorFinal}`

    //PIX
    } else if (this.desconto === 'pix') {
      valorDesconto = this.valorCompra * 0.15;
      valorFinal = this.valorCompra - valorDesconto;
      this.descontoEscolhido = `Desconto de R$${valorDesconto} aplicado, Valor Final: R$${valorFinal}`
    }
  }
}
