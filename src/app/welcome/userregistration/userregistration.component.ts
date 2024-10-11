import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CLHomeserviceService } from 'src/app/home/homeservice.service';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.scss'],
  providers: [CLHomeserviceService]
})
export class CLUserregistrationComponent implements OnInit {
  isPrint = false;
  formroup = new FormGroup({
    username: new FormControl<string>('Chandankumar'),
    password: new FormControl<string>('eliteacademy'),
  });
  ngOnInit(): void {

  }

}
