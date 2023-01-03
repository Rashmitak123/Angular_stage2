import { Component } from "@angular/core";
import { LoggingService } from "shared/logging.service";
import { CommonModule } from "@angular/common";

@Component({
    selector:'welcome',
    templateUrl:'./welcome.component.html',
    styleUrls:['./welcome.component.css']
    })
    
export class WelcomeComponent{
    constructor(private loggingservice:LoggingService){ };
    welcomeMsg:string='welcome to angular app';
    title="Welcome";
    welcomeMsg2:string='rash';
    num:number=0;
    data:number=3;
    name:string='rashmita';

    
    str:string=this.loggingservice.log();
    log2(){
        alert(this.str);
    }
    
}