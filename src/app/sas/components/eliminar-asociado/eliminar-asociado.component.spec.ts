import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAsociadoComponent } from './eliminar-asociado.component';

describe('EliminarAsociadoComponent', () => {
  let component: EliminarAsociadoComponent;
  let fixture: ComponentFixture<EliminarAsociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAsociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
