import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('should display data as 3',()=>{
    component.data =3;
    fixture.detectChanges();
    const rootEle:DebugElement = fixture.debugElement;
    const h1 =rootEle.query(By.css('#msg'));

    const h1Element:HTMLElement= h1.nativeElement;

    expect(h1Element.textContent).toContain('3');
  });
  it('should display data rashmita',()=>{
    component.str ='rashmita';
    fixture.detectChanges();
    const rootEle:DebugElement = fixture.debugElement;
    const h1 =rootEle.query(By.css('#msg2'));

    const h1Element:HTMLElement= h1.nativeElement;

    expect(h1Element.textContent).toContain('rashmita');
  });
});
/* function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
} */

