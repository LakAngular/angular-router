import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './components/guest/guest.component';


const routes: Routes = [
  { path: 'guest' , component: GuestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
