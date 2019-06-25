import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { City } from '../city';
import { SwitchboardService } from '../switchboard.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'city-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  city:City;
  switchboard:SwitchboardService;
  subCity:Subscription;
  
  constructor(switchboard:SwitchboardService) {
    this.switchboard = switchboard;
   }

  ngOnInit():void {
    this.subCity = this.switchboard.city.subscribe((c) =>{
      this.city = c;
    });
  }

  ngOnDestroy():void{
    this.subCity.unsubscribe();
  }

}
