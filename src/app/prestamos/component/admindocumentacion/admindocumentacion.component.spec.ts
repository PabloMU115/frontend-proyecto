import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindocumentacionComponent } from './admindocumentacion.component';

describe('AdmindocumentacionComponent', () => {
  let component: AdmindocumentacionComponent;
  let fixture: ComponentFixture<AdmindocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindocumentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
