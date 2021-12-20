import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBandComponent } from './logo-band.component';

describe('LogoBandComponent', () => {
  let component: LogoBandComponent;
  let fixture: ComponentFixture<LogoBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
