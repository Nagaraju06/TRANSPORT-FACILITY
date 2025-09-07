import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupRideComponent } from './pickup-ride.component';

describe('PickupRideComponent', () => {
  let component: PickupRideComponent;
  let fixture: ComponentFixture<PickupRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
