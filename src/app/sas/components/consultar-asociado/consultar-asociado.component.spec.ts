import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAsociadoComponent } from './consultar-asociado.component';

describe('ConsultarAsociadoComponent', () => {
  let component: ConsultarAsociadoComponent;
  let fixture: ComponentFixture<ConsultarAsociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAsociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
