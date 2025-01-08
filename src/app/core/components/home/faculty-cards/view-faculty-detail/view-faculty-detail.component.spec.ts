import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacultyDetailComponent } from './view-faculty-detail.component';

describe('ViewFacultyDetailComponent', () => {
  let component: ViewFacultyDetailComponent;
  let fixture: ComponentFixture<ViewFacultyDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFacultyDetailComponent]
    });
    fixture = TestBed.createComponent(ViewFacultyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
