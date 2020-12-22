import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get('http://localhost:5000/products/products');
 }

 postProduct(product: any){
     this.http.post('http://localhost:5000/products/products',product).subscribe(res => {
         console.log(res);
     })     
  }
  

}


