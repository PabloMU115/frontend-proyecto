import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RprestamogarantiahipComponent } from './rprestamogarantiahip.component';

describe('RprestamogarantiahipComponent', () => {
  let component: RprestamogarantiahipComponent;
  let fixture: ComponentFixture<RprestamogarantiahipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RprestamogarantiahipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RprestamogarantiahipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
