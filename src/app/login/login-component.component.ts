import { Component, OnInit } from '@angular/core';
import { CLLoginserviceService } from './loginservice.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
  providers: [CLLoginserviceService]
})
export class CLLoginComponentComponent implements OnInit {
  formroup = new FormGroup({
    username: new FormControl<string>('Admin'),
    password: new FormControl<string>('admin'),
  });
  errorMsg?: string
  constructor(private clLoginService: CLLoginserviceService, private formbuider: FormBuilder, private router: Router) { }
  isResponse = false
  ngOnInit() {
    // this.createFormGroup()
  }
  createFormGroup() {
    // this.formroup = this.formbuider.group({
    //   username: ['Chandankumar'],
    //   password: ['eliteacademy']
    // })
  }

  // Rest Api call for vaidationr
  validateUser(): any {
    console.log(this.formroup.value.username)
    this.router.navigateByUrl('/welcome', { state: { username: this.formroup?.value.username } })
    this.isResponse = true;
    var sUserName = this.formroup.value.username;
    var sPassword = this.formroup?.value.password
    this.clLoginService.validateUser().subscribe(res => {
      console.log(res)
      if (sUserName == 'Admin') {
        this.isResponse = false;
        this.router.navigateByUrl('/welcome', { state: { username: this.formroup.value.username } })
        this.errorMsg = undefined
      }
      else if (res && sUserName == 'Ranjan' && sPassword == 'ranjan') {
        this.router.navigateByUrl('/studentsection', { state: { username: this.formroup.value.username } })
        this.errorMsg = undefined
      }
      else {
        this.errorMsg = "Invalid User Please enter valid credentials"
      }
    })
    if (this.formroup.controls.username.value == 'chandankumar' && this.formroup.controls.password.value == 'eliteacademy') {
      // alert("Valid ")
      this.router.navigateByUrl('/studentsection')
      this.errorMsg = undefined
    }
    else {
      // this.router.navigateByUrl('/studentsection')
      this.errorMsg = "Invalid User Please enter valid credentials"
    }
  }

} 
