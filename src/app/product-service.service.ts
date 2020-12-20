import { Injectable } from '@angular/core';
import {Product} from '../app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productList : Product[]=[
  {
    productId: '1',
    imagePath: '../assets/products/product1.png',
    rating: 4.9,
    percentage: 99,
    tags: '1.2K',
    title: 'Xiaomi Wifi Extender',
    price: 12,
    ePacket: true,
    createdAt: new Date()
  },
  {
    productId: '2',
    imagePath: '../assets/products/product2.png',
    rating: 4.9,
    percentage: 99,
    tags: '1.2K',
    title: 'Xiaomi Wifi Extender',
    price: 12,
    ePacket: true,
    createdAt: new Date()
    }
];

  constructor() { }


  getProducts():Product[]{
    // todo call the api;
     return this.productList;
  }
}
