import { Component, OnInit, Input, Output } from '@angular/core';
import { City } from '../city';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'city-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedCity:City;
  data:DataService;
  switchboard:SwitchboardService;

  constructor(dataService:DataService,
              switchboard:SwitchboardService){
    this.data = dataService;
    this.switchboard = switchboard;
  }

  ngOnInit() {
  }

  onSelect(newCity:City): void{
    this.selectedCity = newCity;
    this.switchboard.switchCity(newCity);
  }

}
