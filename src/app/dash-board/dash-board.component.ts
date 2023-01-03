import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{
  @Input() messageText:string='Welcome to the portal'
  constructor() {
    console.log('greeting constructed')
   }
   ngOnDestroy(): void {
    console.log('greeting destroyed');}
  ngOnInit(): void {
    console.log('greeting in oninit');
  }
  ngOnChanges():void{
    console.log('greeting component changes');
   }

   ngDoCheck(){
     console.log('doCheck of greeting');
   }

   ngAfterContentInit(){

     console.log('greeting content init');

   }
   ngAfterContentChecked(){
     console.log('greeting content checked');
   }
   ngAfterViewInit(){
     console.log('greeting view init');

   }

  ngAfterViewChecked(){
   console.log('greeting view checked');
  }

  displayMessage():string{
    return this.messageText;
  }
}
