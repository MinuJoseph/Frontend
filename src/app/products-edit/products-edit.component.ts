import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  
})
export class ProductsEditComponent {

  product: any={}
  constructor(private api : ApiService){}
  post(product: any){
    
    this.api.postProduct(product);
    
  }
 

}

 
  

