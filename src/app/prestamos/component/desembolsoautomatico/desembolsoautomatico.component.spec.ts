import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesembolsoautomaticoComponent } from './desembolsoautomatico.component';

describe('DesembolsoautomaticoComponent', () => {
  let component: DesembolsoautomaticoComponent;
  let fixture: ComponentFixture<DesembolsoautomaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesembolsoautomaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesembolsoautomaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
