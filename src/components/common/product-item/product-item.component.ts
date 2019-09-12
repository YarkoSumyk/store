import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/interfaces/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() item: IProduct;
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addToCartHandler = () => {
    this.addToCart.emit(this.item);
  }
}
