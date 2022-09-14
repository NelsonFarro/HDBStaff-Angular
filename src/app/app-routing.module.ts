import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';

const routes: Routes = [
{
  path:'',component:HomePageComponent
},
{
  path:'reg',component:RegistrationComponent
},
{
  path:'addstaff',component:AddStaffComponent
},
{
  path:'admin',component:AdminLoginComponent
},
{
  path:'staff',component:StaffLoginComponent
},
{
  path:'admindash',component:AdminDashComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
