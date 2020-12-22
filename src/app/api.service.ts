import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get('http://localhost:60884/products/products');
 }

 postProduct(product: any){
     this.http.post('http://localhost:60884/products/products',product).subscribe(res => {
         console.log(res);
     })     
  }
  deleteProduct(product: any){
    this.http.delete('http://localhost:60884/products/products/{id}',product).subscribe(res=>{
      console.log(res);
    })  }

  updateProduct(product: any){

    this.http.put('http://localhost:60884/products/products/{id}',product).subscribe(res=>{
        console.log(res);
      })  }
  

}


