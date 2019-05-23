import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorPostsComponent } from './administrator-posts.component';

describe('AdministratorPostsComponent', () => {
  let component: AdministratorPostsComponent;
  let fixture: ComponentFixture<AdministratorPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
