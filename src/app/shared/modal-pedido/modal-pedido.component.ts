import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle,MatDialogRef } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');



@Component({
  selector: 'app-modal-pedido',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent,CommonModule,],
  providers: [CurrencyPipe],
  templateUrl: './modal-pedido.component.html',
  styleUrl: './modal-pedido.component.scss'
})
export class ModalPedidoComponent {
  valorProduto: number = 0; // Valor do produto
  quantidade: number = 1; // Quantidade inicial
  total: number = 0;
  itemProduct = { value: 1234.56 };
  transformedValue:  string = '';

  constructor
  (@Inject(MAT_DIALOG_DATA) public data: any,
  private currencyPipe: CurrencyPipe,
  public dialogRef: MatDialogRef<ModalPedidoComponent>
  
) {
  const transformedValue = this.currencyPipe.transform(this.itemProduct.value, 'BRL', 'symbol', '1.2-2', 'pt-BR') ?? '';

        if (data.selectedProduct.options && data.selectedProduct.options.length > 0) {
      this.valorProduto = data.selectedProduct.options[0].price; // Supondo que a primeira opção seja o valor inicial
      this.adicionarValor();
    }
  }

  getSelectedProductImg(): string {
    return this.data.selectedProduct.img;
  }

  selecionarOption(option: any): void {
    this.valorProduto = option.price; 
    this.adicionarValor();
  }

  adicionarValor(): void {
    this.total = this.valorProduto * this.quantidade;
  }

  aumentarQuantidade(): void {
    this.quantidade++;
    this.adicionarValor();
  }

  diminuirQuantidade(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
      this.adicionarValor();
    }
  }

  adicionarValorAoPedido(): void {
    const totalFormatado = this.currencyPipe.transform(this.total, 'BRL', 'symbol', '1.2-2', 'pt-BR') ?? '';
    this.dialogRef.close({ quantity: this.quantidade, total: totalFormatado });
    console.log('Pedido adicionado! Total: ', totalFormatado);
  }

 
}
