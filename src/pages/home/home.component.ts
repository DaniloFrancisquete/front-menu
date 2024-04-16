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
import { ProductService } from '../../app/services/product.service';

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
  productsByCategory: any;

  constructor(
    private companyService: CompanyService,
    private productService: ProductService,
    public dialog: MatDialog,

  ) {}

  async ngOnInit() {
    await this.getCompanyInfo();
    await this.getProductInfo();
  }
  async getCompanyInfo() {
    this.company = await this.companyService.getCompany();
  }

  async getProductInfo() {
    this.productsByCategory = await this.productService.getProducts();
  
  }

  openDialog() {
    this.dialog.open(ModalPedidoComponent, {});
  }

 

  

 

}
