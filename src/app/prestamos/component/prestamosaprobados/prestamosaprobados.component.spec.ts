import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosaprobadosComponent } from './prestamosaprobados.component';

describe('PrestamosaprobadosComponent', () => {
  let component: PrestamosaprobadosComponent;
  let fixture: ComponentFixture<PrestamosaprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamosaprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosaprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
