import { Component, Inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ModalPedidoComponent } from '../../app/modal-pedido/modal-pedido.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-carinho',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule,MatDialogTitle, MatDialogContent, RouterLink, CommonModule, RouterOutlet],
  templateUrl: './nav-carinho.component.html',
  styleUrl: './nav-carinho.component.scss'
})
export class NavCarinhoComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalPedidoComponent, {
      
    });
  }
}

