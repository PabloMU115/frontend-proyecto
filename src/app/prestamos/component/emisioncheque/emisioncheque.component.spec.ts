import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionchequeComponent } from './emisioncheque.component';

describe('EmisionchequeComponent', () => {
  let component: EmisionchequeComponent;
  let fixture: ComponentFixture<EmisionchequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisionchequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisionchequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
