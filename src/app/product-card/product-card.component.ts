
import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() productData:any;

  exist:any;
  nExist:any;
  constructor() { 

  }


  ngOnInit(): void {
          this.exist = this.productData.rating.count > 0? "block": "none";
    this.nExist = this.productData.rating.count > 0? "none": "block";
  }

}
