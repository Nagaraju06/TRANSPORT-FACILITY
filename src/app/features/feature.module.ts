import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewRideComponent } from './add-new-ride/add-new-ride.component';
import { PickupRideComponent } from './pickup-ride/pickup-ride.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomTimePipe } from '../Shared/custom-time.pipe';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AddNewRideComponent,
    PickupRideComponent,
    CustomTimePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    AddNewRideComponent,
    PickupRideComponent
  ]
})
export class FeatureModule { }
