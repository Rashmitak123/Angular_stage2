import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(DashBoardComponent)greetingc!:DashBoardComponent;
  @ViewChild('ref1',{read:TemplateRef})ref1!: TemplateRef<any>;

  pageTitle:string='Online Portal';

get isLoggedIn():boolean{
  return this.authservice.isLoggedIn();
}

get userName():string{
  if(this.authservice.currentUser)
  return this.authservice.currentUser?.userName;

  return '';

}
constructor(private router:Router,
                private authservice:AuthService,
                private viewref:ViewContainerRef){
  console.log('menu constructor')
}
  ngOnInit(): void {
    console.log('menu on init');
  }

  logOut():void{
    this.authservice.logOut();
    this.router.navigate(['/welcome']);
  }
  ngOnDestroy(): void {
    console.log('menu destroyed');}


    ngOnChanges():void{
     console.log('menu component changes');

    }

    ngDoCheck(){
      console.log('doCheck of menu');
    }

    ngAfterContentInit(){

      console.log('menu content init');

    }
    ngAfterContentChecked(){
      console.log('menu content checked');
    }
    ngAfterViewInit(){
      console.log('menu view init');
      this.viewref.createEmbeddedView(this.ref1);

    }

   ngAfterViewChecked(){
    console.log('menu view checked');


   }
   greet():void{
    console.log(this.greetingc.displayMessage());
    this.pageTitle=this.greetingc.displayMessage();
   }

}