import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/g-products/product/product.component';
import { GProductsComponent } from './components/g-products/g-products.component';
import { CardProductComponent } from './components/g-products/card-product/card-product.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const route: Routes =[
  {path: '', redirectTo : 'products', pathMatch : 'full'},
  {path: 'products', component: GProductsComponent},
  {path: 'products/:name', component: CardProductComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GProductsComponent,
    CardProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
