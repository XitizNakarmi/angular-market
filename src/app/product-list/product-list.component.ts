import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';
import {IProduct} from '../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public imageProps = {
    height: 150,
    margin: 2
  };
  public categories = new Set();
  public products: IProduct[];
  // tslint:disable-next-line:variable-name
  private _filteredProducts: IProduct[];
  get filteredProducts(): IProduct[] {
    return this._filteredProducts;
  }

  set filteredProducts(value) {
    this._filteredProducts = value;
  }

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe({
        next: value => {
          this.products = value;
          this.filteredProducts = this.products;
          value.forEach(product => this.categories.add(product.category));
        }
      });
  }

  gotoProductDetail(id: string): void {
    this.router.navigate(['product', id]);
  }

  assignFilteredProducts(filteredProducts: IProduct[]): void {
    this.filteredProducts = filteredProducts;
  }
}
