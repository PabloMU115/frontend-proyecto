import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropolizaComponent } from './registropoliza.component';

describe('RegistropolizaComponent', () => {
  let component: RegistropolizaComponent;
  let fixture: ComponentFixture<RegistropolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistropolizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
