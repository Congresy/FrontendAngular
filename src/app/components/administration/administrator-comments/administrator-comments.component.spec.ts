import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorCommentsComponent } from './administrator-comments.component';

describe('AdministratorCommentsComponent', () => {
  let component: AdministratorCommentsComponent;
  let fixture: ComponentFixture<AdministratorCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
