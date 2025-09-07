import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RideService } from 'src/app/Shared/ride.service';

@Component({
  selector: 'app-pickup-ride',
  templateUrl: './pickup-ride.component.html',
  styleUrls: ['./pickup-ride.component.scss']
})
export class PickupRideComponent implements OnInit {
  ride: any[] = [];
  employeeID: { [key: number]: string } = {};
  showEmployeeIdInput: number | null = null;
  filterdData: any[] = [];

  constructor(
    private route: Router,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.ride = JSON.parse(localStorage.getItem('rides') || '[]');
    this.filterdData = [...this.ride];
  }

  searchVechileType(event: any) {
    const searchedText = event.target.value?.toLowerCase();
    this.filterdData = this.ride.filter(item =>
      item.vehicleType?.toLowerCase().includes(searchedText)
    );
  }

  onRouterAddNewRide() {
    this.route.navigate(['/new-ride']);
  }

  showEmployeeInput(id: number) {
    this.showEmployeeIdInput = id;
  }

  bookRide(index: number) {
    const enteredEmployeeID = this.employeeID[index]?.trim().toLowerCase();

    if (!enteredEmployeeID) {
      this.toastService.error('Enter your Employee ID to book');
      return;
    }

    const selectedRide = this.ride[index];

    if (selectedRide.employeeID?.trim().toLowerCase() === enteredEmployeeID) {
      this.toastService.error('You cannot book your own ride');
      return;
    }

    if (!selectedRide.bookedEmployees) {
      selectedRide.bookedEmployees = [];
    }

    const alreadyBooked = selectedRide.bookedEmployees.some(
      (id: string) => id.trim().toLowerCase() === enteredEmployeeID
    );

    if (alreadyBooked) {
      this.toastService.error('You already booked this ride');
      return;
    }

    if (selectedRide.vacantSeats <= 0) {
      this.toastService.error('No seats available');
      return;
    }

    selectedRide.vacantSeats -= 1;
    selectedRide.bookedEmployees.push(enteredEmployeeID);
    localStorage.setItem('rides', JSON.stringify(this.ride));
    this.toastService.success('Ride booked successfully');
    this.employeeID[index] = '';
    this.showEmployeeIdInput = null;
  }
}
