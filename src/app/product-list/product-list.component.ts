import { Component, OnInit } from '@angular/core';
// import * as data from '../../assets/productsData.json';
import { ProductsService } from '../services/products.service';
import { LoaderInterceptor } from '../services/loader.interceptor';
import { LoaderServceService } from '../services/loader-servce.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any;
  loader: any;
  isLoading: any = this.loaderServceService.isLoading;

  constructor(
    private productService: ProductsService,
    private loaderServceService: LoaderServceService
  ) {}

  ngOnInit(): void {
    this.productService.getProductsList().subscribe((res) => {
      this.products = res;
      this.loaderServceService.show();
    });
    this.loaderServceService.getLoadingStatus().subscribe((res: any) => {
      this.isLoading = res;
      console.log(res, 'res');
    });
  }
}
