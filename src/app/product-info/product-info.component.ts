import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

// import  *  as  data  from  "../../assets/productsData.json";
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  products: any;
  res: any;

  @Input() productData: any;

  exist: any;
  nExist: any;
  myProduct: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    let id: any;

    this.route.paramMap.subscribe(
      (params) => {
        id = params.get('id');
      }
      // this.myProduct.getOneProduct(id).subscribe((res) => {
      //   this.myProduct = res;
      //   console.log(this.myProduct);
      // })
    );

    this.productService.getOneProduct(id).subscribe((data) => {
      this.myProduct = data;
      console.log(this.myProduct);
    });

    // // this.myProduct = this.myProduct[0];
    // console.log(this.myProduct);

    this.exist = this.myProduct?.rating?.count > 0 ? 'none' : 'block';
    this.nExist = this.myProduct?.rating?.count > 0 ? 'block' : 'none';
  }
}
