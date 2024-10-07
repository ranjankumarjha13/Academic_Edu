import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class CLWelcomeComponent implements OnInit {
  data: any;
  dataBar: any;
  dataLineCart: any
  dataPolarChart: any;
  currentAdmin?: string
  currentDate?: string
  logOutTime?:string
  constructor(private router: Router) {




  }

  ngOnInit() {
    if (window.history.state['username']) {
      this.currentAdmin = window.history.state['username']
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.currentDate=time
    }
    this.loadPieChartData()
    this.loadLineData();
    this.loadBarChart();
    this.loadPolarChart()
  }
  loadPolarChart() {
    this.dataPolarChart = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Boys",
        "Girls",
        "Teacher",
        "Pass Percentae",
        "Blue"
      ]
    }
  }
  loadBarChart() {
    this.dataBar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Pass Percentae',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Girls',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Boys',
          backgroundColor: 'blue',
          borderColor: '#7CB342',
          data: [20, 41, 40, 19, 77, 27, 90]
        },
        {
          label: 'Teacher',
          backgroundColor: 'pink',
          borderColor: '#8888',
          data: [61, 4, 40, 19, 77, 17, 30]
        }
      ]
    }

  }
  onCickPrint(){
    window.print()
  }
  loadLineData() {
    this.dataLineCart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }
  }


  loadPieChartData() {
    this.data = {
      labels: ['Girls', 'Boys', 'Passpercentage'],
      datasets: [
        {
          data: [300, 50, 100, 60],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FFCE456"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FFCE456"
          ]
        }]
    }


  }
  onClickRouterArea(){
    //document.getElementById('logId').style.display='none'
  }
  onClickome() {
   //document.getElementById('logId')?.style.display="none";
    this.router.navigateByUrl('/welcome/registration')
  }
  onClicStudentList(){
    //document.getElementById('logId').style.display='none'
    this.router.navigateByUrl('/welcome/studentList')
  }
  onClicDashBoard(){
    //document.getElementById('logId').style.display='none'
    this.router.navigateByUrl('/welcome/dashboard')
  }
  onClickPayment(){
    this.router.navigateByUrl('/welcome/payment')
  }
  logout() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.logOutTime=time
      this.router.navigateByUrl('/login')
    // document.getElementById('logId').style.display='inline-block'
    
    // this.router.navigateByUrl('/login')
  }
  onClcikSignOut(){ 
    
    
     this.router.navigateByUrl('/login')
  }
  onClickheader(){
    // document.getElementById('logId').style.display='none'
  }
}
