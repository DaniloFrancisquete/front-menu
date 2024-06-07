import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
// import { EmpresaService } from '../services/empresa.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { EmpresaFormDialogComponent } from '../../empresa-form-dialog/empresa-form-dialog.component';
import { EmpresaService } from '../../services/empresa.service';
// import { EmpresaFormDialogComponent } from '../empresa-form-dialog/empresa-form-dialog.component';

@Component({
  selector: 'app-empresa-management',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    EmpresaFormDialogComponent,
  ],
  templateUrl: './empresa-management.component.html',
  styleUrls: ['./empresa-management.component.scss'],
  providers: [EmpresaService],
})
export class EmpresaManagementComponent {
  displayedColumns: string[] = ['id', 'nome', 'ativa', 'actions'];
  empresas: any[] = [];

  constructor(
    private empresaService: EmpresaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.loadEmpresas();
  }

  loadEmpresas() {
    this.empresaService.getEmpresas().subscribe((data) => {
      this.empresas = data;
    });
  }

  openFormDialog(empresa?: any) {
    const dialogRef = this.dialog.open(EmpresaFormDialogComponent, {
      width: '400px',
      data: empresa ? empresa : {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadEmpresas();
        this.snackBar.open('Empresa salva com sucesso!', 'Fechar', {
          duration: 3000,
        });
      }
    });
  }

  deleteEmpresa(id: number) {
    this.empresaService.deleteEmpresa(id).subscribe(() => {
      this.loadEmpresas();
      this.snackBar.open('Empresa deletada com sucesso!', 'Fechar', {
        duration: 3000,
      });
    });
  }
}
