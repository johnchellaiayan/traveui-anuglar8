import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverService } from '../providers/driver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.scss']
})
export class EditDriverComponent implements OnInit {
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
  driverDetail:any;
  license:any;
  complaints:any;
  licenseExpiryDate:any;
  licenseDate:any;
  id:any;
  isResigned:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public driverService:DriverService,public router:Router,public ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getDriverDetails(id);
    this.driverForm = this.formBuilder.group({
      driverName: ['', Validators.required],
      address: ['', Validators.required],
      area: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      mobile1: ['', Validators.required],
      mobile2: ['', Validators.required],
      complaints:[],
      license:[],
      licenseDate:[],
      licenseExpiryDate:[],
      id:[],
      isResigned:[]
    })
  }

 get f() {
    return this.driverForm.controls;
  }

  updateDriver(){
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
    let id=value.id;
    let license=value.license;
    let complaints=value.complaints;
    let licenseDate=value.licenseDate;
    let licenseExpiryDate=value.licenseExpiryDate;
    let isResigned=value.isResigned;
    
   
  
    let post = { "name": name, "address": address,"area":area,"phoneNo1":phone1,"phoneNo2":phone2,"mobileNo1":mobile1,"mobileNo2":mobile2,"licenseNo":license,"complaints":complaints,"licenseDate":licenseDate,"licenseExpiryDate":licenseExpiryDate,"isResigned":isResigned };
    this.driverService.updateDriver(post,this.id).subscribe(res => {
      if(res.statusCode=='1'){
      this.toastr.success('Driver Information saved successfully','Success');
      this.router.navigate(["/viewDriver"]);
      }else{
      this.toastr.error('Driver Record not saved','Failed');
      this.router.navigate(["/viewDriver"]);
      }
    }, error => {
      this.toastr.error('Driver Record not saved','Failed');
      this.router.navigate(["/viewDriver"]);
    })
  }
  getDriverDetails(id) {
    if (id == undefined || id == null || id == "") {
      return;
    }
    this.driverService.getDriverDetails(id).subscribe(data => {
    this.driverDetail = data.results;
       this.driverName = this.driverDetail.name;
       this.address = this.driverDetail.address;
        this.area = this.driverDetail.area;
        this.id = this.driverDetail.id;
        this.mobile1 = this.driverDetail.mobileNo1;
        this.mobile2 = this.driverDetail.mobileNo2;
        this.phone1 = this.driverDetail.phoneNo1;
        this.phone2 = this.driverDetail.phoneNo2;
        this.complaints = this.driverDetail.complaints;
        this.license = this.driverDetail.licenseNo;
        this.licenseDate = this.driverDetail.licenseDate;
        this.licenseExpiryDate = this.driverDetail.licenseExpiryDate;
        this.isResigned=this.driverDetail.isResigned;
    }, error => {

    })
  }
  }
