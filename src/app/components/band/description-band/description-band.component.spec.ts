import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBandComponent } from './description-band.component';

describe('DescriptionBandComponent', () => {
  let component: DescriptionBandComponent;
  let fixture: ComponentFixture<DescriptionBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
