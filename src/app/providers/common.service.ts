import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 public urlList = [];
  public interval = null;
  baseURL: string = environment.apiBaseUrl;

  constructor(private http: HttpClient, public router: Router) { 
   
  }

 
 addUser(post): Observable<any> {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.baseURL+"api/users/new-user-registeration", post, header).pipe(map((res: Response) => {
      return res;
    }));
  }
    viewUsers(): Observable<any> {
       return this.http.get(this.baseURL+"api/users/users").pipe(map((res: Response) => {
         return res;
          }));

  }
  sendmessage(post): Observable<any> {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.baseURL+"api/common/sendmessage", post, header).pipe(map((res: Response) => {
      return res;
    }));
  }

  
}
