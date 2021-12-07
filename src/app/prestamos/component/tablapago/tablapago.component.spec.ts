import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapagoComponent } from './tablapago.component';

describe('TablapagoComponent', () => {
  let component: TablapagoComponent;
  let fixture: ComponentFixture<TablapagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
