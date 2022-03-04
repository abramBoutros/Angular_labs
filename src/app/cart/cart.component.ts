import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  counter: any;

  productsArr: any;

  exist: any;
  nExist: any;
  newArr: any = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getCounterValue()
      .subscribe((val) => (this.counter = val));
    this.productService
      .getCartProducts()
      .subscribe((val) => (this.productsArr = val));
  }

  decreaseCounter() {
    if (this.counter <= 0) return;
    this.productService.setCounterValue(--this.counter);
  }
  increaseCounter() {
    this.productService.setCounterValue(++this.counter);
  }
}
