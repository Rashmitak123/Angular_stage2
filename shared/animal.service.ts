import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { catchError, Observable, tap , BehaviorSubject, throwError, map } from "rxjs";
import { Category, IAnimal} from "src/app/animal-list/animal";
@Injectable({
    providedIn:'root'
})
export class AnimalService{
   foundIndex:number=0;
 private url="api/animals";
 animals:IAnimal[]=[];
 private selectedAnimalSource= new BehaviorSubject<IAnimal | null >(null);
selectedAnimalChanges$=this.selectedAnimalSource.asObservable();
  constructor(private http:HttpClient){
  }
  getAnimals():Observable<IAnimal[]>{
    return this.http.get<IAnimal[]>(this.url).pipe(
        tap(data=>{console.log(data);
          this.animals=data;
    }),
        catchError(this.errorHandler)
    );
  }
changeSelectedAnimal(selectedAnimal:IAnimal | null):void{
  this.selectedAnimalSource.next(selectedAnimal);
}
  errorHandler=(err:any)=>{
   let errorMessage:string;
   if(err.error instanceof ErrorEvent)
     {
       errorMessage = `An error has occured ${err.error.message}`
     }
     else{
      errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
     }
     console.log(err);
     return throwError(errorMessage);
  }
  newAnimal():IAnimal{
    return {
      id:0,

      name:'',

      briefDescription:'',

      image:'',

      physicalStrength:0,

      color:'',

      category:Category.wild
    };
  }
  createAnimal(animal:IAnimal):Observable<IAnimal>{
    console.log(animal)
    const headers= new HttpHeaders({'Content-Type':'application/json'});
      const newAnimal={...animal,id:null};
   //   console.log(newAnimal)
    console.log(`in create method  ${this.url}`)
      return this.http.post<IAnimal>(this.url,newAnimal,{headers})
      .pipe(
        tap(data=>{
         console.log('in create new animal'+ JSON.stringify(data));
         this.animals.push(data);
        },
        catchError(this.errorHandler)
        )
      )
  }
  deleteAnimal(id:number):Observable<{}>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${id}`;
    return this.http.delete<IAnimal>(url,{headers})
    .pipe(
      tap(data=>{
        console.log('deleted animal'+id);
       const foundIndex = this.animals.findIndex(item=>item.id===id);
       if(foundIndex > -1)
       this.animals.splice(foundIndex,1);
      },
      catchError(this.errorHandler))
    );
  }
   getAnimalById(id:number):Observable<IAnimal>{
    return this.getAnimals().pipe(
      tap(()=>{console.log('fetch animal'+id);
       this.foundIndex =this.animals.findIndex(item=>item.id ==id);
      if(this.foundIndex > -1){
        this.animals[this.foundIndex];
          }
      }),
      map(()=>this.animals[this.foundIndex]),
      catchError(this.errorHandler)
      );
   }
   updateAnimal(animal:IAnimal):Observable<IAnimal>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${animal.id}`;
    return this.http.put<IAnimal>(url,animal, {headers}).pipe(
    tap(()=>{console.log('update animal'+animal.id);
    const foundIndex =this.animals.findIndex(item=>item.id === animal.id);
    if(foundIndex > -1){
      this.animals[foundIndex]=animal;
        }
    }),
    map(()=>animal),
    catchError(this.errorHandler)
    );
   }
}