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
         this.bookingUpdateForm = this.formBuilder.group({
      bookingDate: ['',Validators.required],
        })
    this.getBookingList();
    this.bookingDate = new Date().toISOString().split('T')[0];
    this.submitted= true;
    if(this.bookingUpdateForm.invalid){
      return;
    }  
    }
     get f(){
    return this.bookingUpdateForm.controls;
  }
    getBookingList(){
      let value=this.bookingUpdateForm.value;
      let date=value.bookingDate;
    this.bookingService.getBookingsByDate(date).subscribe(data => {
      this.bookingList = data["results"];
      if( this.bookingList.length == 0){
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
    let name = value.name;
    let address = value.address;
    let area=value.area;
    let phone1=value.phoneNo1;
    let phone2=value.phoneNo2;
    let mobile1=value.mobileNo1;
    let mobile2=value.mobileNo2;
    let id=value.id;
    let license=value.licenseNo;
    let complaints=value.complaints;
    let licenseDate=value.licenseDate;
    let licenseExpiryDate=value.licenseExpiryDate;
    let isResigned="true";
   
  this.isLoading=true;
    let post = { "name": name, "address": address,"area":area,"phoneNo1":phone1,"phoneNo2":phone2,"mobileNo1":mobile1,"mobileNo2":mobile2,"licenseNo":license,"complaints":complaints,"licenseDate":licenseDate,"licenseExpiryDate":licenseExpiryDate,"isResigned":isResigned };
    this.bookingService.updateBooking(post,id).subscribe(res => {
      if(res.statusCode=='1'){
        this.isLoading=false;
      this.toastr.success('Booking updated successfully.!','Success');
 this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));  
          }else{
            this.isLoading=false;
      this.toastr.error('Booking cant update successfully','Failed');
 this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));   
         }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Booking cant update successfully','Failed');
 this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewBooking"]));    })
  }

   searchBooking(searchText){
    let search = searchText.target.value
    if(search==undefined||search==null||search==""){
      this.table=true;
      this.table1=false;
      if( this.bookingList.length == 0){
        this.table=false;
        this.table1=false;
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
      })
  }

}

