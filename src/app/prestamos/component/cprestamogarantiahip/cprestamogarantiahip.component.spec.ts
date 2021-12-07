import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprestamogarantiahipComponent } from './cprestamogarantiahip.component';

describe('CprestamogarantiahipComponent', () => {
  let component: CprestamogarantiahipComponent;
  let fixture: ComponentFixture<CprestamogarantiahipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprestamogarantiahipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CprestamogarantiahipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
