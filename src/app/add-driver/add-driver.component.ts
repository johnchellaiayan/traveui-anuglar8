import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverService } from '../providers/driver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {
driverForm: FormGroup;
  submitted = false;
  errorMsg: any;
  driverName:any;
  address:any;
  area:any;
  phone1:any
  phone2:any;
  mobile1:any;
  mobile2:any;
  license:any;
  licenseDate:any;
  licenseExpiryDate:any;

  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public driverService:DriverService,public router:Router) { }

  ngOnInit(): void {
    this.driverForm = this.formBuilder.group({
      driverName: ['', Validators.required],
      address: ['', Validators.required],
      area: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      mobile1: ['', Validators.required],
      mobile2: ['', Validators.required],
      license:['', Validators.required],
      licenseDate:['', Validators.required],
      licenseExpiryDate:['', Validators.required]
    })
  }

 get f() {
    return this.driverForm.controls;
  }

  addDriver(){
   this.submitted = true;
    if (this.driverForm.invalid) {
      return;
    }
    let value = this.driverForm.value;
    let name = value.driverName;
    let address = value.address;
    let area=value.area;
    let phone1=value.phone1;
    let phone2=value.phone2;
    let mobile1=value.mobile1;
    let mobile2=value.mobile2;
    let license=value.license;
    let licenseDate=value.licenseDate;
    let licenseExpiryDate=value.licenseExpiryDate;
    
   
  
    let post = { "name": name, "address": address,"area":area,"phoneNo1":phone1,"phoneNo2":phone2,"mobileNo1":mobile1,"mobileNo2":mobile2,"licenseNo":license,"licenseDate":licenseDate,"licenseExpiryDate":licenseExpiryDate };
    this.driverService.addDriver(post).subscribe(res => {
      if(res.statusCode=='1'){
      this.toastr.success('Driver Information saved successfully','Success');
      this.router.navigate(["/viewDriver"]);
      }else{
      this.toastr.error('Driver Record not saved','Failed');
      this.router.navigate(["/viewDriver"]);
      }
    }, error => {
      this.toastr.error('Driver Record not saved','Failed');
      this.router.navigate(["/addDriver"]);
    })
  }
  }

