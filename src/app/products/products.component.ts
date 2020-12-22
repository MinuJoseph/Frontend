import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  product: any={}
  products: any


  constructor(private api: ApiService){
    this.api.getProduct().subscribe(res=>{
      this.products=res
    })
  }
  /*ngOnInIt(){
        this.api.getProduct().subscribe(res => { 
            this.products = res
        })
        
    }*/

    post(product: any){
      this.api.postProduct(product);
    }

    delete(product: any){
      this.api.deleteProduct(product);
    }

    update(product: any){
      this.api.updateProduct(product)
    }

}
    
  


