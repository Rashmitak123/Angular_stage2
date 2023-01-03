import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalWebsiteComponent } from './animal-website.component';

describe('AnimalWebsiteComponent', () => {
  let component: AnimalWebsiteComponent;
  let fixture: ComponentFixture<AnimalWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
