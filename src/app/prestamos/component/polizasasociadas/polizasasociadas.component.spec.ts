import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasasociadasComponent } from './polizasasociadas.component';

describe('PolizasasociadasComponent', () => {
  let component: PolizasasociadasComponent;
  let fixture: ComponentFixture<PolizasasociadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizasasociadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasasociadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
