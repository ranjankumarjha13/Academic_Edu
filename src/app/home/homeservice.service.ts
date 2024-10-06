import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CLHomeserviceService {
  //This is Backend Api Call using beow Url
  private userUrl = 'http://localhost:8065/api/student/save';
  constructor(private http: HttpClient) { }
  registerUser(studentDTo: { [x: string]: string; }) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    var httpOptions = {

      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    };

    const headers = new HttpHeaders().set('content-type', 'application/json');

    //s return this.http.post(this.userUrl, JSON.stringify(studentDTo),httpOptions)
    // return this.http.get(this.userUrl)
    // return this.http.get(this.userUrl+'?firstName='+studentDTo['firstName']&'lastName='+'');
    return this.http.get(this.userUrl + '?firstName=' + studentDTo['firstName']
      + '&lastName=' + studentDTo['lastName']
      + '&emailId=' + studentDTo['emailId'] + '&regId=' + studentDTo['regId']
      + '&fatherName=' + studentDTo['fatherName'] + '&mobileNumber=' + studentDTo['mobileNumber']
      + '&dateOfBirth=' + studentDTo['dateOfBirth'] + '&currentClass=' + studentDTo['currentClass']
      + '&date=' + studentDTo['date'] + '&cAddress=' + studentDTo['cAddress']
      + '&pAddress=' + studentDTo['pAddress'] + '&gender=' + studentDTo['gender']
      + '&course=' + studentDTo['course'] + '&courseFee=' + studentDTo['courseFee']
      + '&payMode=' + studentDTo['payMode'] + '&pay=' + studentDTo['pay']
      + '&dueFee=' + studentDTo['dueFee'] + '&month=' + studentDTo['month'] 
      + '&motherName=' + studentDTo['motherName']);
  }

  getStudentList(){
    let sGetUrl="http://localhost:8065/api/student/getStudent"
    return this.http.get(sGetUrl)
  }
}
