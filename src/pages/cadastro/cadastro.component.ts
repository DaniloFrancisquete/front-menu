import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.cadastroForm = this.fb.group({
      company: this.fb.group({
        name: ['', Validators.required],
        address: this.fb.group({
          street: [''],
          number: [''],
          neighborhood: [''],
          city: [''],
          state: [''],
          week: [''],
          time: [''],
          delivery: [''],
          order: [''],
          more: [''],
        }),
      }),
      productsByCategory: this.fb.group({
        categories: this.fb.array([]),
      }),
    });
  }

  get categories(): FormArray {
    return this.cadastroForm.get('productsByCategory.categories') as FormArray;
  }

  addCategory() {
    const category = this.fb.group({
      name: [''],
      products: this.fb.array([]),
    });
    this.categories.push(category);
  }

  addProduct(categoryIndex: number) {
    const products = this.categories
      .at(categoryIndex)
      .get('products') as FormArray;
    const product = this.fb.group({
      title: [''],
      description: [''],
      value: [''],
      img: [''],
    });
    products.push(product);
  }

  getProducts(categoryIndex: number): FormArray {
    return this.categories.at(categoryIndex).get('products') as FormArray;
  }

  onSubmit() {
    console.log(this.cadastroForm.value);
  }
}
