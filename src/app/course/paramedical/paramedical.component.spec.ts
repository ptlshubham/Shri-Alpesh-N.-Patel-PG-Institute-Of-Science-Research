import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamedicalComponent } from './paramedical.component';

describe('ParamedicalComponent', () => {
  let component: ParamedicalComponent;
  let fixture: ComponentFixture<ParamedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
