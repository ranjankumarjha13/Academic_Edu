import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser:string | undefined
  currentTime:string | undefined
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    if(window.history.state['username']){
     this.currentUser=window.history.state['username']
     var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.currentTime=time
    }
    //document.getElementById("mySidenav").style.width = "200px";
  }

  onClickBack() {
    this.location.back()
  }
  Welcome(){
    this.router.navigateByUrl('/welcome')
  }
  openNav() {
    //document.getElementById("mySidenav").style.width = "200px";
  }
  closeNav() {
    //document.getElementById("mySidenav").style.width = "0";
  }
  clickHomeMenu(homeMenu: string) {
    //document.getElementById('homescreen').style.display = "none"
    this.router.navigateByUrl('/studentsection/' + homeMenu)
  }
  logout() {
    this.router.navigateByUrl('/login')
  }
}
