import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IProduct} from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public PRODUCT_URL = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.PRODUCT_URL)
      .pipe(catchError(err => {
        console.log(err);
        return throwError(`Error from getAllProducts: ${err}`);
      }));
  }
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.PRODUCT_URL}/${id}`)
      .pipe(catchError(err => {
        console.log(err);
        return throwError(`Error from getProduct: ${err}`);
      }));
  }
}
