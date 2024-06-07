// empresa-endereco.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresaEnderecoService {
  private apiUrl = 'http://localhost:3001/api/empresas-enderecos';

  constructor(private http: HttpClient) {}

  getEnderecos(empresaId: number): Observable<any[]> {
    console.log(`GET: ${this.apiUrl}?empresa_id=${empresaId}`);
    return this.http.get<any[]>(`${this.apiUrl}?empresa_id=${empresaId}`);
  }

  addEndereco(endereco: any): Observable<any> {
    console.log('POST:', this.apiUrl, endereco);
    return this.http.post<any>(this.apiUrl, endereco);
  }

  updateEndereco(id: number, endereco: any): Observable<any> {
    console.log(`PUT: ${this.apiUrl}/${id}`, endereco);
    return this.http.put<any>(`${this.apiUrl}/${id}`, endereco);
  }

  deleteEndereco(id: number): Observable<any> {
    console.log(`DELETE: ${this.apiUrl}/${id}`);
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
