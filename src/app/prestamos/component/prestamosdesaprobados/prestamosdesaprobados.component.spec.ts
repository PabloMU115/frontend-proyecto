import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosdesaprobadosComponent } from './prestamosdesaprobados.component';

describe('PrestamosdesaprobadosComponent', () => {
  let component: PrestamosdesaprobadosComponent;
  let fixture: ComponentFixture<PrestamosdesaprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamosdesaprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosdesaprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
