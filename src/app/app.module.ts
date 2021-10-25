import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { ViewDriverComponent } from './view-driver/view-driver.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerService } from './providers/customer.service';
import { DriverService } from './providers/driver.service';
import { BookingService } from './providers/booking.service';
import { DashboardService } from './providers/dashboard.service';
import { environment } from '../environments/environment';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    AddBookingComponent,
    ViewBookingComponent,
    AddDriverComponent,
    ViewDriverComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SignupComponent,
    EditCustomerComponent,
    EditDriverComponent,
    EditBookingComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmazingTimePickerModule, // this line you need
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut:1000,
        progressBar:true
      }
    ),
 // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  providers: [CustomerService,DriverService,BookingService,DashboardService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
