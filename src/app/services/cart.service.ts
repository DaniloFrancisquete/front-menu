import { Injectable } from '@angular/core';

interface CartItem {
  productId: number;
  title: string;
  description: string;
  size?: string;
  option?: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.productId !== productId);
  }
}
