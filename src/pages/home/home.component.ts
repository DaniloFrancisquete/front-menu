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
import { title } from 'process';

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

  categoriesTitle: { id: number, name: string}[] = [];
  selectedCategoryIndex: number = -1;
  
  cartItemCount: number = 0;
  
  onCategoria(index: number): void {
   
  if (index >= 0 && index < this.categoriesTitle.length) {
    this.selectedCategoryIndex = index;
    const selectedCategoryId = this.categoriesTitle[index].id;
    const selectedCategory = this.productsByCategory.categories.find((category: { id: number }) => category.id === selectedCategoryId);
    if (selectedCategory) {
      const indexToRemove = this.productsByCategory.categories.indexOf(selectedCategory);
      if (indexToRemove !== -1) {
        this.productsByCategory.categories.splice(indexToRemove, 1);
      }
      this.productsByCategory.categories.unshift(selectedCategory);
    }
  }
  }


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

    //EXEMPLO COM FOR
    for (let index = 0; index < this.productsByCategory?.categories.length; index++) {
      this.categoriesTitle.push({
        id: this.productsByCategory?.categories[index].id,
        name: this.productsByCategory?.categories[index].name,
      });
    }


    // // EXEMPLO COM FOREACH
    // this.productsByCategory?.categories.forEach(element:{ id:number, name:string } => {
    //      this.categoriesTitle.push({
    //     id: element.id,
    //     name: element.name
    //   });
      
    // });
    console.log(this.categoriesTitle);
  }

  openDialog(categoryId:number,productId: number,):void {
 
 const selectedCategory = this.productsByCategory.categories.find((category: { id: number }) => category.id === categoryId);
  
 
 if (selectedCategory) {
 
   const selectedProduct = selectedCategory.products.find((product: { id: number }) => product.id === productId);

 
   if (selectedProduct) {
    
     const dialogRef = this.dialog.open(ModalPedidoComponent, {
       data: {
         selectedProduct: selectedProduct,
         selectedCategory:{
          id: selectedCategory.id,
            title: selectedCategory.title, 
            description: selectedCategory.description
            
         }
        }
     });

     
     dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cartItemCount += result.quantity;
      }
    });
  
    
   
     dialogRef.afterClosed().subscribe(result => {
       console.log('O modal foi fechado', result);
     });
   }
 }
 


}
}
