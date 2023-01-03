import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'shared/event.service';
import { IEvent } from '../event-details/events';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})


export class EventListComponent{
//getting events from parent component:event-detail
  @Input() eventsList:IEvent[]=[];

  @Input() event:any;
@Input() message:string='';

}