import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../providers/dashboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 dashboardForm: FormGroup;
  submitted=false;
  res:any;
  constructor(public formBuilder: FormBuilder,public toastr:ToastrService,public dashboardService:DashboardService,public router:Router) { }

  ngOnInit(): void {
 this.dashboardForm = this.formBuilder.group({
     
    })
    this.getStatistics();
    this.submitted= true;
    if(this.dashboardForm.invalid){
      return;
    }  
    }
     get f(){
    return this.dashboardForm.controls;
  }
    getStatistics(){
    this.dashboardService.getStatistics().subscribe(data => {
      this.res = data['results'];
                 
    }, error => {
     
    })
  }

}


