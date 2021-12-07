import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RprestamoactivoComponent } from './rprestamoactivo.component';

describe('RprestamoactivoComponent', () => {
  let component: RprestamoactivoComponent;
  let fixture: ComponentFixture<RprestamoactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RprestamoactivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RprestamoactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
