import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../providers/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {
  localStorage.clear();

  }
  login(){
      localStorage.setItem('success', "success");
      this.router.navigate(["dashboard"]);
  }

}
