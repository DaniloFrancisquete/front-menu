// empresa-endereco-management.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { EmpresaService } from '../../services/empresa.service';
import { EmpresaEnderecoService } from '../../services/empresa-endereco.service';

@Component({
  selector: 'app-empresa-endereco-management',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './empresa-endereco-management.component.html',
  styleUrls: ['./empresa-endereco-management.component.scss'],
  providers: [EmpresaEnderecoService, EmpresaService],
})
export class EmpresaEnderecoManagementComponent implements OnInit {
  empresaId: number = 0;
  empresa: any;
  enderecos: any[] = [];

  displayedColumns: string[] = [
    'id',
    'rua',
    'numero',
    'bairro',
    'cidade',
    'estado',
    'cep',
    'actions',
  ];

  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private enderecoService: EmpresaEnderecoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.empresaId = +params['id'];
      this.loadEmpresa();
      this.loadEnderecos();
    });
  }

  loadEmpresa(): void {
    this.empresaService.getEmpresa(this.empresaId).subscribe((data) => {
      console.log('Empresa data:', data);
      this.empresa = data;
    });
  }

  loadEnderecos(): void {
    this.enderecoService.getEnderecos(this.empresaId).subscribe((data) => {
      console.log('Endereços data:', data);
      this.enderecos = data;
    });
  }

  openEnderecoFormDialog(endereco?: any): void {
    // Implementação do diálogo de formulário de endereço
    // const dialogRef = this.dialog.open(EnderecoFormDialogComponent, {
    //   width: '250px',
    //   data: endereco ? { ...endereco } : {},
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     if (result.id) {
    //       this.updateEndereco(result.id, result);
    //     } else {
    //       this.addEndereco(result);
    //     }
    //   }
    // });
  }

  addEndereco(endereco: any): void {
    this.enderecoService.addEndereco(endereco).subscribe(() => {
      this.loadEnderecos();
      this.snackBar.open('Endereço adicionado com sucesso!', 'Fechar', {
        duration: 3000,
      });
    });
  }

  updateEndereco(id: number, endereco: any): void {
    this.enderecoService.updateEndereco(id, endereco).subscribe(() => {
      this.loadEnderecos();
      this.snackBar.open('Endereço atualizado com sucesso!', 'Fechar', {
        duration: 3000,
      });
    });
  }

  deleteEndereco(id: number): void {
    this.enderecoService.deleteEndereco(id).subscribe(() => {
      this.loadEnderecos();
      this.snackBar.open('Endereço deletado com sucesso!', 'Fechar', {
        duration: 3000,
      });
    });
  }
}
