import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('for password',()=>{
    const el=fixture.debugElement.query(By.css('#password'));
    expect(el.nativeElement.getAttribute('name')).toEqual('password');
  });
  it('for username type',()=>{
    const el=fixture.debugElement.query(By.css('#userName'));
    expect(el.nativeElement.getAttribute('type')).toEqual('number');
  });
  it('for password type', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('password');
  });
  it('should check Password', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1).toBeTruthy();
  });
  it('name as userName', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('userName');
  });
  it('check userName', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1).toBeTruthy();
  });
});
