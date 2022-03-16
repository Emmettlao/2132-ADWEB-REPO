import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/myservice.service';
@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {
Empinfo: any;

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.Empinfo = this.myservice.employeenames();
  }

}
