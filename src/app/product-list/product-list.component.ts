import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   productList: Product[];
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    // get products
    this.productList = this.productService.getProducts();
  }

}
