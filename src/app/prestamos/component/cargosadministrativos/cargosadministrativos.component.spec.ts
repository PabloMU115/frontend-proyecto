import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosadministrativosComponent } from './cargosadministrativos.component';

describe('CargosadministrativosComponent', () => {
  let component: CargosadministrativosComponent;
  let fixture: ComponentFixture<CargosadministrativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosadministrativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosadministrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
