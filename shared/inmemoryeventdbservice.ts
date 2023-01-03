/* import { Injectable } from "@angular/core";
import { IProduct, Category } from "src/app/products/product-list/product";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';

@Injectable({
    providedIn:'root'
})
export class InMemoryEventDbService implements InMemoryDbService{
    createDb(){
       const products:IProduct[]=[{

            id:101,
            name:'the stranger',
            price:300,
            imageUrl:'../../assets/books.jpg',
            category: Category.books,
            rating: 4,
            qty:0
          
          },{
            id:102,
            name:'the hindu',
            price:100,
            imageUrl:'../../assets/newspaper.jpg',
            category:Category.newspaper,
            rating: 3.4,
            qty:0
          },{
            id:103,
            name:'india today',
            price:300,
            imageUrl:'../../assets/magazine.jpg',
            category:Category.magazine,
            rating: 1.8,
            qty:0
          },{
            id:104,
            name:'the alchemist',
            price:200,
            imageUrl:'../../assets/books.jpg',
            category:Category.books,
            rating: 3,
            qty:0
          }]

          return {products};
    }
} */



import { I18nPluralPipe } from "@angular/common";
import { Injectable } from "@angular/core";

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "src/app/event-details/events";
import { Category, IProduct } from "src/app/products/product-list/product";

@Injectable({
    providedIn:'root'
})

export class InMemoryEventDbService implements InMemoryDbService {
    
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> { 
        
        let events:IEvent[] = [
            {
                "id":1,
                "name":"book",
                "date": "10/09/2021",
                "time":"12:30 pm",
                "price":300,
                "imageUrl":"../../assets/books.jpg",
                "location":{
                    "address":"Bobcat Lane",
                    "city":"LI",
                    "country":"Russia"
                },
                "sessions":[
                    {
                        "id":101,
                        "name":"Chapter_1",
                        "presentor":"Robert",
                        "duration":"2 hours",
                        "level":5,
                        "voters":["p1", "p2", "p3"]
                    }
                ]
            },
        
            {
                "id":2,
                "name":"Magazine",
                "date": "04/12/2019",
                "time":"10:00 am",
                "price":100,
                "imageUrl":"../../assets/magazine.jpg",
                "location":{
                    "address":"street five",
                    "city":"LPN",
                    "country":"China"
                },
                "sessions":[
                    {
                        "id":103,
                        "name":"Magazine_1",
                        "presentor":"Sam",
                        "duration":"3 hours",
                        "level":2,
                        "voters":["p1", "p2", "p3"]
                    },
                ]
            },
        
            {
                "id":3,
                "name":"Newspaper",
                "date": "13/12/2022",
                "time":"06:30 am",
                "price":200,
                "imageUrl":"../../assets/newspaper.jpg",
                "location":{
                    "address":"LN street",
                    "city":"NYT",
                    "country":"Japan"
                },
                "sessions":[
                    {
                        "id":105,
                        "name":"News_1",
                        "presentor":"Peter",
                        "duration":"30min",
                        "level":1,
                        "voters":["p1", "p2", "p3"]
                    }
                ]
            }
        ]

        let products: IProduct[]= [{

          id:101,
          name:'the stranger',
          price:300,
          image:'../../assets/books.jpg',
          category: Category.books,
          rating: 4,
          qty:0
        
        },{
          id:102,
          name:'the hindu',
          price:100,
          image:'../../assets/newspaper.jpg',
          category:Category.newspaper,
          rating: 3.4,
          qty:0
        },{
          id:103,
          name:'india today',
          price:300,
          image:'../../assets/magazine.jpg',
          category:Category.magazine,
          rating: 1.8,
          qty:0
        },{
          id:104,
          name:'the alchemist',
          price:200,
          image:'../../assets/books.jpg',
          category:Category.books,
          rating: 3,
          qty:0
        }]

        let animals=[{

            id:101,
            name:'cat',
            description:'meow meow',
            age:2,
            imageUrl:'../../assets/cat.jpeg'
        
          },{
            id:102,
            name:'dog',
            description:'baww baww',
            age:4,
            imageUrl:'../../assets/dog.jpg'
          },{
            id:103,
            name:'tiger',
            description:'I am Tiger',
            age:7,
            imageUrl:'../../assets/tiger.jpg'
          },{
            id:104,
            name:'rabbit',
            description:'I am Rabbit',
            age:2,
            imageUrl:'../../assets/rabbit.jpg'
          }]       

        return {events, products, animals};
                
    }

}