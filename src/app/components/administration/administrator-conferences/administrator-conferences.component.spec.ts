import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorConferencesComponent } from './administrator-conferences.component';

describe('AdministratorConferencesComponent', () => {
  let component: AdministratorConferencesComponent;
  let fixture: ComponentFixture<AdministratorConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
