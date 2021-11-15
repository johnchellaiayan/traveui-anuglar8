import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {AddBookingComponent} from './add-booking/add-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { ViewDriverComponent } from './view-driver/view-driver.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { LoginGuard } from './login.guard';
import { MessageComponent } from './message/message.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { LiscenseExpiredDriversComponent } from './liscense-expired-drivers/liscense-expired-drivers.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [LoginGuard]},
  { path: 'dashboard', component: DashboardComponent,  },
  { path: 'addBooking', component: AddBookingComponent, canActivate: [LoginGuard] },
  { path: 'viewBooking', component: ViewBookingComponent, canActivate: [LoginGuard] },
  { path: 'addDriver', component: AddDriverComponent, canActivate: [LoginGuard] },
  { path: 'viewDriver', component: ViewDriverComponent, canActivate: [LoginGuard] },
  { path: 'addCustomer', component: AddCustomerComponent, canActivate: [LoginGuard] },
  { path: 'viewCustomer', component: ViewCustomerComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetPasswordComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'editCustomer/:id', component: EditCustomerComponent, canActivate: [LoginGuard] },
  { path: 'editDriver/:id', component: EditDriverComponent , canActivate: [LoginGuard]},
  { path: 'editBooking/:id', component: EditBookingComponent , canActivate: [LoginGuard]},
  { path: 'message/:id', component: MessageComponent , canActivate: [LoginGuard]},
  { path: 'addUser', component: AddUserComponent, canActivate: [LoginGuard] },
  { path: 'viewUser', component: ViewUserComponent, canActivate: [LoginGuard] },
  { path: 'viewLicenseExpiredDrivers', component: LiscenseExpiredDriversComponent, canActivate: [LoginGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
