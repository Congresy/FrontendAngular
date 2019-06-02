import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistireConferenciasComponent } from './asistire-conferencias.component';

describe('AsistireConferenciasComponent', () => {
  let component: AsistireConferenciasComponent;
  let fixture: ComponentFixture<AsistireConferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistireConferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistireConferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
