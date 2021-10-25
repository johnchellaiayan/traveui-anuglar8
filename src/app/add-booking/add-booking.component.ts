import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  custPhone2:any;
  carName:any;
  smsTo:any;
  fromAddress:any;
  toAddress:any;
  remark:any;
  complaints:any;
  customerRequest:any;
  bookStatus:any;
  isLoading:any;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isLoading=false;
    this.bookingForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerSearch: [],
      driverSearch: [],
      bookedBy:[],
      driverName:[],
      reportDate:[],
      pickupArea:[],
      dropArea:[],
      custPhone2:[],
      carName:[],
      smsTo:[],
      fromAddress:[],
      toAddress:[],
      remark:[],
      complaints:[],
      customerRequest:[],
      bookStatus:[]
      
    })
  }

 get f() {
    return this.bookingForm.controls;
  }

  addBooking(){
   this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    }
  }
  displayFn(subject){
   return subject ? subject.name : undefined;
  }
   displayFn1(subject){
   return subject ? subject.name : undefined;
  }
}
