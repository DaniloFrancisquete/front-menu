import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pedido',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent,CommonModule,],
  templateUrl: './modal-pedido.component.html',
  styleUrl: './modal-pedido.component.scss'
})
export class ModalPedidoComponent {
  valorProduto: number = 0; // Valor do produto
  quantidade: number = 1; // Quantidade inicial
  total: number = 0;

  constructor
  (@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ModalPedidoComponent>
) {

    if (data.selectedProduct.options && data.selectedProduct.options.length > 0) {
      this.valorProduto = parseFloat(data.selectedProduct.value.replace('R$', '').replace('a partir de ', ''));
      this.adicionarValor();
    }
  }

  getSelectedProductImg(): string {
    return this.data.selectedProduct.img;
  }

  selecionarOption(option: any): void {
    const optionValue = parseFloat(option.valueml.replace('R$', '').replace(',', '.'));
    this.valorProduto += optionValue;
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
    this.dialogRef.close({ quantity: this.quantidade, total: this.total });
    console.log('Pedido adicionado! Total: R$', this.total.toFixed(2));
  }

 
}
