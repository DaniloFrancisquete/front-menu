import { Routes } from '@angular/router';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { HomeComponent } from '../pages/home/home.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'Checkout', title: 'Checkout', component: CheckoutComponent },
  { path: 'Cadastro', title: 'Cadastro', component: CadastroComponent },
];
