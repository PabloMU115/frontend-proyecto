import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SasNavbarComponent } from './sas-navbar.component';

describe('SasNavbarComponent', () => {
  let component: SasNavbarComponent;
  let fixture: ComponentFixture<SasNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SasNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SasNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
