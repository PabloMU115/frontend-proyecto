import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprestamoactivoComponent } from './cprestamoactivo.component';

describe('CprestamoactivoComponent', () => {
  let component: CprestamoactivoComponent;
  let fixture: ComponentFixture<CprestamoactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprestamoactivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CprestamoactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
