import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAsociadoComponent } from './agregar-asociado.component';

describe('AgregarAsociadoComponent', () => {
  let component: AgregarAsociadoComponent;
  let fixture: ComponentFixture<AgregarAsociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAsociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
