import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 public urlList = [];
  public interval = null;
  baseURL: string = environment.apiBaseUrl;

  constructor(private http: HttpClient, public router: Router) { 
   
  }

 
 addCustomer(post): Observable<any> {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.baseURL+"api/customer/customers", post, header).pipe(map((res: Response) => {
      return res;
    }));
  }
   viewCustomers(limit,offset): Observable<any> {
    return this.http.get(this.baseURL+"api/customer/customers/"+limit+"/"+offset).pipe(map((res: Response) => {
      return res;
    }));

  }
  updateCustomer(post,id): Observable<any> {
  id = id.toString();

    let para = new HttpParams();
    para = para.set("", id);

    let value = { params: para }
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put(this.baseURL+"api/customer/customers/"+id, post,header).pipe(map((res: Response) => {
      return res;
    }));
  }
  getCustomerDetails(id): Observable<any> {
    id = id.toString();

    let para = new HttpParams();
    para = para.set("", id);

    let value = { params: para }
    return this.http.get(this.baseURL+"api/customer/customers/"+id).pipe(map((res: Response) => {
      return res;
    }))
  }
 searchCustomer(search){

    return this.http.get(this.baseURL+"api/customer/search/"+search).pipe(map((res: Response) => {
      return res;
    }))
  }
}
