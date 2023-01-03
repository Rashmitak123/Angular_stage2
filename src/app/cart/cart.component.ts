import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../products/product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges {
@Input() products:IProduct[]=[];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  
  }

  ngOnInit(): void {
  }

}