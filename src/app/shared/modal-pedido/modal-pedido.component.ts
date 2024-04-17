import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pedido',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent,CommonModule,],
  templateUrl: './modal-pedido.component.html',
  styleUrl: './modal-pedido.component.scss'
})
export class ModalPedidoComponent {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
  }

  
  getSelectedProductImg(): string {
    return this.data.selectedProduct.img;
  }
}
