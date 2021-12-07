import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrocuotaComponent } from './cobrocuota.component';

describe('CobrocuotaComponent', () => {
  let component: CobrocuotaComponent;
  let fixture: ComponentFixture<CobrocuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobrocuotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrocuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
