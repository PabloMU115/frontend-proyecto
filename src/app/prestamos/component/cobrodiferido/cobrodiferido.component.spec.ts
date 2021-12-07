import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrodiferidoComponent } from './cobrodiferido.component';

describe('CobrodiferidoComponent', () => {
  let component: CobrodiferidoComponent;
  let fixture: ComponentFixture<CobrodiferidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobrodiferidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrodiferidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
