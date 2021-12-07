import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RprestamocobrojudComponent } from './rprestamocobrojud.component';

describe('RprestamocobrojudComponent', () => {
  let component: RprestamocobrojudComponent;
  let fixture: ComponentFixture<RprestamocobrojudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RprestamocobrojudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RprestamocobrojudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
