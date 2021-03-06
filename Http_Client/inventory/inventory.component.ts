import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
todaydate: any;
products: any;
newcomponentproperty: any;
newcomponent ="Entered in newcomponent";
serviceproperty: any;

constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.todaydate= this.myservice.showTodayDate()
    this.products= this.myservice.Product()
    this.newcomponentproperty= this.myservice.serviceproperty;
  }
  
}
