import { Component, Inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CompanyService } from '../../app/services/company.service';
import { ModalPedidoComponent } from '../../app/shared/modal-pedido/modal-pedido.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    RouterLink,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  company: any;

  constructor(
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    await this.getCompanyInfo();
  }
  async getCompanyInfo() {
    this.company = await this.companyService.getCompany();
  }

  openDialog() {
    this.dialog.open(ModalPedidoComponent, {});
  }
}
