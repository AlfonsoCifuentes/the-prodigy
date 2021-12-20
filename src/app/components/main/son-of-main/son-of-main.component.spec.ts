import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonOfMainComponent } from './son-of-main.component';

describe('SonOfMainComponent', () => {
  let component: SonOfMainComponent;
  let fixture: ComponentFixture<SonOfMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonOfMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonOfMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
