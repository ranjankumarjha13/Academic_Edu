import { Component, OnInit } from '@angular/core';
import { CLHomeserviceService } from 'src/app/home/homeservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers:[CLHomeserviceService]
})
export class CLStudentListComponent implements OnInit {
  isResponse=true
  objStudent:any;
  constructor(private clHomeservice:CLHomeserviceService) { }

  ngOnInit() {
    this.getStudentList();
  }
  getStudentList(){
    this.clHomeservice.getStudentList().subscribe(res => {
      this.isResponse=false
      console.log("res")
      console.log(res)
      //this.objStudent=res['body']
      console.log(this.objStudent)

    })
  }
}
