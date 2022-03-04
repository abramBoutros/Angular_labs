import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  counter: any;

  ngOnInit(): void {
    this.productService
      .getCounterValue()
      .subscribe((val) => (this.counter = val));
  }

  increaseCounter() {
    this.productService.setCounterValue(++this.counter);
  }
  decreaseCounter() {
    if (this.counter <= 0) return;
    this.productService.setCounterValue(--this.counter);
  }
}
