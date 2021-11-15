import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../providers/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
 table:boolean;
 table1:boolean;
 noData;any;
 customerUpdateForm: FormGroup;
  submitted=false;
  searchList:any;
  customerList:any;
  isLoading:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public customerService:CommonService,public router:Router) { }

  ngOnInit(): void {
 this.customerUpdateForm = this.formBuilder.group({
      description: ['',Validators.required],
      symptom: ['',Validators.required],
    })
    this.getCustomerList();
    this.submitted= true;
    if(this.customerUpdateForm.invalid){
      return;
    }  
    }
     get f(){
    return this.customerUpdateForm.controls;
  }
    getCustomerList(){
      this.isLoading=true;
    this.customerService.viewUsers().subscribe(data => {
      this.isLoading=false;
      this.customerList = data.results;
      if( this.customerList.length == 0){
        this.table=false;
        this.noData = "No Customers been added to the system."
                  }else{
                    this.table=true;
                    this.noData="";
                  }
                  
                 
    }, error => {
     this.isLoading=false;
    })
  }

}
