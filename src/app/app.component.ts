import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModalPedidoComponent } from './shared/modal-pedido/modal-pedido.component';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    HomeComponent,
    ModalPedidoComponent,
    CommonModule,
    RouterLink,
  ],
})
export class AppComponent {
  title = 'front-menu';
}
