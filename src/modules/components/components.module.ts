import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from 'src/components/common/product-item/product-item.component';
import { TestComponent } from 'src/components/common/test-component/test-component';

@NgModule({
  declarations: [ProductItemComponent, TestComponent],
  imports: [CommonModule],
  exports: [ProductItemComponent, TestComponent],
  providers: [],
})
export class ComponentsModule {}
