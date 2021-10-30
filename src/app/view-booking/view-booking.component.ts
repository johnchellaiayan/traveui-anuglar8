import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../providers/booking.service';
import { ToastrService } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {
  table:boolean;
  table1:boolean;
  table2:boolean;
  noData;any;
  searchList:any;
  bookingUpdateForm: FormGroup;
  submitted=false;
  bookingList:any;
  id:any;
  isLoading:any;
  bookingDate:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public bookingService:BookingService,public router:Router) { }
   
  ngOnInit(): void {
        this.bookingDate = new Date().toISOString().split('T')[0];
         this.bookingUpdateForm = this.formBuilder.group({
      bookingDate: ['',Validators.required],
        })
    this.getBookingsOnInit();
    this.submitted= true;
    if(this.bookingUpdateForm.invalid){
      return;
    }  
    }
     get f(){
    return this.bookingUpdateForm.controls;
  }
    getBookingsOnInit(){
      let value=new Date().toISOString().split('T')[0];
    this.bookingService.getBookingsByDate(value).subscribe(data => {
      this.bookingList = data["results"];
      if( this.bookingList == null){
        this.table=false;
        this.noData = "No bookings been added to the system."
                  }else{
                    this.table=true;
                    this.noData="";
                  }
                  
                 
    }, error => {
     this.isLoading=false;
    })
  }
    getBookingList(){
      let value=this.bookingUpdateForm.value;
      let date=value.bookingDate;
    this.bookingService.getBookingsByDate(date).subscribe(data => {
      this.bookingList = data["results"];
      if( this.bookingList == null){
        this.table=false;
        this.noData = "No bookings been added to the system."
                  }else{
                    this.table=true;
                    this.noData="";
                  }
                  
                 
    }, error => {
     this.isLoading=false;
    })
  }
    
    cancelBooking(value){
    let bookedBy=value.bookedby;
    let driverName=value.driverName;
    let customerName=value.customerName;
    let custPhone1=value.custPhone1;
    let custPhone2=value.custPhone2;
    let carName=value.carName;
    let smsTo=value.smsTo;
    let fromAddress=value.fromAddress;
    let toAddress=value.toAddress;
    let remarks=value.remarks;
    let complaints=value.complaints;
    let customerRequest=value.customerRequest;
    let reportDate=value.reportDate;
    let bookStatus="Cancelled";
    let id=value.id;
       if(window.confirm('Are sure you want to cancel this booking ?')){
    this.isLoading=true;
    let post = { "bookedby":bookedBy,"carName":carName,"driverName":driverName,"customerRequest":customerRequest,"custPhone1":custPhone1,"custPhone2":custPhone2,"fromAddress":fromAddress,"toAddress":toAddress,"smsTo":smsTo,"customerName":customerName,"remarks":remarks,"complaints":complaints,"reportDate":reportDate,"bookStatus":bookStatus };
    this.bookingService.updateBooking(post,id).subscribe(res => {
      if(res.statusCode=='1'){
      this.isLoading=false;
      this.toastr.success('Booking Information updated successfully','Success');
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));
      }else{
       this.isLoading=false;
      this.toastr.error('Booking Record not updated successfully','Failed');
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));      }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Booking Record not updated successfully','Failed');
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));    })
       }
  }
   driverIssued(value){
    let bookedBy=value.bookedby;
    let driverName=value.driverName;
    let customerName=value.customerName;
    let custPhone1=value.custPhone1;
    let custPhone2=value.custPhone2;
    let carName=value.carName;
    let smsTo=value.smsTo;
    let fromAddress=value.fromAddress;
    let toAddress=value.toAddress;
    let remarks=value.remarks;
    let complaints=value.complaints;
    let customerRequest=value.customerRequest;
    let reportDate=value.reportDate;
    let bookStatus="Completed";
    let id=value.id;
       if(window.confirm('Are sure you want to change this booking into completed?')){
    this.isLoading=true;
    let post = { "bookedby":bookedBy,"carName":carName,"driverName":driverName,"customerRequest":customerRequest,"custPhone1":custPhone1,"custPhone2":custPhone2,"fromAddress":fromAddress,"toAddress":toAddress,"smsTo":smsTo,"customerName":customerName,"remarks":remarks,"complaints":complaints,"reportDate":reportDate,"bookStatus":bookStatus };
    this.bookingService.updateBooking(post,id).subscribe(res => {
      if(res.statusCode=='1'){
      this.isLoading=false;
      this.toastr.success('Booking Information updated successfully','Success');
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));
      }else{
       this.isLoading=false;
      this.toastr.error('Booking Record not updated successfully','Failed');
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));      }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Booking Record not updated successfully','Failed');
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));    })
       }
  }


   searchBooking(searchText){
    let search = searchText.target.value
    if(search==undefined||search==null||search==""){
      this.table=true;
      this.table1=false;
      if( this.bookingList == null){
        this.table=false;
        this.table1=false;
          this.noData = "No Bookings been found matching the search text."
      }
      return;
    }this.isLoading=true;
      this.bookingService.searchBookingsByCustomer(search).subscribe(data => {
        this.isLoading=false;
          this.searchList= data['results'];
          if( this.searchList==null){
          this.table1=false;
          this.table=false;
          this.noData = "No Bookings been found matching the search text."
          }else{
            this.table1=true;
            this.noData="";
            this.table=false;
          } 
   }, error => {
      this.isLoading=false;
       this.table1=false;
          this.table=false;
      this.noData = "No Bookings been found matching the search text."
         })
  }

}

