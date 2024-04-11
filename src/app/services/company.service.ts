import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/company';

  constructor(private http: HttpClient) {}

  async getCompany(): Promise<any> {
    return firstValueFrom(this.http.get(this.apiUrl));
  }

  async updateCompany(id: number, company: any): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return firstValueFrom(this.http.put(url, company));
  }

  async createCompany(company: any): Promise<any> {
    return firstValueFrom(this.http.post(this.apiUrl, company));
  }

  async deleteCompany(id: number): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return firstValueFrom(this.http.delete(url));
  }
}
