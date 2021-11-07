import { Component, OnInit } from '@angular/core';
 import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../providers/common.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
 userForm: FormGroup;
  submitted = false;
  errorMsg: any;
  pwdMsg:any;
  firstName:any;
  lastName:any;
  dob:any;
  mobileNumber:any;
  email:any;
  address:any;
  password:any;
  password1:any;
  isLoading:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public commonService:CommonService,public router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: [],
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address:['', Validators.required],
      password1: ['', Validators.required],
    })
  }

 get f() {
    return this.userForm.controls;
  }

  addUser(){
   this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    let value = this.userForm.value;
    let firstName = value.firstName;
    let lastName = value.lastName;
    let address=value.address;
    let email=value.email;
    let mobileNumber=value.mobileNumber;
    let dob=value.dob;
    let password=value.password;
    let password1=value.password1;
    let roles=[{"id":"2","name":"admin"}];
    if(password===password1){
      this.pwdMsg="";
    }else{
      this.pwdMsg="Password doesnt match.!";
      return
    }
   
    this.isLoading=true;
    let post = { "firstName": firstName, "address": address,"mobileNumber":mobileNumber,"password":password,"lastName":lastName,"dob":dob,"email":email,"roles":roles };
    this.commonService.addUser(post).subscribe(res => {
      if(res.statusCode=='1'){
        this.isLoading=false;
      this.toastr.success('User Information saved successfully','Success');
      this.router.navigate(["/dashboard"]);
      }else{
        this.isLoading=false;
      this.toastr.error('User Record not saved','Failed');
      this.router.navigate(["/dashboard"]);
      }
    }, error => {
      this.isLoading=false;
      this.toastr.error('User Record not saved','Failed');
      this.router.navigate(["/dashboard"]);
    })
  }
  }
