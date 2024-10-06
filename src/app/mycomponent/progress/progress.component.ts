import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class CLProgressComponent implements OnInit {
  @Input() message: any;
   sMessage?:string;
  constructor() { }

  ngOnInit() {
    this.sMessage=this.message
    
  }
}


