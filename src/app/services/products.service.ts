import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private cartCounter = new BehaviorSubject(0);
  cartArray: any = [];
  private cartProducts = new BehaviorSubject({});

  addToCart(obj: any) {
    this.cartArray.push(obj);
  }

  removeFromCart(id: any) {
    this.cartArray.filter((item: any) => item.id !== id);
  }

  getCartArray() {
    return this.cartArray;
  }

  getCounterValue() {
    return this.cartCounter;
  }

  setCounterValue(newCounterVal: number) {
    this.cartCounter.next(newCounterVal);
  }

  getCartProducts() {
    return this.cartProducts;
  }

  setCartProducts(obj: any) {
    this.cartProducts.next(obj);
  }

  private productsUrl: string = 'https://fakestoreapi.com/products';

  getProductsList() {
    return this.http.get(this.productsUrl, {
      params: {
        limit: 20,
      },
    });
  }
  getOneProduct(id: any) {
    return this.http.get(this.productsUrl + `/${id}`);
  }
}
