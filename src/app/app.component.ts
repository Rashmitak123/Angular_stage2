import { Component } from "@angular/core";
import { IProduct } from "./products/product-list/product";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  cssStyle:string[]=['redborder', 'size30']
  pageTitle: string='my angular app'
  products:IProduct[]=[];

  name:string='OnlineRentals';

    onProductSelection(obj:IProduct){
        console.log(JSON.stringify(obj));
        this.products=[...this.products,obj];

    }

}