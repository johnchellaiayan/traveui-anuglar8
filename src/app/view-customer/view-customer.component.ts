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
 table1:boolean;
 noData;any;
 customerUpdateForm: FormGroup;
  submitted=false;
  searchList:any;
  customerList:any;
  isLoading:any;
  limit:any;
  offset:any;
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
      this.isLoading=true;
      this.limit =10;
    this.offset =0
    this.customerService.viewCustomers(this.limit,this.offset).subscribe(data => {
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

     searchCustomer(searchText){
    let search = searchText.target.value
    if(search==undefined||search==null||search==""){
      this.table=true;
      this.table1=false;
      if( this.customerList.length == 0){
        this.table=false;
        this.table1=false;
      }
      return;
    }
    this.isLoading=true;
      this.customerService.searchCustomer(search).subscribe(data => {
        this.isLoading=false;
          this.searchList= data['results'];
          if( this.searchList==null){
          this.table1=false;
          this.table=false;
          this.noData = "No customer been found matching the search text."
          }else{
            this.table1=true;
            this.noData="";
            this.table=false;
          } 
      })
  }
  viewmore(){
    this.limit =10;
    this.offset =this.offset+this.limit;
        this.isLoading=true;
    this.customerService.viewCustomers(this.limit,this.offset).subscribe(data => {
      for (let i in data){
      this.customerList.push(data[i]);
      }
              this.isLoading=false;

    }, error => {
             this.isLoading=false;
    })
  }

}


