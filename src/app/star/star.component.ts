import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit ,OnChanges{
  //rating and cropping of the stars
  @Input() rating:number=0;
  cropWidth:number =75;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth =  this.rating *75/5;
  }
  ngOnInit(): void {
  }

  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>(); 

  onClicked(){
    /* console.log("hello");
    this.ratingEventClicked.emit(`Rating is ${this.rating}`); */
    let msg =  document.querySelector('#h1')?.textContent ?? 'hello';
    this.ratingClicked.emit(msg);
  }

}
