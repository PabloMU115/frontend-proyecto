import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprestamocobrojudComponent } from './cprestamocobrojud.component';

describe('CprestamocobrojudComponent', () => {
  let component: CprestamocobrojudComponent;
  let fixture: ComponentFixture<CprestamocobrojudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprestamocobrojudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CprestamocobrojudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
