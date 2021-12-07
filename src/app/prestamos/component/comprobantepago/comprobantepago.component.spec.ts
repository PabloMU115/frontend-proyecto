import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantepagoComponent } from './comprobantepago.component';

describe('ComprobantepagoComponent', () => {
  let component: ComprobantepagoComponent;
  let fixture: ComponentFixture<ComprobantepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantepagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
