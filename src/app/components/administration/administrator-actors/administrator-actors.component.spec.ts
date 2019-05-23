import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorActorsComponent } from './administrator-actors.component';

describe('AdministratorActorsComponent', () => {
  let component: AdministratorActorsComponent;
  let fixture: ComponentFixture<AdministratorActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
