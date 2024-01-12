import { Component, Input } from '@angular/core';
import { Product } from '../popular-products.component';

@Component({
  selector: 'app-popular-product-card',
  templateUrl: './popular-product-card.component.html',
  styleUrls: ['./popular-product-card.component.css']
})
export class PopularProductCardComponent {
  @Input() public product:Product;
}
