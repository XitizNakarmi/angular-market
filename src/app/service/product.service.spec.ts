import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const dummyProducts = [
    {
      id: 1,
      name: 'Hammer',
      rating: 4.5,
      price: 45,
      description: 'Sturdy hammer of 2.5 lbs with wooden shaft',
      noReview: 200,
      status: 'In Stock',
      category: 'Carpenting',
      image: './assets/images/hammer.png'
    },
    {
      id: 2,
      name: 'Cart',
      rating: 3,
      price: 100,
      description: 'Made out of metal can hold upto 5000lbs',
      noReview: 130,
      status: 'In Stock',
      category: 'Gardening',
      image: './assets/images/garden_cart.png'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllProducts', () => {
    it('should return an Observable<IProduct[]>', () => {

      service.getAllProducts().subscribe(users => {
        expect(users.length).toBe(dummyProducts.length);
        expect(users).toEqual(dummyProducts);
      });

      const req = httpMock.expectOne(`${service.PRODUCT_URL}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyProducts);
    });
  });

  describe('#getProduct', () => {
    it('should return an Observable<IProduct>', () => {
      const id = dummyProducts[0].id;
      service.getProduct(id).subscribe(users => {
        expect(users).toEqual(dummyProducts[0]);
      });

      const req = httpMock.expectOne(`${service.PRODUCT_URL}/${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyProducts[0]);
    });
  });
});
