import { Routes } from '@angular/router';
import { CheckoutComponent } from '../nav-bar/checkout/checkout.component';
import { NavCarinhoComponent } from '../nav-bar/nav-carinho/nav-carinho.component';

export const routes: Routes = [
    { path: '', title:'Home', component: NavCarinhoComponent },
    { path: 'Checkout',title:"Checkout", component: CheckoutComponent },

];
