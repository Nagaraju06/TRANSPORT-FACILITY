import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewRideComponent } from './add-new-ride/add-new-ride.component';
import { PickupRideComponent } from './pickup-ride/pickup-ride.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddNewRideComponent,
    PickupRideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AddNewRideComponent,
    PickupRideComponent
  ]
})
export class FeatureModule { }
