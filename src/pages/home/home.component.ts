import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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
import {CartService} from '../../app/services/cart.service'
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

interface CartItem {
  productId: number;
  title: string;
  description: string;
  size?: string;
  option?: string;
  price: number;
  quantity: number;
}

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
  providers: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer: MatDrawer | undefined;
  
  company: any;
  productsByCategory: any;

  categoriesTitle: { id: number, name: string}[] = [];
  selectedCategoryIndex: number = -1;
  
  cartItemCount: number = 0;
  cartItems: CartItem[] = []; 

  itemProduct = { value: 1234.56 };
  transformedValue:  string = '';
  
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
    public cartService: CartService,
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) {
    this.drawer = undefined;
    const transformedValue = this.currencyPipe.transform(this.itemProduct.value, 'BRL', 'symbol', '1.2-2', 'pt-BR') ?? '';
  }

 
  

  async ngOnInit() {
    await this.getCompanyInfo();
    await this.getProductInfo();
    this.updateCart();
  }

  navigateToHome(): void {
    this.router.navigate(['/']); // Navega de volta para a página inicial
    if (this.drawer) {
      this.drawer.close(); // Fecha o navbar apenas se drawer for definido
    }
  }

  updateCart() {
    this.cartItems = this.cartService.getItems();
    console.log('Cart Items:', this.cartItems); // Log the cart items
    this.cartItemCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart() {
    this.cartService.clearCart();
    this.updateCart();
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
        this.cartService.addToCart({
          productId: selectedProduct.id,
          title: selectedProduct.title,
          description: selectedProduct.description,
          price: selectedProduct.price,
          quantity: result.quantity,
        });
        this.updateCart();
      }
      console.log('O modal foi fechado', result);
    });
  
    
   
     dialogRef.afterClosed().subscribe(result => {
       console.log('O modal foi fechado', result);
     });
   }
 }
}

getCartItems(): CartItem[] {
  return this.cartService.getItems();
}

// Public method to get cart item count for the template
getCartItemCount(): number {
  return this.cartItemCount;
}

// Public method to calculate the total price of items in the cart
getCartTotal(): number {
  return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}
}
