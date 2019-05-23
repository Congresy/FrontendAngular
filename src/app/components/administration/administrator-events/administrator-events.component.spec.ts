import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorEventsComponent } from './administrator-events.component';

describe('AdministratorEventsComponent', () => {
  let component: AdministratorEventsComponent;
  let fixture: ComponentFixture<AdministratorEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
