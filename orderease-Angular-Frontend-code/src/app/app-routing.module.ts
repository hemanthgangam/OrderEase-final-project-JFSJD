import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';

const routes: Routes = [
  { path: 'item-list', component: ItemListComponent },
  { path: 'add-item', component: ItemCreateComponent },
  { path: 'customer-order', component: CustomerOrderComponent },
  { path: '', redirectTo: '/add-item', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







