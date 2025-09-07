import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/Shared/custom.validators';
import { RideService } from 'src/app/Shared/ride.service';

@Component({
  selector: 'app-add-new-ride',
  templateUrl: './add-new-ride.component.html',
  styleUrls: ['./add-new-ride.component.scss']
})
export class AddNewRideComponent implements OnInit {
  newRide!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private rideService: RideService){}
  ngOnInit(): void {
    this.newRide = this.fb.group({
      employeeID: ['', [Validators.required, CustomValidators.numbersOnly]],
      vehicleType: ['Car', Validators.required],
      vehicleNo: ['', [Validators.required, CustomValidators.vehicleNo]],
      vacantSeats: ['', [Validators.required, CustomValidators.numbersOnly]],
      time: ['', Validators.required],
      pickupPoint: ['', [Validators.required, CustomValidators.alphabetsOnly]],
      destination: ['', [Validators.required, CustomValidators.alphabetsOnly]]
    })
  }

  addRide() {
    if(this.newRide.invalid) {
      alert('Please enter all mandatory fields');
    } else {
      const result = this.newRide.value;
      this.newRide.reset();
      this.rideService.newRide(result);
      localStorage.setItem('rides', JSON.stringify(result));
      this.router.navigate(['/pickup-ride']);
      console.log(this.newRide.value);
    }
  }
}
