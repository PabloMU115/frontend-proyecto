import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SasHomeComponent } from './sas-home.component';

describe('SasHomeComponent', () => {
  let component: SasHomeComponent;
  let fixture: ComponentFixture<SasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
