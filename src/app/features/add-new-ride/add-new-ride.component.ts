import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from 'src/app/Shared/custom.validators';
import { RideService } from 'src/app/Shared/ride.service';

@Component({
  selector: 'app-add-new-ride',
  templateUrl: './add-new-ride.component.html',
  styleUrls: ['./add-new-ride.component.scss']
})
export class AddNewRideComponent implements OnInit {
  newRide!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastrService
    
  ){}
  ngOnInit(): void {
    this.newRide = this.fb.group({
      employeeID: ['', [Validators.required, CustomValidators.numbersOnly]],
      vehicleType: ['Car', Validators.required],
      vehicleNo: ['', [Validators.required, CustomValidators.vehicleNo]],
      vacantSeats: [1, [Validators.required, CustomValidators.numbersOnly, Validators.maxLength(3)]],
      time: ['', Validators.required],
      pickupPoint: ['', [Validators.required, CustomValidators.alphabetsOnly]],
      destination: ['', [Validators.required, CustomValidators.alphabetsOnly]]
    })
  }

  addRide() {
    if(this.newRide.invalid) {
      this.toastService.error('Please enter all mandatory fields');
    } else {
      const result = this.newRide.value;
       const existingRides = JSON.parse(localStorage.getItem('rides') || '[]');
       existingRides.push(result);
       this.toastService.success('Ride Created Successfully');
      localStorage.setItem('rides', JSON.stringify(existingRides));
      this.router.navigate(['/pickup-ride']);
      this.newRide.reset();
      console.log(this.newRide.value);
    }
  }
}
