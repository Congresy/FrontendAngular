import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistireEventosComponent } from './asistire-eventos.component';

describe('AsistireEventisComponent', () => {
  let component: AsistireEventosComponent;
  let fixture: ComponentFixture<AsistireEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsistireEventosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistireEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
