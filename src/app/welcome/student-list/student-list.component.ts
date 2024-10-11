import { Component, OnInit } from '@angular/core';
import { CLHomeserviceService } from 'src/app/home/homeservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [CLHomeserviceService]
})
export class CLStudentListComponent implements OnInit {
  isResponse = true
  objStudent: any;
  constructor(private clHomeservice: CLHomeserviceService) { }

  ngOnInit() {
    this.getStudentList();
    this.isResponse = false
  }
  getStudentList() {
    
    this.objStudent = [{
      "studentId": "34567", "regId": "23456", "firstName": "Ranjan", "lastName": "Kumar Jha", "emailId": "ranjan@gmail.com",
      "fatherName": "L.R.Jha", "motherName": "Pramila Jha", "mobileNumber": "9939877992", "dateOfBirth": "13-sept-1994", "currentClass": "Java",
      "date": "12/09/2007", "cAddress": "UJAN GANGAULI TOLE", "pAddress": "Bangalore 560039", "gender": "Male", "course": "Java", "courseFee": "1500",
      "payMode": "CASH", "pay": "100", "dueFee": "1400", "month": "September"

    },
    {
      "studentId": "98787", "regId": "23456", "firstName": "Surya", "lastName": "Kumar Jha", "emailId": "ranjan@gmail.com",
      "fatherName": "L.R.Jha", "motherName": "Pramila Jha", "mobileNumber": "9939877992", "dateOfBirth": "13-sept-1994", "currentClass": "Java",
      "date": "12/09/2007", "cAddress": "UJAN GANGAULI TOLE", "pAddress": "Bangalore 560039", "gender": "Male", "course": "Java", "courseFee": "1500",
      "payMode": "CASH", "pay": "100", "dueFee": "1400", "month": "September"

    },
    {
      "studentId": "Ranjan", "regId": "23456", "firstName": "Ranjan", "lastName": "Kumar Jha", "emailId": "ranjan@gmail.com",
      "fatherName": "L.R.Jha", "motherName": "Pramila Jha", "mobileNumber": "9939877992", "dateOfBirth": "13-sept-1994", "currentClass": "Java",
      "date": "12/09/2007", "cAddress": "UJAN GANGAULI TOLE", "pAddress": "Bangalore 560039", "gender": "Male", "course": "Java", "courseFee": "1500",
      "payMode": "CASH", "pay": "100", "dueFee": "1400", "month": "September"

    },
    {
      "studentId": "Ranjan", "regId": "23456", "firstName": "Ranjan", "lastName": "Kumar Jha", "emailId": "ranjan@gmail.com",
      "fatherName": "L.R.Jha", "motherName": "Pramila Jha", "mobileNumber": "9939877992", "dateOfBirth": "13-sept-1994", "currentClass": "Java",
      "date": "12/09/2007", "cAddress": "UJAN GANGAULI TOLE", "pAddress": "Bangalore 560039", "gender": "Male", "course": "Java", "courseFee": "1500",
      "payMode": "CASH", "pay": "100", "dueFee": "1400", "month": "September"

    },
    {
      "studentId": "Ranjan", "regId": "23456", "firstName": "Ranjan", "lastName": "Kumar Jha", "emailId": "ranjan@gmail.com",
      "fatherName": "L.R.Jha", "motherName": "Pramila Jha", "mobileNumber": "9939877992", "dateOfBirth": "13-sept-1994", "currentClass": "Java",
      "date": "12/09/2007", "cAddress": "UJAN GANGAULI TOLE", "pAddress": "Bangalore 560039", "gender": "Male", "course": "Java", "courseFee": "1500",
      "payMode": "CASH", "pay": "100", "dueFee": "1400", "month": "September"

    },
    {
      "studentId": "Ranjan", "regId": "23456", "firstName": "Ranjan", "lastName": "Kumar Jha", "emailId": "ranjan@gmail.com",
      "fatherName": "L.R.Jha", "motherName": "Pramila Jha", "mobileNumber": "9939877992", "dateOfBirth": "13-sept-1994", "currentClass": "Java",
      "date": "12/09/2007", "cAddress": "UJAN GANGAULI TOLE", "pAddress": "Bangalore 560039", "gender": "Male", "course": "Java", "courseFee": "1500",
      "payMode": "CASH", "pay": "100", "dueFee": "1400", "month": "September"

    }, {
      "studentId": "Ranjan", "regId": "23456", "firstName": "Ranjan", "lastName": "Kumar Jha", "emailId": "ranjan@gmail.com",
      "fatherName": "L.R.Jha", "motherName": "Pramila Jha", "mobileNumber": "9939877992", "dateOfBirth": "13-sept-1994", "currentClass": "Java",
      "date": "12/09/2007", "cAddress": "UJAN GANGAULI TOLE", "pAddress": "Bangalore 560039", "gender": "Male", "course": "Java", "courseFee": "1500",
      "payMode": "CASH", "pay": "100", "dueFee": "1400", "month": "September"

    }]
    // this.clHomeservice.getStudentList().subscribe(res => {
    //   this.isResponse = false
    //   console.log("res")
    //   console.log(res)
    //   //this.objStudent=res['body']
    //   console.log(this.objStudent)

    // })
  }
}
