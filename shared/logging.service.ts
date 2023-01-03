import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class LoggingService{
    log(){
            return 'Hello Rashmita';
    }
}