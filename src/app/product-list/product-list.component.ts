import { Component, OnInit } from '@angular/core';
// import data from "../../assets/productsData.json";
import  *  as  data  from   "../../assets/productsData.json";

// const data = require("../../assets/productsData.js")

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
