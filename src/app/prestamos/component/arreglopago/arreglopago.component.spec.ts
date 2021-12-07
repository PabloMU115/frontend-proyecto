import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreglopagoComponent } from './arreglopago.component';

describe('ArreglopagoComponent', () => {
  let component: ArreglopagoComponent;
  let fixture: ComponentFixture<ArreglopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArreglopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreglopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
