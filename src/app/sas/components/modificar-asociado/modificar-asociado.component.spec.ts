import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAsociadoComponent } from './modificar-asociado.component';

describe('ModificarAsociadoComponent', () => {
  let component: ModificarAsociadoComponent;
  let fixture: ComponentFixture<ModificarAsociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAsociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
