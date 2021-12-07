import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobroformalizadoComponent } from './cobroformalizado.component';

describe('CobroformalizadoComponent', () => {
  let component: CobroformalizadoComponent;
  let fixture: ComponentFixture<CobroformalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobroformalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobroformalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
