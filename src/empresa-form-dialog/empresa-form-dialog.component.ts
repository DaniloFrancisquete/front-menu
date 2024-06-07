import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmpresaService } from '../services/empresa.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresa-form-dialog',
  standalone: true,
  templateUrl: './empresa-form-dialog.component.html',
  styleUrls: ['./empresa-form-dialog.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
})
export class EmpresaFormDialogComponent {
  empresaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EmpresaFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private empresaService: EmpresaService,
    private snackBar: MatSnackBar
  ) {
    this.empresaForm = this.fb.group({
      id: [data.id],
      nome: [data.nome, Validators.required],
      ativa: [data.ativa],
    });
  }

  onSave() {
    if (this.empresaForm.valid) {
      const empresa = this.empresaForm.value;
      if (empresa.id) {
        this.empresaService.updateEmpresa(empresa.id, empresa).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.empresaService.addEmpresa(empresa).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
