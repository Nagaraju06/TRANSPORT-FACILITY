import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewRideComponent } from './add-new-ride/add-new-ride.component';
import { PickupRideComponent } from './pickup-ride/pickup-ride.component';

const routes: Routes = [
    { path: 'new-ride', component: AddNewRideComponent },
    { path: 'pickup-ride', component: PickupRideComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }