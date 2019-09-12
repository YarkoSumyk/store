import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/product.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly productsService: ProductsService) {}

  products: IProduct[] = [];
  ngOnInit() {
    this.products = this.productsService.products;
  }

  addToCart = (product: IProduct) => {
    this.productsService.addProductToCart(product);
    this.products = this.productsService.products;
  };
}
