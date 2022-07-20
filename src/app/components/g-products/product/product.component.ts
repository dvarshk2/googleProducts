import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/shared/model/data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 @Input() gProduct! : Iproducts;
  constructor() { }

  ngOnInit(): void {
  }

}
