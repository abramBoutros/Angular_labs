import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { __values } from 'tslib';

import  *  as  data  from  "../../assets/productsData.json"



@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  products: any = (data as any).default;


  @Input() productData:any;

  exist:any;
  nExist:any;
  myProduct:any;
  constructor(private route: ActivatedRoute) { 

  }

 


  ngOnInit(): void {
    let id:any;

    this.route.paramMap.subscribe(params => {
      id = params.get("id");

      // to be used
      // service.getProfile(id)
    });
    console.log(+id);
    console.log(this.products[0].id);
    this.myProduct = this.products.filter((product:any) => product.id == id)

    this.myProduct = this.myProduct[0]
    console.log(this.myProduct)
    
    this.exist = this.myProduct.rating.count > 0? "block": "none";
    this.nExist = this.myProduct.rating.count > 0? "none": "block";
    
    // this.exist = this.productData.rating.count > 0? "block": "none";
    // this.nExist = this.productData.rating.count > 0? "none": "block";
}


}
