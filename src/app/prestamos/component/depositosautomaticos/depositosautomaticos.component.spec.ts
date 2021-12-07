import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosautomaticosComponent } from './depositosautomaticos.component';

describe('DepositosautomaticosComponent', () => {
  let component: DepositosautomaticosComponent;
  let fixture: ComponentFixture<DepositosautomaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositosautomaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositosautomaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
