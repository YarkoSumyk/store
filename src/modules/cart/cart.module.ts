import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from 'src/pages/cart/cart.component';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Route[] = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CartModule {}
