import { Routes } from '@angular/router';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { HomeComponent } from '../pages/home/home.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';
import { EmpresaManagementComponent } from '../pages/empresa-management/empresa-management.component';
import { EmpresaEnderecoManagementComponent } from '../pages/empresa-endereco-management/empresa-endereco-management.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'Checkout', title: 'Checkout', component: CheckoutComponent },
  { path: 'Cadastro', title: 'Cadastro', component: CadastroComponent },
  { path: 'Empresa', title: 'Empresa', component: EmpresaManagementComponent },
  {
    path: 'Empresa/:id/Enderecos',
    title: 'Empresa Endereço',
    component: EmpresaEnderecoManagementComponent,
  },
];
