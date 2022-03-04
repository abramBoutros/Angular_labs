import { Component, OnInit, Input } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() productData: any;

  counter: any;
  productsArr: any;

  exist: any;
  nExist: any;
  newArr: any = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.exist = this.productData.rating.count > 0 ? 'block' : 'none';
    this.nExist = this.productData.rating.count > 0 ? 'none' : 'block';
    this.productService
      .getCounterValue()
      .subscribe((val) => (this.counter = val));
    this.productService
      .getCartProducts()
      .subscribe((val) => (this.productsArr = val));
  }

  increaseCounter(obj: any) {
    this.productService.setCounterValue(++this.counter);
    // this.newArr = this.productsArr.push(obj);
    this.productService.setCartProducts(obj);
    this.productService.addToCart(obj);
  }
}
