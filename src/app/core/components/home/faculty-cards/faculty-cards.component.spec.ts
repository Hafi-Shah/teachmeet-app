import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCardsComponent } from './faculty-cards.component';

describe('FacultyCardsComponent', () => {
  let component: FacultyCardsComponent;
  let fixture: ComponentFixture<FacultyCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyCardsComponent]
    });
    fixture = TestBed.createComponent(FacultyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
