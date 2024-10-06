import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CLLoginserviceService {
  //:-This is For Backend Api call using below url
  private userUrl = 'http://localhost:8065/api/auth';
  constructor(private http: HttpClient) { }
  validateUser() {

    return this.http.get(this.userUrl+'?username=Ranjan&password=NGO');
   
  }

}
