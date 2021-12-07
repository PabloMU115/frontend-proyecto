import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrojudComponent } from './cobrojud.component';

describe('CobrojudComponent', () => {
  let component: CobrojudComponent;
  let fixture: ComponentFixture<CobrojudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobrojudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrojudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
