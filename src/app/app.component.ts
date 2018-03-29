import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  products: Product[];

  constructor(){
    let newProduct = [
      new Product(
      'NICEHAT',
      'A Nice Black Shoes',
      'assets/images/products/blackwhite.jpg',
      ['Men','Accessories','Shoes'],
      29.99
      ),
      new Product(
        'SANDALSHOES',
        'A Nice Sandal Shoes',
        'assets/images/products/sandalshoe.jpg',
        ['Men','Accessories','Shoes'],
        109.99
        ),
        new Product(
          'SUPERCROCS',
          'A Nice Crocs',
          'assets/images/products/crocs.jpg',
          ['Men','Accessories','Crocs'],
          109.99
          ),
    ]
    this.products = newProduct;
  }


  productWasSelected(product: Product): void { 
    console.log('Product Clicked', product);    
  }
}
