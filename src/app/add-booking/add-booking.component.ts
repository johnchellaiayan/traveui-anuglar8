import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../providers/customer.service';
import { BookingService } from '../providers/booking.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
bookingForm: FormGroup;
  submitted = false;
  errorMsg: any;
  customerName:any;
  customerSearch:any;
  driverSearch:any;
  searchCustomerList:any;
  searchDriverList:any;
  bookedBy:any;
  driverName:any;
  reportDate:any;
  pickupArea:any;
  dropArea:any;
  custPhone1:any;
  custPhone2:any;
  carName:any;
  smsTo:any;
  fromAddress:any;
  toAddress:any;
  remarks:any;
  complaints:any;
  customerRequest:any;
  bookStatus:any;
  isLoading:any;
  reportTime:any;
  constructor(public formBuilder: FormBuilder,public router:Router,public bookingService:BookingService, public customerService:CustomerService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.reportTime="00:00";
    this.bookingForm = this.formBuilder.group({
      customerName: [],
      customerSearch: [],
      driverSearch: [],
      bookedBy:[],
      driverName:[],
      reportDate:[],
      reportTime:[],
      custPhone1:[],
      custPhone2:[],
      carName:[],
      smsTo:[],
      fromAddress:[],
      toAddress:[],
      remarks:[],
      complaints:[],
      customerRequest:[],
      bookStatus:[]
      
    })
  }

 get f() {
    return this.bookingForm.controls;
  }

  addBooking(){
    this.submitted=true;
    let value = this.bookingForm.value;
        if(value.customerName==""||value.customerName==null||value.customerName==undefined){
          return
        }
    let bookedBy=value.bookedBy;
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
    let reportTime=value.reportTime;3
    let reportDate=value.reportDate;
    let bookStatus="Initiated";
    let reportDateAndTime=reportDate+" "+reportTime+":00";
    this.isLoading=true;
    let post = { "bookedby":bookedBy,"carName":carName,"driverName":driverName,"customerRequest":customerRequest,"custPhone1":custPhone1,"custPhone2":custPhone2,"fromAddress":fromAddress,"toAddress":toAddress,"smsTo":smsTo,"customerName":customerName,"remarks":remarks,"complaints":complaints,"reportDate":reportDateAndTime,"bookStatus":bookStatus };
    this.bookingService.addBooking(post).subscribe(res => {
      if(res.statusCode=='1'){
      this.isLoading=false;
      this.toastr.success('Booking Information saved successfully','Success');
      this.router.navigate(["/viewBooking"]);
      }else{
       this.isLoading=false;
      this.toastr.error('Booking Record not saved','Failed');
      this.router.navigate(["/viewBooking"]);
      }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Booking Record not saved','Failed');
      this.router.navigate(["/viewBooking"]);
    })
  }

  displayFn(subject){
   return subject ? subject.name : undefined;
  }
   displayFn1(subject){
   return subject ? subject.name : undefined;
  }
  onEnter(searchText){
   let search = searchText.target.value
    if(search==undefined||search==null||search==""){
      return;
    }
    this.isLoading=true;
      this.customerService.searchCustomer(search).subscribe(data => {
        this.isLoading=false;
          this.searchCustomerList= data['results'];
      })
  }
  

  selectedOption(option){
    let customer = option.value;
    this.customerName=customer.name;
    this.carName=customer.carName;
    this.custPhone1=customer.phoneNo1;
    this.custPhone2=customer.phoneNo2;
    this.customerRequest=customer.customerRequest;

  }
}
