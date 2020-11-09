import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../interface/product';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() categories;
  @Input() products;
  @Output() filterProducts: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickCategory(category: string): void {
    console.log(this.products.filter(product => product.category.toLowerCase() === category.toLowerCase()));
    this.filterProducts.emit(
      this.products.filter(product => product.category.toLowerCase() === category.toLowerCase())
    );
  }
  onClear(): void{
    this.filterProducts.emit(this.products);
  }
}
