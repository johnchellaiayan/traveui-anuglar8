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
 loginForm: FormGroup;
  submitted = false;
  msg: any;
  isLoading:any;
  username:any;
  password:any;
 constructor (public formBuilder: FormBuilder, public authService: LoginService, private router: Router) {


  }

  ngOnInit():void {
    localStorage.clear();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // this.spinner.show()
    // localStorage.removeItem('success');

  }
   get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let value = this.loginForm.value;
    let username=value.username;
    let password=value.password;
    let post={"username":username,"password":password};
    this.isLoading=true;
    this.authService.login(post).subscribe(resp => {
      this.isLoading=false;
      let res = resp["results"];
      if(res==null){
              this.isLoading=false;
       this.msg="Entered wrong username or password";
        return
      }
      let user=res.user;
      if (resp.message == "Login Successfully.") {
        localStorage.setItem('success', "success");
        localStorage.setItem('uname', user.firstName);
        localStorage.setItem('lname', user.lastName);
        this.router.navigateByUrl('/dashboard');
      }else{
              this.isLoading = false;
          this.msg="Entered wrong username or password";
      }
    }, error => {
      this.msg = "Entered wrong username or password";
     
      this.isLoading = false;
    });

  }

}