import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { 
    this.loadProduct();
  }

  ngOnInit(): void {
  }

  loadProduct(){
    let id: string = this.activatedRoute.snapshot.paramMap.get('id') ?? "0";
    this.shopService.getProduct(+id).subscribe((product: IProduct) => {
      this.product = product;
    }, (error: any) => {
      console.log(error);
    });
  }
}
