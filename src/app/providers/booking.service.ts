import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class BookingService {
public urlList = [];
  public interval = null;
  baseURL: string = environment.apiBaseUrl;

  constructor(private http: HttpClient, public router: Router) { 
   
  }

 
 addBooking(post): Observable<any> {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.baseURL+"api/booking/bookings", post, header).pipe(map((res: Response) => {
      return res;
    }));
  }
   viewBookings(): Observable<any> {
    return this.http.get(this.baseURL+"api/booking/bookings").pipe(map((res: Response) => {
      return res;
    }));

  }
  updateBooking(post,id): Observable<any> {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put(this.baseURL+"api/booking/bookings/update/"+id, post, header).pipe(map((res: Response) => {
      return res;
    }));
  }
  getBookingDetailsById(id): Observable<any> {
   
    return this.http.get(this.baseURL+"api/booking/bookings/"+id).pipe(map((res: Response) => {
      return res;
    }))
  }
  searchBookingsByCustomer(search){

    return this.http.get(this.baseURL+"api/booking/search/customerName/"+search).pipe(map((res: Response) => {
      return res;
    }))
  }
    getBookingsByDate(search){

    return this.http.get(this.baseURL+"api/booking/bookings/search/"+search).pipe(map((res: Response) => {
      return res;
    }))
  }
}
