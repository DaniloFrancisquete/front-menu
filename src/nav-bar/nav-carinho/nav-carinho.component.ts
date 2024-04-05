import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-nav-carinho',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './nav-carinho.component.html',
  styleUrl: './nav-carinho.component.scss'
})
export class NavCarinhoComponent {
  showFiller = false;
}
