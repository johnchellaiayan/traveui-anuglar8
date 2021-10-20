import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../providers/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {
 table:boolean;
 noData;any;
 customerUpdateForm: FormGroup;
  submitted=false;
  customerList:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public customerService:CustomerService,public router:Router) { }

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
    this.customerService.viewCustomers().subscribe(data => {
      this.customerList = data.results;
      if( this.customerList.length == 0){
        this.table=false;
        this.noData = "No Customers been added to the system."
                  }else{
                    this.table=true;
                    this.noData="";
                  }
                  
                 
    }, error => {
     
    })
  }
    editCustomer(list){

    }
    updateCustomer(list){

    }

}

