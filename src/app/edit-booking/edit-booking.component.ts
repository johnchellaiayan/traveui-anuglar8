import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../providers/booking.service';
import { DriverService } from '../providers/driver.service';
import { ToastrService } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})

export class EditBookingComponent implements OnInit {
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
  id:any;
  bookingDetails:any;
  version:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public bookingService:BookingService,public driverService:DriverService,public router:Router,public ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  let id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getBookingDetails(id);
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
      bookStatus:[],
      id:[],
      version:[],
      pickupArea:[],
      dropArea:[]

    })
  }

 get f() {
    return this.bookingForm.controls;
  }

  updateBooking(){
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
    let pickupArea=value.pickupArea;
    let dropArea=value.dropArea;
    let bookStatus="Confirmed";
    let reportDateAndTime=reportDate+" "+reportTime;
    let version=parseInt(this.version)+1;
    this.isLoading=true;
    let post = { "bookedby":bookedBy,"carName":carName,"driverName":driverName,"customerRequest":customerRequest,"custPhone1":custPhone1,"custPhone2":custPhone2,"fromAddress":fromAddress,"toAddress":toAddress,"smsTo":smsTo,"customerName":customerName,"remarks":remarks,"complaints":complaints,"reportDate":reportDateAndTime,"bookStatus":bookStatus,"version":version,"pickupArea":pickupArea,"dropArea":dropArea };
    this.bookingService.updateBooking(post,this.id).subscribe(res => {
      if(res.statusCode=='1'){
      this.isLoading=false;
      this.toastr.success('Booking Information updated successfully','Success');
      this.router.navigate(["/viewBooking"]);
      }else{
       this.isLoading=false;
      this.toastr.error('Booking Record not updated successfully','Failed');
      this.router.navigate(["/viewBooking"]);
      }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Booking Record not updated successfully','Failed');
      this.router.navigate(["/viewBooking"]);
    })
  }
    displayFn(subject){
   return subject ? subject.name : undefined;
  }
  onEnter(searchText){
   let search = searchText.target.value
    if(search==undefined||search==null||search==""){
      return;
    }
    this.isLoading=true;
      this.driverService.searchActiveDriver(search).subscribe(data => {
        this.isLoading=false;
          this.searchDriverList= data['results'];
      })
  }
  

  selectedOption(option){
      let driver = option.value;
      this.driverName=driver.name;
  }
  getBookingDetails(id) {
    if (id == undefined || id == null || id == "") {
      return;
    }
      this.isLoading=true;
      this.bookingService.getBookingDetailsById(id).subscribe(data => {
      this.isLoading=false;
      this.bookingDetails = data.results;
      this.bookedBy=this.bookingDetails.bookedby;
      this.driverName=this.bookingDetails.driverName;
      this.customerName=this.bookingDetails.customerName;
      this.custPhone1=this.bookingDetails.custPhone1
      this.custPhone2=this.bookingDetails.custPhone2;
      this.carName=this.bookingDetails.carName;
      this.smsTo=this.bookingDetails.smsTo;
      this.fromAddress=this.bookingDetails.fromAddress;
      this.toAddress=this.bookingDetails.toAddress;
      this.remarks=this.bookingDetails.remarks;
      this.complaints=this.bookingDetails.complaints;
      this.customerRequest=this.bookingDetails.customerRequest;
      this.bookStatus=this.bookingDetails.bookStatus;
      this.id=this.bookingDetails.id;
      this.pickupArea=this.bookingDetails.pickupArea;
      this.dropArea=this.bookingDetails.dropArea;
      let datetime=this.bookingDetails.reportDate;
      let split = datetime.split(" ");
      this.reportDate=split[0];
      this.reportTime=split[1];
      this.version=this.bookingDetails.version;
    }, error => {
       this.isLoading=false;
    })
  }
  }
