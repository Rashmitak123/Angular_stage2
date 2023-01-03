import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-book-data',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookDataComponent implements OnInit {

  ngOnInit(): void {
  }

  bookForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.bookForm=this.formBuilder.group({
         id:['1',[Validators.required,Validators.max(10)]],
         name:['The Immortals of Meluha',[Validators.required,Validators.minLength(5)]],
         issueDate:['2009-12-21',[Validators.required]],
         author:this.formBuilder.group({
          authorname:['',[Validators.required]],
          authoremail:['amish@gmail.com',[Validators.required,Validators.email]]
        }),
        publisher:this.formBuilder.array([])
    })
  }
  get id(){
    return this.bookForm.get("id");
  }

  get name(){
    return this.bookForm.get("name");
  }

  get issueDate(){
    return this.bookForm.get("issueDate");
  }

  get authorname(){
    return this.bookForm.get("author")?.get("authorname");
  }

  get authoremail(){
     return this.bookForm.get("author")?.get("authoremail");
  }

 

  publisher():FormArray{
    return this.bookForm.get("publisher") as FormArray;
  }

  newPublisher():FormGroup{
    return this.formBuilder.group({
      publisherName:'',
      publisherEmail:''
    });
  }

  addBookPublisher(){
    this.publisher().push(this.newPublisher());
}

removeBookPublisher(bookIndex:number){
  this.publisher().removeAt(bookIndex);
}

  onSubmit(){
    console.log(this.bookForm.value);
  }

}

