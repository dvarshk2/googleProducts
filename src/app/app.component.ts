import { Component, OnInit } from '@angular/core';
import { Iproducts } from './shared/model/data';
import { ProductsService } from './shared/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'googleProducts';
 
  constructor(){}
  ngOnInit(): void {
   
  }
 
}
