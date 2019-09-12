import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/pages/products/products.component';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: []
})
export class ProductsModule {}
