import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {
  headers:any;
  rows:any;
  constructor() { }

  ngOnInit(): void {
    this.headers = ["Booking No", "Booked Person", "Driver Name", "Report Time", "Customer Name","PickUp Area","Drop Area","Customer Phone1","vechile Name","From Address","To Address","Customer Request","Action"];

  this.rows = [
    {
      "Booking No" : "1",
      "Booked Person" : "Rahul",
      "Driver Name" : "21",
      "Report Time" : "Male",
      "Customer Name" : "India",
      "PickUp Area":"Medavakkam",
      "Drop Area":"Vellore",
      "Customer Phone1":"2342421342314",
      "vechile Name":"Tata",
      "From Address":"Medavakkam main Road",
      "To Address":"Vellore Bus Stand",
      "Remarks":"NA",
      "SMS To":"4563432452345"
    },
    {
      "Booking No" : "2",
      "Booked Person" : "Rahul",
      "Driver Name" : "21",
      "Report Time" : "Male",
      "Customer Name" : "India",
      "PickUp Area":"Medavakkam",
      "Drop Area":"Vellore",
      "Customer Phone1":"2342421342314",
      "vechile Name":"Tata",
      "From Address":"Medavakkam main Road",
      "To Address":"Vellore Bus Stand",
      "Remarks":"NA",
      "SMS To":"4563432452345"
    },
    {
      "Booking No" : "3",
      "Booked Person" : "Rahul",
      "Driver Name" : "21",
      "Report Time" : "Male",
      "Customer Name" : "India",
      "PickUp Area":"Medavakkam",
      "Drop Area":"Vellore",
      "Customer Phone1":"2342421342314",
      "vechile Name":"Tata",
      "From Address":"Medavakkam main Road",
      "To Address":"Vellore Bus Stand",
      "Remarks":"NA",
      "SMS To":"4563432452345"
    },
    { "Booking No" : "4",
      "Booked Person" : "Rahul",
      "Driver Name" : "21",
      "Report Time" : "Male",
      "Customer Name" : "India",
      "PickUp Area":"Medavakkam",
      "Drop Area":"Vellore",
      "Customer Phone1":"2342421342314",
      "vechile Name":"Tata",
      "From Address":"Medavakkam main Road",
      "To Address":"Vellore Bus Stand",
      "Remarks":"NA",
      "SMS To":"4563432452345"
    },
    {
      "Booking No" : "5",
      "Booked Person" : "Rahul",
      "Driver Name" : "21",
      "Report Time" : "Male",
      "Customer Name" : "India",
      "PickUp Area":"Medavakkam",
      "Drop Area":"Vellore",
      "Customer Phone1":"2342421342314",
      "vechile Name":"Tata",
      "From Address":"Medavakkam main Road",
      "To Address":"Vellore Bus Stand",
      "Remarks":"NA",
      "SMS To":"4563432452345"
    },
    {
      "Booking No" : "6",
      "Booked Person" : "Rahul",
      "Driver Name" : "21",
      "Report Time" : "Male",
      "Customer Name" : "India",
      "PickUp Area":"Medavakkam",
      "Drop Area":"Vellore",
      "Customer Phone1":"2342421342314",
      "vechile Name":"Tata",
      "From Address":"Medavakkam main Road",
      "To Address":"Vellore Bus Stand",
      "Remarks":"NA",
      "SMS To":"4563432452345"
    }
  ]
  }

}
