import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/shared/model/data';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-g-products',
  templateUrl: './g-products.component.html',
  styleUrls: ['./g-products.component.scss']
})
export class GProductsComponent implements OnInit {
  gProducts! : Iproducts[];
  products! : Iproducts[];
  origArr! : Iproducts[];
  product! : Iproducts;
  
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.gProducts = this.products = this.productsService.getProducts();
  }
  onSearch(n : string){
    let input = n.toLowerCase();
    if(input === ''){
      this.products = this.gProducts;
    }else{
    let filterP = this.products.filter(ele => ele.name.toLowerCase().includes(input));
    this.products = filterP;
    }
  }
  onHardware(){
    let hardwareArr = this.gProducts.filter(ele => ele.type.toLowerCase() === 'hardware');
    this.products = hardwareArr;
    console.log(hardwareArr);
    
  }
  onApp(){
    let hardwareArr = this.gProducts.filter(ele => ele.type.toLowerCase() === 'app');
    this.products = hardwareArr;
  }
  onService(){
    let hardwareArr = this.gProducts.filter(ele => ele.type.toLowerCase() === 'service');
    this.products = hardwareArr;
  }
  onSelectHandler(val : string){
    // console.log(val);  
    if(val){
    this.products = this.gProducts;      
    let hardwareArr = this.products.filter(ele => ele.type.toLowerCase() === val);
    this.products = hardwareArr;
    // console.log(hardwareArr);    
    }
    if(val === 'All'){
      this.products = this.gProducts
    }   
  } 

}
