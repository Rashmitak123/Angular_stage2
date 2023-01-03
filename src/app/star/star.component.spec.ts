import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;
  let element:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarComponent ],
      schemas: [NO_ERRORS_SCHEMA],

    })
    .compileComponents();

    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should check whether @Output is
  correctly emitting event  object of string type `,()=>{

        spyOn(component.ratingClicked,'emit');
        const div =fixture.nativeElement.querySelector('.crop');
        fixture.nativeElement.querySelector('#h1').textContent=
        'child sending hello to parent';
        const inputText = fixture.nativeElement.querySelector('#h1').textContent;
        fixture.detectChanges();
        div.click();
        fixture.detectChanges();
        expect(component.ratingClicked.emit).
        toHaveBeenCalledWith(inputText);
        
  });
});
