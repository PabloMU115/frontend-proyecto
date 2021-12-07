import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrogarantiaComponent } from './registrogarantia.component';

describe('RegistrogarantiaComponent', () => {
  let component: RegistrogarantiaComponent;
  let fixture: ComponentFixture<RegistrogarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrogarantiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrogarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
