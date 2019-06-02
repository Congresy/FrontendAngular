import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistireComponent } from './asistire.component';

describe('AsistireComponent', () => {
  let component: AsistireComponent;
  let fixture: ComponentFixture<AsistireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
