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
 noData;any;
 driverUpdateForm: FormGroup;
  submitted=false;
  driverList:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public driverService:DriverService,public router:Router) { }

  ngOnInit(): void {
 this.driverUpdateForm = this.formBuilder.group({
      description: ['',Validators.required],
      symptom: ['',Validators.required],
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
     
    })
  }
    editDriver(list){

    }
    updateDriver(list){

    }

}

