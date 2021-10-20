import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
bookingForm: FormGroup;
  submitted = false;
  errorMsg: any;
  customerName:any;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      customerName: ['', Validators.required],
    })
  }

 get f() {
    return this.bookingForm.controls;
  }

  addBooking(){
   this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    }
  }
}
