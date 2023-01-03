/* import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct, Category } from "src/app/products/product-list/product";


@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private url="api/products.json";
    constructor(private http:HttpClient){}
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url);
    }

} */

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap , BehaviorSubject, throwError, map } from "rxjs";
import { Category, IProduct } from "src/app/products/product-list/product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
  foundIndex:number=0;
 private url="api/products";
 products:IProduct[]=[];

 private selectedProductSource= new BehaviorSubject<IProduct | null >(null);

selectedProductChanges$=this.selectedProductSource.asObservable();

  constructor(private http:HttpClient){
  }

  getProducts():Observable<IProduct[]>{
    
    return this.http.get<IProduct[]>(this.url).pipe(

        tap(data=>{console.log(data);
          //we are assigning data to this.products
          this.products=data;
    }),
        catchError(this.errorHandler)
    );

  }



changeSelectedProduct(selectedProduct:IProduct | null):void{
  this.selectedProductSource.next(selectedProduct);
}
  errorHandler=(err:any)=>{

   let errorMessage:string;
   if(err.error instanceof ErrorEvent)
     {
       errorMessage = `An error has occured ${err.error.message}`
     }
     else{
      errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
     }
     console.log(err);
     return throwError(errorMessage);
  }

  newProduct():IProduct{
    return {

         id:0,
        name:'',
        category:Category.books,
        price:0,
        image:'\\assets\\cat.jpg',
        rating:0,
        qty:0

    };

  }


  createProduct(product:IProduct):Observable<IProduct>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});

      const newProduct={...product,id:null};
      console.log(`in create method ${this.url}`)

      return this.http.post<IProduct>(this.url,newProduct,{headers})
      .pipe(
        tap(data=>{

         console.log('in create new product'+ JSON.stringify(data));
         this.products.push(data);
        },
        catchError(this.errorHandler)
        )
      )
  }

  deleteProduct(id:number):Observable<{}>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${id}`;

    return this.http.delete<IProduct>(url,{headers})
    .pipe(
      tap(data=>{
        console.log('deleted prd'+id);
       const foundIndex = this.products.findIndex(item=>item.id===id);
       if(foundIndex > -1)
       this.products.splice(foundIndex,1);
      },
      catchError(this.errorHandler))
    );

  }

  getProductById(id:number):Observable<IProduct>{
    return this.getProducts().pipe(
      tap(()=>{console.log('fetch product'+id);
       this.foundIndex =this.products.findIndex(item=>item.id ==id);
      if(this.foundIndex > -1){
        this.products[this.foundIndex];
          }
      }),
      map(()=>this.products[this.foundIndex]),
      catchError(this.errorHandler)
      );
   }
   
   updateProduct(product:IProduct):Observable<IProduct>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${product.id}`;
    return this.http.put<IProduct>(url,product, {headers}).pipe(

    tap(()=>{console.log('update product'+product.id);
    const foundIndex =this.products.findIndex(item=>item.id === product.id);
    if(foundIndex > -1){
      this.products[foundIndex]=product;
        }
    }),
    map(()=>product),
    catchError(this.errorHandler)
    );

   }

}