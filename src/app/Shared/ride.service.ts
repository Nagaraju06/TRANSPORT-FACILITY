import { Injectable } from '@angular/core';

interface Ride {
  employeeId: string,
  vehicleType: string,
  vehicleNo: string,
  vacantSeats: number,
  time: string,
  pickupPoint: string,
  destination: string,
  bookedBy: string[]
}

@Injectable({
  providedIn: 'root'
})

export class RideService {

  private rides: Ride[] = [];

  constructor() { }

  newRide(rides: Ride) {
    this.rides.push({...rides, bookedBy: []});
  }

  getRide() {
    return this.rides;
  }

  rideBook(index:number, employeeID: string) {
    const ride = this.rides[index];
    console.log(ride);
    
    if (ride.employeeId === employeeID) {
      return 'You cannot book your own ride!';
    }

    if (ride.bookedBy.includes(employeeID)) {
      return 'You already booked this ride!';
    }

    if (ride.vacantSeats <= 0) {
      return 'No seats available!';
    }

    ride.vacantSeats -= 1;
    ride.bookedBy.push(employeeID);

    return 'Booking successful!';

  }
}
