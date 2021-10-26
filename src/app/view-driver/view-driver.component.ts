import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverService } from '../providers/driver.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.scss']
})
export class ViewDriverComponent implements OnInit {
  table:boolean;
  table1:boolean;
 noData;any;
 searchList:any;
 driverUpdateForm: FormGroup;
  submitted=false;
  driverList:any;
  id:any;
  isLoading:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public driverService:DriverService,public router:Router) { }

  ngOnInit(): void {
 this.driverUpdateForm = this.formBuilder.group({
      
    })
    this.getDriverList();
    this.submitted= true;
    if(this.driverUpdateForm.invalid){
      return;
    }  
    }
     get f(){
    return this.driverUpdateForm.controls;
  }
    getDriverList(){
    this.driverService.viewDrivers().subscribe(data => {
      this.driverList = data.results;
      if( this.driverList.length == 0){
        this.table=false;
        this.noData = "No Drivers been added to the system."
                  }else{
                    this.table=true;
                    this.noData="";
                  }
                  
                 
    }, error => {
     this.isLoading=false;
    })
  }
    
    enableDriver(value){
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
    this.driverService.updateDriver(post,id).subscribe(res => {
      if(res.statusCode=='1'){
        this.isLoading=false;
      this.toastr.success('Driver enabled successfully.!','Success');
 this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewDriver"]));  
          }else{
            this.isLoading=false;
      this.toastr.error('Driver cant enabled','Failed');
 this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewDriver"]));   
         }
    }, error => {
      this.isLoading=false;
      this.toastr.error('Driver cant enabled','Failed');
 this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewDriver"]));    })
  }
     disableDriver(value){
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
    let isResigned="false";
   
  this.isLoading=true;
    let post = { "name": name, "address": address,"area":area,"phoneNo1":phone1,"phoneNo2":phone2,"mobileNo1":mobile1,"mobileNo2":mobile2,"licenseNo":license,"complaints":complaints,"licenseDate":licenseDate,"licenseExpiryDate":licenseExpiryDate,"isResigned":isResigned };
    this.driverService.updateDriver(post,id).subscribe(res => {
      if(res.statusCode=='1'){
        this.isLoading=false;
      this.toastr.success('Driver disabled successfully.!','Success');
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewDriver"]));
      }else{
        this.isLoading=false;
       this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewDriver"]));
      }
    }, error => {
      this.isLoading=false;
       this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/viewDriver"]));
    })
  }
   searchDriver(searchText){
    let search = searchText.target.value
    if(search==undefined||search==null||search==""){
      this.table=true;
      this.table1=false;
      if( this.driverList.length == 0){
        this.table=false;
        this.table1=false;
      }
      return;
    }this.isLoading=true;
      this.driverService.searchDriver(search).subscribe(data => {
        this.isLoading=false;
          this.searchList= data['results'];
          if( this.searchList==null){
          this.table1=false;
          this.table=false;
          this.noData = "No driver been found matching the search text."
          }else{
            this.table1=true;
            this.noData="";
            this.table=false;
          } 
      })
  }

}

