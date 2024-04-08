import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavCarinhoComponent } from '../nav-bar/nav-carinho/nav-carinho.component';
import { ModalPedidoComponent } from "./modal-pedido/modal-pedido.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatSidenavModule, NavCarinhoComponent, ModalPedidoComponent, CommonModule, RouterLink]
})
export class AppComponent {
  title = 'front-menu';
}
