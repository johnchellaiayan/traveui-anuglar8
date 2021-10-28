import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class DriverService {
 public urlList = [];
  public interval = null;
  baseURL: string = environment.apiBaseUrl;

  constructor(private http: HttpClient, public router: Router) { 
   
  }

 
 addDriver(post): Observable<any> {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.baseURL+"api/driver/drivers", post, header).pipe(map((res: Response) => {
      return res;
    }));
  }
   viewDrivers(): Observable<any> {
    return this.http.get(this.baseURL+"api/driver/drivers").pipe(map((res: Response) => {
      return res;
    }));

  }
  updateDriver(post,id): Observable<any> {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put(this.baseURL+"api/driver/drivers/"+id, post, header).pipe(map((res: Response) => {
      return res;
    }));
  }
  getDriverDetails(id): Observable<any> {
    id = id.toString();

    let para = new HttpParams();
    para = para.set("", id);

    let value = { params: para }
    return this.http.get(this.baseURL+"api/driver/drivers/"+id).pipe(map((res: Response) => {
      return res;
    }))
  }
  searchDriver(search){

    return this.http.get(this.baseURL+"api/driver/search/name/"+search).pipe(map((res: Response) => {
      return res;
    }))
  }
   searchActiveDriver(search){

    return this.http.get(this.baseURL+"api/driver/search/activedrivers/"+search).pipe(map((res: Response) => {
      return res;
    }))
  }
}
