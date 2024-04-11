import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pedido',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './modal-pedido.component.html',
  styleUrl: './modal-pedido.component.scss'
})
export class ModalPedidoComponent {

}
