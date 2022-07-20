import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/data';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
singleProduct! : Iproducts | undefined;
  constructor(private productsService : ProductsService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
                .subscribe((params : Params) => {
                  console.log(params);
                  let name = params['name'];
                  this.singleProduct = this.productsService.getProduct(name);
                })
  }

}
