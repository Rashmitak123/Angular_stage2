import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  msg:string='hello there'
  constructor() { 
    console.log('Shell constructor');
  }

  ngOnInit(): void {
    console.log('in oninit');
  }
  ngOnChanges():void{
    console.log('shell component changes');
   }
 
   ngDoCheck(){
     console.log('doCheck of Shell');
   }
 
   ngAfterContentInit(){
 
     console.log('Shell content init');
 
   }
   ngAfterContentChecked(){
     console.log('shell content checked');
   }
   ngAfterViewInit(){
     console.log('shell view init');
 
   }
 
  ngAfterViewChecked(){
   console.log('shell view checked');
 
  }

}