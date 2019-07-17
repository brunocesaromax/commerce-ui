import { AppComponent } from './app.component';
import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'client', component: ClientsComponent},
    {path: 'product', component: ProductComponent},
    {path: 'sale', component: SaleComponent}
];

/* Definição e configuração das rotas */
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);