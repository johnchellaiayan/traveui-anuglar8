import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../providers/customer.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
 customerForm: FormGroup;
  submitted = false;
  errorMsg: any;
  customerName:any;
  address:any;
  area:any;
  phone1:any
  phone2:any;
  mobile1:any;
  mobile2:any;
  carName:any;
  complaints:any;
  customerRequest:any;
  isLoading:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public customerService:CustomerService,public router:Router) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      address: ['', Validators.required],
      area: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      mobile1: ['', Validators.required],
      mobile2: ['', Validators.required],
      complaints:[],
      carName:[],
      customerRequest:[],
    })
  }

 get f() {
    return this.customerForm.controls;
  }

  addCustomer(){
   this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    let value = this.customerForm.value;
    let name = value.customerName;
    let address = value.address;
    let area=value.area;
    let phone1=value.phone1;
    let phone2=value.phone2;
    let mobile1=value.mobile1;
    let mobile2=value.mobile2;
    let carName=value.carName;
    let complaints=value.complaints;
    let customerRequest=value.customerRequest;
    
   
    this.isLoading=true;
    let post = { "name": name, "address": address,"area":area,"phoneNo1":phone1,"phoneNo2":phone2,"mobileNo1":mobile1,"mobileNo2":mobile2,"customerRequest":customerRequest,"complaints":complaints,"carName":carName };
    this.customerService.addCustomer(post).subscribe(res => {
      if(res.statusCode=='1'){
        this.isLoading=false;
      this.toastr.success('Customer Information saved successfully','Success');
      this.router.navigate(["/viewCustomer"]);
      }else{
        this.isLoading=false;
      this.toastr.error('Customer Record not saved','Failed');
      this.router.navigate(["/viewCustomer"]);
      }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Customer Record not saved','Failed');
      this.router.navigate(["/addCustomer"]);
    })
  }
  }

