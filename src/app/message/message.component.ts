import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../providers/common.service';
import { BookingService } from '../providers/booking.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
messageForm: FormGroup;
  submitted = false;
  errorMsg: any;
  comments:any;
  whatsappTo:any;
  smsTo:any;
  customerPhone1:any
  driverPhone1:any;
  whatsapp:any;
  sms:any;
  customer:any;
  driver:any;
bookingDetails:any;
  isLoading:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public customerService:CommonService,public bookingService:BookingService,public router:Router,public ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getBookingDetails(id);
    this.messageForm = this.formBuilder.group({
      comments: ['', Validators.required],
      customerPhone1: [],
      driverPhone1: [],
      whatsapp:[],
      sms:[],
      customer:[],
      driver:[]
    })
  }

 get f() {
    return this.messageForm.controls;
  }

  sendmessage(){
   this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    let value = this.messageForm.value;
    let comments = value.comments;
    let sms = value.sms;
    let custphone=value.customerPhone1;
    let driverphone=value.driverPhone1;
    let customer=value.customer;
    let driver=value.driver;
    let whatsapp=value.whatsapp;
    if(customer==true && driver==true){
      if(sms){
     this.smsTo="BOTH";
      }
      if(whatsapp){
        this.whatsappTo="BOTH";
      }
    }else if(customer==true && driver!=true){ 
       if(sms){
      this.smsTo="CUSTOMER";
      }
      if(whatsapp){
         this.whatsappTo="CUSTOMER";
      }
    }else if(customer!=true && driver==true){ 
       if(sms){
     this.smsTo="DRIVER";
      }
      if(whatsapp){
         this.whatsappTo="DRIVER";
      }
    }
   
    this.isLoading=true;
    let post = { "comments": comments, "smsto": this.smsTo,"driverphone":driverphone,"custphone":custphone,"whatsappto":this.whatsappTo };
    this.customerService.sendmessage(post).subscribe(res => {
      if(res.statusCode=='1'){
        this.isLoading=false;
      this.toastr.success(' Message sent successfully','Success');
      this.router.navigate(["/viewBooking"]);
      }else{
        this.isLoading=false;
      this.toastr.error('Message not sent','Failed');
      this.router.navigate(["/viewBooking"]);
      }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Message not sent','Failed');
      this.router.navigate(["/viewBooking"]);
    })
  }
  getBookingDetails(id){
 if (id == undefined || id == null || id == "") {
      return;
    }
      this.isLoading=true;
      this.bookingService.getBookingDetailsById(id).subscribe(data => {
      this.isLoading=false;
      this.bookingDetails = data.results;
      this.customerPhone1=this.bookingDetails.custPhone1
    }, error => {
       this.isLoading=false;
    })
  }
  }


