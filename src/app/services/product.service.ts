import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/productsByCategory';

  constructor(private http: HttpClient) {}

  async getProducts(): Promise<any> {
    return firstValueFrom(this.http.get(this.apiUrl));
  }

  async updateProduct(id: number, product: any): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return firstValueFrom(this.http.put(url, product));
  }

  async createProduct(product: any): Promise<any> {
    return firstValueFrom(this.http.post(this.apiUrl, product));
  }

  async deleteProduct(id: number): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return firstValueFrom(this.http.delete(url));
  }
}
