import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(
      {
        next: value => this.productDetail = value
      }
    );
  }

  goBack(): void {
    this.router.navigate(['product']);
  }
}
