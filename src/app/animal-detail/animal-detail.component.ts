import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalService } from 'shared/animal.service';
import { IAnimal } from '../animal-list/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit, OnDestroy{
  id:number=0;
  animal:IAnimal | undefined;
  sub!:Subscription
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private service:AnimalService){

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params);
      let idd=params.get('id');
      if(idd){
        this.id=+idd;
      }
      if(this.service.getAnimalById(this.id)){
        // this.animal =this.service.getAnimalById(this.id)
      };
    })
  }

  back():void{
    this.router.navigate(['animals']);
  }
  
}
